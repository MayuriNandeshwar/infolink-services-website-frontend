'use client';

import { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT, WHATSAPP_MESSAGES } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function FloatingButtons() {
  const [showSticky, setShowSticky] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Briefly surface the WhatsApp tooltip on first load so visitors who
    // never hover with a mouse (i.e. most mobile users) still see it once.
    const showTimer = setTimeout(() => setShowWhatsAppTooltip(true), 2000);
    const hideTimer = setTimeout(() => setShowWhatsAppTooltip(false), 6000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <>
      <div
        className={`fixed bottom-6 right-6 z-50 flex-col gap-3 ${
          showSticky ? 'hidden lg:flex' : 'flex'
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform pulse-animation"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setShowWhatsAppTooltip(true)}
          onMouseLeave={() => setShowWhatsAppTooltip(false)}
        >
          <MessageCircle className="h-7 w-7 text-white" />
          {showWhatsAppTooltip && (
            <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap">
              Chat with us
            </span>
          )}
        </a>
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          className="w-14 h-14 rounded-full bg-[#0B1F3A] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6 text-white" />
        </a>
      </div>

      {showSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
          <div className="bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex gap-3">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="flex-1 flex items-center justify-center gap-2 bg-[#0B1F3A] text-white py-3 rounded-lg font-semibold text-sm"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-semibold text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
