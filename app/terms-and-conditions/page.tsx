import type { Metadata } from 'next';
import ContactCTA from '@/components/sections/ContactCTA';
import { getBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Read the Terms & Conditions governing the use of Infolink Services website, services, consultations, software solutions, and related information.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

export default function TermsConditionsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Terms & Conditions', url: '/terms-and-conditions' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 gradient-hero overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">
              Legal Information
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Terms & Conditions
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed">
              These Terms & Conditions govern your use of the Infolink Services
              website and any services, consultations, products, or
              information provided through this platform.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                1. Acceptance of Terms
              </h2>

              <p className="text-gray-600 leading-relaxed">
                By accessing and using the Infolink Services website, you agree to
                comply with and be bound by these Terms & Conditions. If you
                do not agree with any part of these terms, please discontinue
                the use of this website immediately.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                2. About Infolink Services
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Infolink Services provides information, consultation, design,
                development, maintenance, and support services related to
                software and technology solutions for startup, business, and
                enterprise customers.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                3. Website Content
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                All information on this website is provided for general
                informational purposes only.
              </p>

              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Content may be updated without prior notice.</li>
                <li>
                  Product specifications, pricing, and service details may
                  change over time.
                </li>
                <li>
                  We make reasonable efforts to keep information accurate but
                  do not guarantee completeness or accuracy at all times.
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                4. User Responsibilities
              </h2>

              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Provide accurate and truthful information when submitting
                  forms.
                </li>
                <li>
                  Ensure all documents supplied are authentic and valid.
                </li>
                <li>
                  Use the website only for lawful purposes.
                </li>
                <li>
                  Not engage in activities that may disrupt website
                  functionality or security.
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                5. Intellectual Property Rights
              </h2>

              <p className="text-gray-600 leading-relaxed">
                All website content including text, graphics, logos, designs,
                icons, images, videos, code, and layouts are the property of
                Infolink Services unless otherwise stated. Unauthorized copying,
                reproduction, modification, distribution, or commercial use is
                prohibited without written permission.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                6. Third-Party Links
              </h2>

              <p className="text-gray-600 leading-relaxed">
                This website may contain links to external websites for user
                convenience. Infolink Services does not control or endorse the content,
                services, privacy practices, or policies of third-party
                websites and assumes no responsibility for them.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                7. Limitation of Liability
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Infolink Services shall not be liable for any direct, indirect,
                incidental, consequential, or special damages arising from the
                use of this website, reliance on information provided, service
                interruptions, technical failures, or third-party actions.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                8. Service Availability
              </h2>

              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify, suspend, discontinue, or
                restrict any website feature, service, or content without
                notice. Service availability may vary by location and project
                requirements.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                9. Privacy
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Your use of this website is also governed by our Privacy
                Policy. By using the website, you consent to the collection
                and use of information as described in that policy.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                10. Changes to These Terms
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Infolink Services reserves the right to update or modify these Terms &
                Conditions at any time. Updated versions will be published on
                this page and become effective immediately upon posting.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                11. Contact Information
              </h2>

              <p className="text-gray-600 leading-relaxed mb-3">
                If you have any questions regarding these Terms &
                Conditions, please contact us:
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-[#0B1F3A]">
                  Infolink Services
                </p>

                <p className="text-gray-600">
                  Nagpur, Maharashtra, India
                </p>

                <p className="text-gray-600">
                  Email: info@infolinkservices.com
                </p>

                <p className="text-gray-600">
                  Phone: +91 XXXXX XXXXX
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}