import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { contactInquiryInputSchema, flattenZodErrors } from '@/lib/validation/contact-schema';
import { getSupabaseAdminClient } from '@/lib/supabase/server';
import type { ContactApiResponse } from '@/lib/types/contact';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch (error) {
    console.error('[api/contact] Failed to parse request body as JSON:', error);
    return NextResponse.json(
      { success: false, message: 'Invalid request. Please check your input and try again.' },
      { status: 400 }
    );
  }

  let payload;
  try {
    payload = contactInquiryInputSchema.parse(rawBody);
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = flattenZodErrors(error);
      console.warn('[api/contact] Validation failed:', errors);
      return NextResponse.json(
        { success: false, message: 'Please check the highlighted fields and try again.', errors },
        { status: 422 }
      );
    }
    console.error('[api/contact] Unexpected validation error:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to submit inquiry. Please try again.' },
      { status: 400 }
    );
  }

  try {
    const supabase = getSupabaseAdminClient();

    const { error } = await supabase.from('contact_inquiries').insert({
      name: payload.name,
      phone: payload.phone,
      email: payload.email || null,
      city: payload.city || null,
      property_type: payload.property_type,
      monthly_bill: payload.monthly_bill,
      message: payload.message || null,
      consent_given: payload.consent_given,
      marketing_consent: payload.marketing_consent ?? false,
      source: 'website',
      status: 'new',
    });

    if (error) {
      console.error('[api/contact] Supabase insert error:', {
        message: error.message,
        code: (error as { code?: string }).code,
        details: (error as { details?: string }).details,
      });
      return NextResponse.json(
        { success: false, message: 'Unable to submit inquiry. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: 'Inquiry submitted successfully' }, { status: 201 });
  } catch (error) {
    console.error('[api/contact] Unexpected server error:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to submit inquiry. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse<ContactApiResponse>> {
  return NextResponse.json({ success: false, message: 'Method not allowed.' }, { status: 405 });
}