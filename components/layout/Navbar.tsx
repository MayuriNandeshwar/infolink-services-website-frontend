'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Job Fairs', href: '/job-fairs' },
  { label: 'Career', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const transparent = false;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-2 transition-all duration-300`}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo-t.png"
            alt="Infolink Services"
            width={280}
            height={81}
            priority
            className="h-10 md:h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <Link href="/contact">
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-5">
              Request Proposal
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-slate-900" />
          ) : (
            <Menu className="h-6 w-6 text-slate-900" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="container-custom py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                  pathname === link.href
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-100">
              <Link href="/contact">
                <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                  Request Proposal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}