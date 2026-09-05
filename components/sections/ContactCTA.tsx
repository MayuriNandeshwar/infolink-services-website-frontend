import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT, WHATSAPP_MESSAGES } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function ContactCTA() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.readyToGo);

  return (
    <section className="section-padding section-bg-gray py-14 md:py-16">

      <div className="container-custom">
        <div className="bg-[#0B1F3A] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="glow-subtle top-0 right-0 w-64 h-64 bg-[#2563EB]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Your Next Software Product?
              </h2>
              <p className="text-gray-200 text-lg mb-8 max-w-xl">
                Connect with our development team today. Get a free consultation and a personalized project quote.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-lg transition-all"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-6 py-3 rounded-lg transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-all"
              >
                <Mail className="h-6 w-6 text-[#2563EB] mb-3" />
                <p className="text-white font-semibold text-sm">Email Us</p>
                <p className="text-gray-300 text-xs mt-1">{CONTACT.email}</p>
              </a>
              <a href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-all block" >
              <MapPin className="h-6 w-6 text-[#2563EB] mb-3" />
              <p className="text-white font-semibold text-sm">
                Visit Us
              </p>
              <p className="text-gray-300 text-xs mt-1">
                Nagpur, Maharashtra
              </p>
              </a>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-all col-span-1 sm:col-span-2 flex items-center justify-between"
              >
                <div>
                  <p className="text-white font-semibold text-sm">Get a Free Quote</p>
                  <p className="text-gray-300 text-xs mt-1">Fill out our inquiry form</p>
                </div>
                <ArrowRight className="h-5 w-5 text-[#2563EB]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
