import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { ZodError } from 'zod';
import {
  careerApplicationSchema,
  flattenZodErrors,
  validateResumeFile,
  RESUME_MAX_SIZE_BYTES,
} from '@/lib/validation/career-schema';
import { getSupabaseAdminClient } from '@/lib/supabase/server';
import type { CareerApiResponse } from '@/lib/types/career';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const RESUME_BUCKET = 'career-resumes';

// How long the stored resume URL stays valid. There is no admin dashboard
// for this feature (per spec) — staff review applications directly via the
// Supabase table/Storage UI — so we sign the URL for a long window (10
// years) rather than a short-lived one, since resume_url is read straight
// out of the table rather than re-generated on demand.
const SIGNED_URL_EXPIRES_IN_SECONDS = 60 * 60 * 24 * 365 * 10;

function sanitizeFileName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]+/g, '-')
    .replace(/-+/g, '-')
    .slice(-120); // keep it short; avoids pathological long filenames
}

function getExtension(name: string): string {
  const idx = name.lastIndexOf('.');
  return idx >= 0 ? name.slice(idx) : '';
}

export async function POST(request: NextRequest): Promise<NextResponse<CareerApiResponse>> {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch (error) {
    console.error('[api/careers] Failed to parse request as multipart form data:', error);
    return NextResponse.json(
      { success: false, message: 'Invalid request. Please check your input and try again.' },
      { status: 400 }
    );
  }

  const rawFields = {
    full_name: formData.get('full_name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    location: formData.get('location'),
    experience: formData.get('experience'),
    position: formData.get('position'),
  };

  let payload;
  try {
    payload = careerApplicationSchema.parse(rawFields);
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = flattenZodErrors(error);
      console.warn('[api/careers] Validation failed:', errors);
      return NextResponse.json(
        { success: false, message: 'Please check the highlighted fields and try again.', errors },
        { status: 422 }
      );
    }
    console.error('[api/careers] Unexpected validation error:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to submit application. Please try again.' },
      { status: 400 }
    );
  }

  const resumeEntry = formData.get('resume');
  const resumeFile = resumeEntry instanceof File ? resumeEntry : null;

  const fileError = validateResumeFile(
    resumeFile ? { size: resumeFile.size, type: resumeFile.type, name: resumeFile.name } : null
  );
  if (fileError || !resumeFile) {
    return NextResponse.json(
      {
        success: false,
        message: 'Please check the highlighted fields and try again.',
        errors: { resume: fileError || 'Please attach your resume.' },
      },
      { status: 422 }
    );
  }

  try {
    const supabase = getSupabaseAdminClient();

    const arrayBuffer = await resumeFile.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    if (fileBuffer.byteLength > RESUME_MAX_SIZE_BYTES) {
      return NextResponse.json(
        { success: false, message: 'Resume must be under 5 MB.', errors: { resume: 'Resume must be under 5 MB.' } },
        { status: 422 }
      );
    }

    const extension = getExtension(sanitizeFileName(resumeFile.name)) || '.pdf';
    const storagePath = `applications/${randomUUID()}${extension}`;

    const { error: uploadError } = await supabase.storage
      .from(RESUME_BUCKET)
      .upload(storagePath, fileBuffer, {
        contentType: resumeFile.type || 'application/octet-stream',
        upsert: false,
      });

    if (uploadError) {
      console.error('[api/careers] Supabase storage upload error:', uploadError.message);
      return NextResponse.json(
        { success: false, message: 'Unable to upload resume. Please try again.' },
        { status: 502 }
      );
    }

    const { data: signedUrlData, error: signedUrlError } = await supabase.storage
      .from(RESUME_BUCKET)
      .createSignedUrl(storagePath, SIGNED_URL_EXPIRES_IN_SECONDS);

    if (signedUrlError || !signedUrlData?.signedUrl) {
      console.error('[api/careers] Failed to create signed URL for resume:', signedUrlError?.message);
      // Clean up the orphaned file rather than leaving storage and the
      // (about-to-fail) DB insert out of sync.
      await supabase.storage.from(RESUME_BUCKET).remove([storagePath]);
      return NextResponse.json(
        { success: false, message: 'Unable to process resume upload. Please try again.' },
        { status: 502 }
      );
    }

    const { error: insertError } = await supabase.from('career_applications').insert({
      full_name: payload.full_name,
      email: payload.email,
      phone: payload.phone,
      location: payload.location,
      experience: payload.experience,
      position: payload.position,
      resume_url: signedUrlData.signedUrl,
    });

    if (insertError) {
      console.error('[api/careers] Supabase insert error:', {
        message: insertError.message,
        code: (insertError as { code?: string }).code,
        details: (insertError as { details?: string }).details,
      });
      await supabase.storage.from(RESUME_BUCKET).remove([storagePath]);
      return NextResponse.json(
        { success: false, message: 'Unable to submit application. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('[api/careers] Unexpected server error:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to submit application. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse<CareerApiResponse>> {
  return NextResponse.json({ success: false, message: 'Method not allowed.' }, { status: 405 });
}
