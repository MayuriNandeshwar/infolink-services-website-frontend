import { Phone, MessageCircle } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import { CONTACT, WHATSAPP_MESSAGES } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function LeadFormSection() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.consultation);

  return (
    <section id="lead-form" className="relative overflow-hidden scroll-mt-20 bg-gradient-to-r from-[#071B3A] via-[#0B2550] to-[#12386D] py-14 md:py-16 mb-0">
      <div className="glow-subtle top-1/4 right-1/4 w-72 h-72 bg-[#2563EB]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">Get Started</p>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-5">
              Ready to Transform Your
              <span className="block text-[#2563EB]">
                Business with Technology?
              </span>
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              Tell us a little about your project. Our engineering team will assess your requirements and get back to you with a customized proposal — no obligation, no pressure, no hard sell.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <h3 className="text-3xl font-bold text-white">13+</h3>
                <p className="text-sm text-slate-300">Years</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">100+</h3>
                <p className="text-sm text-slate-300">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">1000+</h3>
                <p className="text-sm text-slate-300">Clients</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                'Free project consultation',
                'Custom software architecture planning',
                'Fixed milestones and transparent pricing',
                'Dedicated development & support team',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/15 pt-6">
              <p className="text-gray-300 text-sm mb-3">Prefer to talk instead of filling a form?</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-5 py-2.5 rounded-lg transition-all text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Call {CONTACT.phone}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-medium px-5 py-2.5 rounded-lg transition-all text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          <div>
            <LeadForm
              variant="card"
              title="Request Free Consultation"
              subtitle="Takes less than a minute. Our team will contact you within 24 hours."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
