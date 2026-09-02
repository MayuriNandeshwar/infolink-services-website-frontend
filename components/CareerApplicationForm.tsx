'use client';

import { useRef, useState, type ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle2, AlertCircle, UploadCloud, FileText, X } from 'lucide-react';
import {
  careerApplicationSchema,
  validateResumeFile,
  RESUME_ACCEPT_ATTR,
  type CareerApplicationFormValues,
} from '@/lib/validation/career-schema';
import { APPLICATION_POSITIONS, EXPERIENCE_RANGES } from '@/lib/careers-data';
import type { CareerApiResponse, CareerSubmissionStatus } from '@/lib/types/career';
import { useToast } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CareerApplicationFormProps {
  defaultPosition?: string;
  /** 'card' (default) renders the existing self-contained white card with
   *  its own "Apply Now" heading — used on the /careers page's general
   *  application section. 'bare' renders just the <form> itself, with no
   *  outer card/heading, for embedding inside the per-job Dialog (which
   *  supplies its own title/description). */
  variant?: 'card' | 'bare';
}

function getFriendlyErrorMessage(error: unknown): string {
  if (error instanceof TypeError) {
    return 'Network error detected. Please check your internet connection and try again.';
  }
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return 'Unable to submit application. Please try again.';
}

async function submitApplication(values: CareerApplicationFormValues, resumeFile: File): Promise<void> {
  const formData = new FormData();
  formData.append('full_name', values.full_name);
  formData.append('email', values.email);
  formData.append('phone', values.phone);
  formData.append('location', values.location);
  formData.append('experience', values.experience);
  formData.append('position', values.position);
  formData.append('resume', resumeFile);

  let response: Response;
  try {
    response = await fetch('/api/careers', { method: 'POST', body: formData });
  } catch (networkError) {
    console.error('[CareerApplicationForm] Network error calling /api/careers:', networkError);
    throw new Error('Network error detected. Please check your internet connection and try again.');
  }

  let data: CareerApiResponse | null = null;
  try {
    data = await response.json();
  } catch (parseError) {
    console.error('[CareerApplicationForm] Failed to parse /api/careers response:', parseError);
  }

  if (!response.ok || !data || data.success !== true) {
    const message = data?.message || 'Unable to submit application. Please try again.';
    console.error('[CareerApplicationForm] /api/careers returned an error:', { status: response.status, data });
    throw new Error(message);
  }
}

export default function CareerApplicationForm({ defaultPosition, variant = 'card' }: CareerApplicationFormProps) {
  const [status, setStatus] = useState<CareerSubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const form = useForm<CareerApplicationFormValues>({
    resolver: zodResolver(careerApplicationSchema),
    mode: 'onBlur',
    defaultValues: { position: defaultPosition || '' },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    const error = validateResumeFile(file ? { size: file.size, type: file.type, name: file.name } : null);
    setResumeError(error);
    setResumeFile(error ? null : file);
  };

  const clearFile = () => {
    setResumeFile(null);
    setResumeError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const onSubmit = async (values: CareerApplicationFormValues) => {
    const fileValidation = validateResumeFile(
      resumeFile ? { size: resumeFile.size, type: resumeFile.type, name: resumeFile.name } : null
    );
    if (fileValidation || !resumeFile) {
      setResumeError(fileValidation || 'Please attach your resume.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      await submitApplication(values, resumeFile);
      setStatus('success');
      form.reset({ position: '' });
      clearFile();
      toast({
        variant: 'success',
        title: 'Application received!',
        description: 'Thank you for applying. Our team will review your profile and get in touch.',
      });
    } catch (err: unknown) {
      const friendlyMessage = getFriendlyErrorMessage(err);
      setStatus('error');
      setErrorMessage(friendlyMessage);
      toast({ variant: 'error', title: 'Something went wrong', description: friendlyMessage });
    }
  };

  if (status === 'success') {
    return (
      <div className={variant === 'card' ? 'text-center py-12 bg-white rounded-2xl shadow-xl p-6 md:p-8' : 'text-center py-8'}>
        <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6 font-medium">
          Your application has been received. Our team will review it and reach out if there&apos;s a fit.
        </p>
        <Button onClick={() => setStatus('idle')} className="btn-primary">
          Submit Another Application
        </Button>
      </div>
    );
  }

  const formBody = (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="full_name">Full Name *</Label>
            <Input
              id="full_name"
              {...form.register('full_name')}
              placeholder="Enter your full name"
              className="border-gray-300"
              aria-invalid={!!form.formState.errors.full_name}
              autoComplete="name"
            />
            {form.formState.errors.full_name && (
              <p className="text-xs text-red-500">{form.formState.errors.full_name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...form.register('email')}
              placeholder="you@example.com"
              className="border-gray-300"
              aria-invalid={!!form.formState.errors.email}
              autoComplete="email"
            />
            {form.formState.errors.email && (
              <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              {...form.register('phone')}
              placeholder="10-digit mobile number"
              className="border-gray-300"
              aria-invalid={!!form.formState.errors.phone}
              autoComplete="tel"
            />
            {form.formState.errors.phone && (
              <p className="text-xs text-red-500">{form.formState.errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="location">Current Location *</Label>
            <Input
              id="location"
              {...form.register('location')}
              placeholder="City, State"
              className="border-gray-300"
              aria-invalid={!!form.formState.errors.location}
              autoComplete="address-level2"
            />
            {form.formState.errors.location && (
              <p className="text-xs text-red-500">{form.formState.errors.location.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label>Years of Experience *</Label>
            <Select
              value={form.watch('experience')}
              onValueChange={(v) => form.setValue('experience', v, { shouldValidate: true })}
            >
              <SelectTrigger className="border-gray-300">
                <SelectValue placeholder="Select experience" />
              </SelectTrigger>
              <SelectContent>
                {EXPERIENCE_RANGES.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.experience && (
              <p className="text-xs text-red-500">{form.formState.errors.experience.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label>Position Applying For *</Label>
            <Select
              value={form.watch('position')}
              onValueChange={(v) => form.setValue('position', v, { shouldValidate: true })}
            >
              <SelectTrigger className="border-gray-300">
                <SelectValue placeholder="Select a position" />
              </SelectTrigger>
              <SelectContent>
                {APPLICATION_POSITIONS.map((pos) => (
                  <SelectItem key={pos} value={pos}>
                    {pos}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.position && (
              <p className="text-xs text-red-500">{form.formState.errors.position.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="resume">Resume Upload *</Label>

          {!resumeFile ? (
            <label
              htmlFor="resume"
              className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-xl px-4 py-8 text-center cursor-pointer hover:border-[#0B1F3A] hover:bg-blue-50/40 transition-colors"
            >
              <UploadCloud className="h-8 w-8 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Click to upload your resume</span>
              <span className="text-xs text-gray-400">PDF, DOC, or DOCX — up to 5 MB</span>
              <input
                ref={fileInputRef}
                id="resume"
                name="resume"
                type="file"
                accept={RESUME_ACCEPT_ATTR}
                onChange={handleFileChange}
                className="sr-only"
              />
            </label>
          ) : (
            <div className="flex items-center justify-between gap-3 border border-gray-300 rounded-xl px-4 py-3">
              <div className="flex items-center gap-3 min-w-0">
                <FileText className="h-5 w-5 text-[#0B1F3A] flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{resumeFile.name}</p>
                  <p className="text-xs text-gray-400">{(resumeFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                </div>
              </div>
              <button
                type="button"
                onClick={clearFile}
                className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                aria-label="Remove selected resume"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}

          {resumeError && <p className="text-xs text-red-500">{resumeError}</p>}
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            {errorMessage}
          </div>
        )}

        <Button type="submit" disabled={status === 'submitting'} className="w-full btn-primary">
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting Application...
            </>
          ) : (
            'Submit Application'
          )}
        </Button>

        <p className="text-xs text-center text-gray-500">
          By submitting, you agree to let Infolink Services store and review your details for recruitment purposes.
        </p>
      </form>
  );

  if (variant === 'bare') {
    return formBody;
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2">Apply Now</h3>
      <p className="text-gray-600 mb-6">Share your details and resume — our team reviews every application.</p>
      {formBody}
    </div>
  );
}
