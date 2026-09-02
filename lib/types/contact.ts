export type PropertyType = string;
export type MonthlyBillRange = string;

export interface ContactInquiry {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  city: string | null;
  property_type: string;
  monthly_bill: string;
  message: string | null;
  consent_given: boolean;
  marketing_consent: boolean;
  source: string;
  status: ContactInquiryStatus;
}

export type ContactInquiryStatus = 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';

export interface ContactInquiryInput {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  property_type: string;
  monthly_bill: string;
  message?: string;
  consent_given: boolean;
  marketing_consent?: boolean;
}

export interface ContactApiSuccessResponse {
  success: true;
  message: string;
}

export interface ContactApiErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string>;
}

export type ContactApiResponse = ContactApiSuccessResponse | ContactApiErrorResponse;

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';