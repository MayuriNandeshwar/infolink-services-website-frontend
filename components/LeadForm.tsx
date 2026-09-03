'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import { contactFormSchema, STEP_ONE_FIELDS, type ContactFormValues } from '@/lib/validation/contact-schema';
import type { ContactApiResponse, SubmissionStatus } from '@/lib/types/contact';
import { useToast } from '@/components/ui/toast';
import ConsentModal from '@/components/ConsentModal';
import { PROJECT_TYPES, BUDGET_RANGES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface LeadFormProps {
  variant?: 'card' | 'section';
  title?: string;
  subtitle?: string;
}

function getFriendlyErrorMessage(error: unknown): string {
  if (error instanceof TypeError) {
    return 'Network error detected. Please check your internet connection and try again.';
  }
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return 'Unable to submit inquiry. Please try again.';
}

async function submitContactInquiry(payload: ContactFormValues): Promise<void> {
  let response: Response;
  try {
    response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (networkError) {
    console.error('[LeadForm] Network error calling /api/contact:', networkError);
    throw new Error('Network error detected. Please check your internet connection and try again.');
  }

  let data: ContactApiResponse | null = null;
  try {
    data = await response.json();
  } catch (parseError) {
    console.error('[LeadForm] Failed to parse /api/contact response:', parseError);
  }

  if (!response.ok || !data || data.success !== true) {
    const message = data?.message || 'Unable to submit inquiry. Please try again.';
    console.error('[LeadForm] /api/contact returned an error:', { status: response.status, data });
    throw new Error(message);
  }
}

export default function LeadForm({ variant = 'card', title, subtitle }: LeadFormProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [consentOpen, setConsentOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const goToStepTwo = async () => {
    const valid = await form.trigger(STEP_ONE_FIELDS);
    if (valid) setStep(2);
  };

  const handleValidatedSubmit = () => {
    setErrorMessage('');
    setConsentOpen(true);
  };

  // privacyAccepted/marketingAccepted still gate submission in the UI (via
  // ConsentModal) but are no longer sent to /api/contact — consent_given
  // and marketing_consent aren't columns on contact_inquiries anymore.
  const handleConfirmedSubmit = async (privacyAccepted: boolean, _marketingAccepted: boolean) => {
    if (!privacyAccepted) return;

    const values = form.getValues();
    setStatus('submitting');
    setErrorMessage('');

    try {
      await submitContactInquiry(values);

      setStatus('success');
      setConsentOpen(false);
      form.reset();
      setStep(1);
      toast({
        variant: 'success',
        title: 'Thank you! Your inquiry has been received.',
        description: 'Our team will contact you shortly.',
      });
    } catch (err: unknown) {
      const friendlyMessage = getFriendlyErrorMessage(err);
      setStatus('error');
      setErrorMessage(friendlyMessage);
      setConsentOpen(false);
      toast({ variant: 'error', title: 'Something went wrong', description: friendlyMessage });
    }
  };

  if (status === 'success') {
    return (
      <div className={`text-center py-12 ${variant === 'card' ? 'bg-white rounded-2xl shadow-xl p-6 md:p-8' : ''}`}>
        <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6 font-medium">
          Your inquiry has been received. Our team will contact you shortly.
        </p>
        <Button onClick={() => setStatus('idle')} className="btn-primary">
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className={variant === 'card' ? 'bg-white rounded-2xl shadow-xl p-6 md:p-8' : ''}>
      {title && <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2">{title}</h3>}
      {subtitle && <p className="text-gray-600 mb-5">{subtitle}</p>}

      <div className="flex items-center gap-2 mb-6" aria-hidden="true">
        <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-[#0B1F3A]' : 'bg-gray-200'}`} />
        <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-[#0B1F3A]' : 'bg-gray-200'}`} />
      </div>
      <p className="text-xs font-medium text-gray-500 mb-5 -mt-3">
        Step {step} of 2 — {step === 1 ? 'Your contact details' : 'A bit about your project'}
      </p>

      <form onSubmit={form.handleSubmit(handleValidatedSubmit)} className="space-y-4" noValidate>
        {step === 1 && (
          <>
            <div className="space-y-1.5">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                {...form.register('name')}
                placeholder="Enter your full name"
                className="border-gray-300"
                aria-invalid={!!form.formState.errors.name}
                autoComplete="name"
              />
              {form.formState.errors.name && (
                <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>
              )}
            </div>

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
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...form.register('email')}
                placeholder="you@company.com"
                className="border-gray-300"
                aria-invalid={!!form.formState.errors.email}
                autoComplete="email"
              />
              {form.formState.errors.email && (
                <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
              )}
            </div>

            <Button
              type="button"
              onClick={goToStepTwo}
              className="w-full btn-primary inline-flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-center text-gray-500">
              <ShieldCheck className="h-3.5 w-3.5 text-gray-400" />
              Your information is safe with us. No spam calls.
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <div className="space-y-1.5">
              <Label htmlFor="company_name">
                Company Name <span className="text-gray-400 font-normal">(optional)</span>
              </Label>
              <Input
                id="company_name"
                {...form.register('company_name')}
                placeholder="Your company name"
                className="border-gray-300"
                aria-invalid={!!form.formState.errors.company_name}
                autoComplete="organization"
              />
              {form.formState.errors.company_name && (
                <p className="text-xs text-red-500">{form.formState.errors.company_name.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>
                  Project Type <span className="text-gray-400 font-normal">(optional)</span>
                </Label>
                <Select
                  value={form.watch('project_type')}
                  onValueChange={(v) => form.setValue('project_type', v, { shouldValidate: true })}
                >
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROJECT_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.project_type && (
                  <p className="text-xs text-red-500">{form.formState.errors.project_type.message}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label>
                  Budget Range <span className="text-gray-400 font-normal">(optional)</span>
                </Label>
                <Select
                  value={form.watch('budget')}
                  onValueChange={(v) => form.setValue('budget', v, { shouldValidate: true })}
                >
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUDGET_RANGES.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.budget && (
                  <p className="text-xs text-red-500">{form.formState.errors.budget.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message">
                Project Details <span className="text-gray-400 font-normal">(optional)</span>
              </Label>
              <Textarea
                id="message"
                {...form.register('message')}
                placeholder="Tell us about your project — goals, timeline, and any technical requirements..."
                className="border-gray-300 min-h-[80px]"
              />
              {form.formState.errors.message && (
                <p className="text-xs text-red-500">{form.formState.errors.message.message}</p>
              )}
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {errorMessage}
              </div>
            )}

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                disabled={status === 'submitting'}
                className="border-gray-300 text-gray-600 inline-flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <Button type="submit" disabled={status === 'submitting'} className="flex-1 btn-primary">
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Inquiry'
                )}
              </Button>
            </div>

            <p className="text-xs text-center text-gray-500">
              By submitting, you agree to be contacted by Infolink Services regarding your inquiry.
            </p>
          </>
        )}
      </form>

      <ConsentModal
        open={consentOpen}
        onOpenChange={setConsentOpen}
        onConfirm={handleConfirmedSubmit}
        isSubmitting={status === 'submitting'}
      />
    </div>
  );
}