export interface CareerApplication {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  position: string;
  resume_url: string;
}

export interface CareerApplicationInput {
  full_name: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  position: string;
}

export interface CareerApiSuccessResponse {
  success: true;
  message: string;
}

export interface CareerApiErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string>;
}

export type CareerApiResponse = CareerApiSuccessResponse | CareerApiErrorResponse;

export type CareerSubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';
