import { z } from 'zod';

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;
const MOBILE_ERROR_MESSAGE = 'Please enter a valid 10-digit mobile number.';

export const phoneSchema = z
  .string()
  .trim()
  .min(1, { message: 'Mobile number is required.' })
  .regex(INDIAN_MOBILE_REGEX, { message: MOBILE_ERROR_MESSAGE });

// NOTE: field keys (city, property_type, monthly_bill, message) intentionally
// match the existing `contact_inquiries` Supabase table and /api/contact
// route so no backend/schema changes are required. Only labels, copy, and
// validation messages below have been updated for the software lead form —
// `city` now carries the "Company" value, `property_type` carries "Project
// Type", and `monthly_bill` carries "Budget Range".
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name must be under 100 characters.' })
    .regex(/^[a-zA-Z\s.'-]+$/, { message: 'Name can only contain letters, spaces, and punctuation.' }),
  phone: phoneSchema,
  city: z.string().trim().min(2, { message: 'Enter your company name.' }).max(100, { message: 'Company name must be under 100 characters.' }),
  email: z.string().trim().email({ message: 'Enter a valid email address.' }).max(255).optional().or(z.literal('')),
  property_type: z.string().min(1, { message: 'Select a project type.' }),
  monthly_bill: z.string().min(1, { message: 'Select your budget range.' }),
  message: z.string().trim().max(2000, { message: 'Project details must be under 2000 characters.' }).optional().or(z.literal('')),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const STEP_ONE_FIELDS = ['name', 'phone', 'city'] as const;

export const contactInquiryInputSchema = contactFormSchema.extend({
  consent_given: z.literal(true, {
    errorMap: () => ({ message: 'Consent is required before we can submit your inquiry.' }),
  }),
  marketing_consent: z.boolean().optional().default(false),
});

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