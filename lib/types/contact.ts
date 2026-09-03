export type PropertyType = string;
export type MonthlyBillRange = string;

export interface ContactInquiry {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  company_name: string | null;
  project_type: string | null;
  budget: string | null;
  message: string | null;
}

export interface ContactInquiryInput {
  name: string;
  phone: string;
  email: string;
  company_name?: string;
  project_type?: string;
  budget?: string;
  message?: string;
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