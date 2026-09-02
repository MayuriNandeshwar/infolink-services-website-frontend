'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Handshake, Building2, LayoutGrid } from 'lucide-react';

const PARTNER_COUNT = 76;
const PARTNERS = Array.from({ length: PARTNER_COUNT }, (_, i) => `/partners/partner-${i + 1}.png`);

export default function PartnersShowcase() {
  const [visibleCount, setVisibleCount] = useState(24);

  return (
    <div>
      {/* Partner count section */}
      <div className="mx-auto mb-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          { icon: Handshake, value: '76+', label: 'Industry Partners' },
          { icon: Building2, value: '1,000+', label: 'Business Relationships' },
          { icon: LayoutGrid, value: '13+', label: 'Years of Partnership' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1F3A]">
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <p className="mt-4 text-3xl font-bold text-[#0B1F3A]">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Auto-scrolling logo wall */}
      <div className="mb-16">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
          Trusted By Organizations Across Maharashtra
        </p>
        <div className="pause-on-hover relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-10 py-2">
            {[...PARTNERS, ...PARTNERS].map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="flex h-16 w-32 flex-shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-white grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100 hover:shadow-md"
              >
                <Image
                  src={src}
                  alt="Partner organization logo"
                  width={112}
                  height={56}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid view */}
      <div>
        <h2 className="mb-6 text-center text-2xl font-bold text-[#0B1F3A]">All Partners</h2>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {PARTNERS.slice(0, visibleCount).map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: (i % 12) * 0.03 }}
              className="group flex aspect-square items-center justify-center rounded-xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#0B1F3A]/30 hover:shadow-lg"
            >
              <Image
                src={src}
                alt={`Partner logo ${i + 1}`}
                width={96}
                height={96}
                className="max-h-full w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>

        {visibleCount < PARTNERS.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount(PARTNERS.length)}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0B1F3A] bg-white px-6 py-3 font-semibold text-[#0B1F3A] transition-all duration-200 hover:bg-gray-50"
            >
              Show All {PARTNERS.length} Partners
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
