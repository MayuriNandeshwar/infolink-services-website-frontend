import type { Metadata } from 'next';
import PartnersShowcase from '@/components/PartnersShowcase';
import ContactCTA from '@/components/sections/ContactCTA';
import { getBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Our Partners',
  description: '76+ industry partners built over 13+ years of business relationships — see the organizations that trust Infolink Services.',
  alternates: {
    canonical: '/partners',
  },
};

export default function PartnersPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Partners', url: '/partners' }]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative pt-20 pb-16 gradient-hero overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">Our Network</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              76+ Industry Partners
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              A decade-plus of relationship-first business built our network of 76+ organizations across
              Maharashtra \u2014 the same trust that now carries into every software engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-gray">
        <div className="container-custom">
          <PartnersShowcase />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
