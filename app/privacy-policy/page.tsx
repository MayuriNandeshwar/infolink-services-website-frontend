import type { Metadata } from 'next';
import ContactCTA from '@/components/sections/ContactCTA';
import { getBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read Infolink Services’ Privacy Policy to understand how we collect, use, protect, and manage your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    {
      name: 'Privacy Policy',
      url: '/privacy-policy',
    },
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
              Privacy Policy
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed">
              Infolink Services respects your privacy and is committed to protecting
              your personal information. This Privacy Policy explains how we
              collect, use, store, and safeguard your data when you interact
              with our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                  Effective Date
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  This Privacy Policy is effective from the date it is published
                  on the Infolink Services website and may be updated periodically
                  without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                  Information We Collect
                </h2>

                <p className="text-gray-600 mb-4">
                  We may collect information that you voluntarily provide when:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Submitting an enquiry form</li>
                  <li>Requesting a consultation</li>
                  <li>Requesting a quotation</li>
                  <li>Contacting us through WhatsApp, phone, or email</li>
                </ul>

                <p className="text-gray-600 mt-4">
                  This information may include:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                  <li>Full Name</li>
                  <li>Mobile Number</li>
                  <li>Email Address</li>
                  <li>Project Type</li>
                  <li>Budget Range Details</li>
                  <li>Location Information</li>
                  <li>Any information submitted through enquiry forms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                  How We Use Your Information
                </h2>

                <p className="text-gray-600 mb-4">
                  Infolink Services uses collected information to:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Respond to enquiries and requests</li>
                  <li>Provide project proposals and quotations</li>
                  <li>Schedule assessments and consultations</li>
                  <li>Improve website performance and user experience</li>
                  <li>Provide customer support</li>
                  <li>Send service-related communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                  Communication Consent
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  By submitting any form on our website, you consent to Infolink
                  Services contacting you through phone calls, SMS, WhatsApp,
                  email, or other communication channels regarding your enquiry,
                  consultation request, quotation, project delivery, or related
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                  Cookies & Analytics
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Our website may use cookies and analytics tools to understand
                  visitor behavior, improve website functionality, and enhance
                  user experience. Cookies do not provide us access to your
                  personal device or sensitive information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                  Data Security
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, misuse, disclosure, or loss. However, no
                  internet transmission or storage system can be guaranteed
                  completely secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                  Sharing of Information
                </h2>

                <p className="text-gray-600 mb-4">
                  Infolink Services does not sell, rent, or trade your personal
                  information.
                </p>

                <p className="text-gray-600 mb-4">
                  Information may be shared only when:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Required by law or regulatory authorities</li>
                  <li>Necessary to provide requested services</li>
                  <li>
                    Working with trusted service providers supporting project
                    delivery
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                  Third-Party Services
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Our website may use third-party services such as Google Maps,
                  Google Analytics, WhatsApp, Supabase, and other tools to
                  enhance functionality. These services operate under their own
                  privacy policies and terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                  Your Rights
                </h2>

                <p className="text-gray-600 mb-4">
                  You may request:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Access to your personal data</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your information where legally applicable</li>
                  <li>Withdrawal of communication consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                  Contact Us
                </h2>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 font-semibold mb-2">
                    Infolink Services
                  </p>

                  <p className="text-gray-600">
                    Nagpur,
                    <br />
                    Maharashtra,
                    <br />
                    India
                  </p>

                  <p className="text-gray-600 mt-4">
                    Email: info@infolinkservices.com
                  </p>

                  <p className="text-gray-600">
                    Phone: +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}