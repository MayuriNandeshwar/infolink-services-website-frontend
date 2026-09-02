import { z } from 'zod';

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;
const MOBILE_ERROR_MESSAGE = 'Please enter a valid 10-digit mobile number.';

// Resume upload constraints — enforced client-side (before upload starts)
// and again server-side in app/api/careers/route.ts, since client-side
// checks can always be bypassed.
export const RESUME_MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
export const RESUME_ACCEPTED_MIME_TYPES = [
  'application/pdf',
  'application/msword', // .doc
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
] as const;
export const RESUME_ACCEPTED_EXTENSIONS = ['.pdf', '.doc', '.docx'] as const;
export const RESUME_ACCEPT_ATTR = '.pdf,.doc,.docx';

// The text fields of the career application form. File validation is kept
// separate (see validateResumeFile below) because native <input type="file">
// FileList objects don't serialize cleanly through a single zod schema
// shared between a JSON body and a multipart FormData body.
export const careerApplicationSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name must be under 100 characters.' })
    .regex(/^[a-zA-Z\s.'-]+$/, { message: 'Name can only contain letters, spaces, and punctuation.' }),
  email: z.string().trim().email({ message: 'Enter a valid email address.' }).max(255),
  phone: z
    .string()
    .trim()
    .min(1, { message: 'Mobile number is required.' })
    .regex(INDIAN_MOBILE_REGEX, { message: MOBILE_ERROR_MESSAGE }),
  location: z
    .string()
    .trim()
    .min(2, { message: 'Enter your current location.' })
    .max(100, { message: 'Location must be under 100 characters.' }),
  experience: z.string().min(1, { message: 'Select your experience level.' }),
  position: z.string().min(1, { message: 'Select the position you are applying for.' }),
});

export type CareerApplicationFormValues = z.infer<typeof careerApplicationSchema>;

export function flattenZodErrors(error: z.ZodError): Record<string, string> {
  const fieldErrors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path.join('.') || 'form';
    if (!fieldErrors[key]) {
      fieldErrors[key] = issue.message;
    }
  }
  return fieldErrors;
}

/**
 * Validates a resume file's presence, size, and type. Used both in the
 * browser (fast feedback before upload) and again on the server (source of
 * truth — never trust client-side validation alone).
 */
export function validateResumeFile(file: { size: number; type: string; name: string } | null | undefined): string | null {
  if (!file) {
    return 'Please attach your resume.';
  }
  if (file.size <= 0) {
    return 'The selected file appears to be empty.';
  }
  if (file.size > RESUME_MAX_SIZE_BYTES) {
    return 'Resume must be under 5 MB.';
  }

  const nameLower = file.name.toLowerCase();
  const hasAcceptedExtension = RESUME_ACCEPTED_EXTENSIONS.some((ext) => nameLower.endsWith(ext));
  const hasAcceptedMimeType = (RESUME_ACCEPTED_MIME_TYPES as readonly string[]).includes(file.type);

  if (!hasAcceptedExtension && !hasAcceptedMimeType) {
    return 'Resume must be a PDF, DOC, or DOCX file.';
  }

  return null;
}
