import type { Metadata } from 'next';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { CONTACT, WHATSAPP_MESSAGES } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import LeadForm from '@/components/LeadForm';
import ServiceAreas from '@/components/sections/ServiceAreas';
import { getBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Infolink Services for a free consultation. Call, WhatsApp, or fill out our inquiry form. Our team is ready to help you get started.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Contact Us', url: '/contact' }]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative py-14 md:py-16 gradient-hero overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.08]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">Contact Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Let&apos;s Start Your Project
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Reach out to our team. We&apos;re here to answer your questions and guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-white py-14 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you&apos;re a startup exploring your first product or a business looking to modernize your systems, our team is ready to help. Choose the most convenient way to reach us.
              </p>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-[#1da851] bg-green-50 border border-green-100 rounded-lg px-4 py-2 mb-6">
                <MessageCircle className="h-4 w-4" />
                Tip: WhatsApp is usually our fastest response channel.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="card-premium flex flex-col gap-3 p-5"
                >
                  <div className="icon-chip h-11 w-11">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Call Us</p>
                    <p className="font-bold text-[#0B1F3A] text-sm mt-0.5">{CONTACT.phone}</p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium flex flex-col gap-3 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">WhatsApp</p>
                    <p className="font-bold text-[#0B1F3A] text-sm mt-0.5">Chat with us instantly</p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="card-premium flex flex-col gap-3 p-5"
                >
                  <div className="icon-chip h-11 w-11">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Email Us</p>
                    <p className="font-bold text-[#0B1F3A] text-sm mt-0.5 break-all">{CONTACT.email}</p>
                  </div>
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium flex flex-col gap-3 p-5"
                >
                  <div className="icon-chip h-11 w-11">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Visit Us</p>
                    <p className="font-bold text-[#0B1F3A] text-sm mt-0.5">{CONTACT.address}</p>
                  </div>
                </a>

                <div className="card-premium flex flex-col gap-3 p-5 sm:col-span-2">
                  <div className="icon-chip h-11 w-11">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Business Hours</p>
                    <p className="font-bold text-[#0B1F3A] text-sm mt-0.5">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <LeadForm
                variant="card"
                title="Send Us a Message"
                subtitle="Fill the form below and our team will contact you within 24 hours."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07152D] py-14 md:py-16">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[450px]">
            <iframe
              src={CONTACT.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Infolink Services Nagpur Office"
            />
          </div>
        </div>
      </section>
    </>
  );
}
