import { z } from 'zod';

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;
const MOBILE_ERROR_MESSAGE = 'Please enter a valid 10-digit mobile number.';

export const phoneSchema = z
  .string()
  .trim()
  .min(1, { message: 'Mobile number is required.' })
  .regex(INDIAN_MOBILE_REGEX, { message: MOBILE_ERROR_MESSAGE });

// Field keys match the simplified `contact_inquiries` table:
// name, phone, email (all required) + company_name, project_type, budget,
// message (all optional).
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name must be under 100 characters.' })
    .regex(/^[a-zA-Z\s.'-]+$/, { message: 'Name can only contain letters, spaces, and punctuation.' }),
  phone: phoneSchema,
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Enter a valid email address.' })
    .max(255, { message: 'Email must be under 255 characters.' }),
  company_name: z
    .string()
    .trim()
    .max(100, { message: 'Company name must be under 100 characters.' })
    .optional()
    .or(z.literal('')),
  project_type: z.string().optional().or(z.literal('')),
  budget: z.string().optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .max(2000, { message: 'Project details must be under 2000 characters.' })
    .optional()
    .or(z.literal('')),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Step 1 now validates the three required fields (name, phone, email)
// before letting the user continue — company_name/project_type/budget are
// optional so they don't need to gate step progression.
export const STEP_ONE_FIELDS = ['name', 'phone', 'email'] as const;

// consent_given / marketing_consent removed — those columns no longer
// exist on `contact_inquiries`, so this is just an alias of the base
// schema now. If you still want the ConsentModal to gate submission in
// the UI, that can stay client-side without being part of the payload
// sent to /api/contact.
export const contactInquiryInputSchema = contactFormSchema;

export type ContactInquiryInputValues = z.infer<typeof contactInquiryInputSchema>;

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