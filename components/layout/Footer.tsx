import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { CONTACT, NAV_LINKS } from '@/lib/constants';

// Homepage-scoped service list for the footer. Intentionally not sourced
// from lib/constants SERVICES (that array still powers the existing
// /services page content, which is outside Phase 1 scope) — this keeps
// the footer's "Services" column aligned with the new homepage Services
// section without touching /services itself.
const FOOTER_SERVICES = [
  'Custom Software Development',
  'Web Development',
  'Mobile App Development',
  'ERP Solutions',
  'CRM Solutions',
  'AI Solutions',
  'Cloud Solutions',
  'UI/UX Design',
];

// Additive footer-only navigation. NAV_LINKS (main navbar) is left
// untouched; these are pages that exist in the app but weren't yet
// reachable from the footer. Company Gallery is intentionally not
// listed here — it now lives inside the About page experience
// (see components/about/OfficeGallery.tsx) and the standalone
// /company-gallery route is kept only for SEO/deep-linking, not as a
// footer-promoted destination.
const COMPANY_LINKS = [
  { label: 'Careers', href: '/careers' },
  { label: 'Job Fairs', href: '/job-fairs' },
  { label: 'Partners', href: '/partners' },
  { label: 'FAQs', href: '/faq' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1 space-y-4">
            <span className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5">
              <Image
                src="/images/logo.png"
                alt="Infolink Services"
                width={280}
                height={81}
                className="h-9 w-auto object-contain"
              />
            </span>
            <p className="text-sm leading-relaxed text-slate-400">
              Software development, AI, and cloud consultancy based in Nagpur, Maharashtra.
              Engineering trusted digital solutions since 2010.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/kaustubh-hulke-b94876124"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/infolink_training?igsi=MWR0eGRiMDN3aWw1Zg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-pink-400 hover:bg-pink-500/10 hover:text-pink-400"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <Link href="/#services" className="text-sm text-slate-400 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Get in Touch
            </h3>

            <ul className="space-y-4">

              {/* Phone */}
              <li>
                <a
                  href="tel:+918624907636"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span>+91 86249 07636</span>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/918767109652"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.85 11.85 0 0 0 12.07 0C5.5 0 .14 5.36.14 11.93c0 2.1.55 4.16 1.6 5.97L0 24l6.27-1.65a11.86 11.86 0 0 0 5.8 1.48h.01c6.57 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.49-8.42ZM12.08 21.8a9.8 9.8 0 0 1-5-1.37l-.36-.22-3.72.98.99-3.63-.24-.37a9.79 9.79 0 1 1 8.33 4.61Zm5.37-7.34c-.29-.15-1.71-.84-1.98-.93-.26-.1-.46-.15-.65.15-.19.29-.74.93-.91 1.12-.17.19-.33.22-.62.08-.29-.15-1.21-.44-2.3-1.4-.85-.75-1.42-1.67-1.59-1.95-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.08-.15-.65-1.56-.89-2.14-.23-.56-.47-.49-.65-.5h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.44.01 1.44 1.04 2.83 1.18 3.02.15.19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.11.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.36-.07-.12-.27-.19-.56-.34Z" />
                  </svg>
                  <span>+91 87671 09652</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:info@infolinkservices.com"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span>info@infolinkservices.com</span>
                </a>
              </li>

              {/* Location */}
              <li>
                <a
                  href="https://maps.google.com/?q=INFOLINK+SERVICES+Nagpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span>Nagpur, Maharashtra, India</span>
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Infolink Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-xs text-slate-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
