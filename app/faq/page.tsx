import type { Metadata } from 'next';
import FAQBrowser from '@/components/FAQBrowser';
import ContactCTA from '@/components/sections/ContactCTA';
import { getFaqSchema, getBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about project costs, engagement models, technical delivery, financing, warranties, and support — organized by category.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  const faqSchema = getFaqSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'FAQ', url: '/faq' }]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative pt-20 pb-16 gradient-hero overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">Help Center</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Browse by category, or search visually for what you need to know about working with Infolink Services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-gray">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FAQBrowser />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
