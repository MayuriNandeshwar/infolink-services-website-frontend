'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

interface ConsentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (privacyAccepted: boolean, marketingAccepted: boolean) => void;
  isSubmitting: boolean;
}

export default function ConsentModal({ open, onOpenChange, onConfirm, isSubmitting }: ConsentModalProps) {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);

  const handleOpenChange = (next: boolean) => {
    if (isSubmitting) return;
    if (!next) {
      setPrivacyAccepted(false);
      setMarketingAccepted(false);
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Consent & Privacy Agreement</DialogTitle>
        </DialogHeader>

        <DialogDescription asChild>
          <div className="space-y-4 text-sm leading-relaxed text-gray-600 text-left">
            <p>
              By submitting this form, you authorize Infolink Services to collect, store, and process the
              information you provide, including your name, phone number, email address, project
              details, and enquiry information, for the purpose of responding to your request,
              providing consultation, preparing quotations, scheduling meetings, and
              delivering our services.
            </p>
            <p>
              Your information will be handled in accordance with our Privacy Policy and applicable
              Indian laws, including the Digital Personal Data Protection Act, 2023. We do not sell,
              rent, or share your personal information with unrelated third parties for marketing
              purposes.
            </p>
            <p>
              You may withdraw your consent or opt out of marketing communications at any time by
              contacting Infolink Services directly.
            </p>
          </div>
        </DialogDescription>

        <div className="space-y-4 pt-4 border-t border-gray-100">
          <label className="flex items-start gap-3 cursor-pointer">
            <Checkbox
              checked={privacyAccepted}
              onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
              disabled={isSubmitting}
            />
            <span className="text-sm text-gray-700 leading-relaxed">
              I have read and agree to the{' '}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#0B1F3A] font-medium underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-[#0B1F3A] font-medium underline">
                Terms & Conditions
              </a>.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <Checkbox
              checked={marketingAccepted}
              onCheckedChange={(checked) => setMarketingAccepted(checked === true)}
              disabled={isSubmitting}
            />
            <span className="text-sm text-gray-700 leading-relaxed">
              I consent to receive calls, SMS, WhatsApp messages, and emails from Infolink Services
              regarding software products, services, consultations, offers, and updates.{' '}
            </span>
          </label>
        </div>

        <DialogFooter className="pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => handleOpenChange(false)}
            disabled={isSubmitting}
            className="border-gray-300 text-gray-600"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => {
              if (!privacyAccepted || !marketingAccepted) {
                return;
              }
              onConfirm(privacyAccepted, marketingAccepted);
            }}
            disabled={!privacyAccepted || !marketingAccepted || isSubmitting}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Continue & Submit'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}