import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, MapPin, Award, Handshake } from 'lucide-react';
import CompanyGallery from '@/components/CompanyGallery';
import ContactCTA from '@/components/sections/ContactCTA';
import { getBreadcrumbSchema, getOfficeGallerySchema } from '@/lib/structured-data';
import { OFFICE_GALLERY_IMAGES } from '@/lib/office-gallery-data';

export const metadata: Metadata = {
  title: 'Company Gallery',
  description: 'A look inside the Infolink Services office in Nagpur, Maharashtra — our workspace, team environment, and headquarters since 2010.',
  alternates: {
    canonical: '/company-gallery',
  },
};

const STATS = [
  { icon: Calendar, value: '2010', label: 'Established' },
  { icon: MapPin, value: 'Nagpur', label: 'Headquarters' },
  { icon: Award, value: '13+', label: 'Years Experience' },
  { icon: Handshake, value: '1,000+', label: 'Business Relationships' },
];

export default function CompanyGalleryPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Company Gallery', url: '/company-gallery' }]);
  const officeGallerySchema = getOfficeGallerySchema(OFFICE_GALLERY_IMAGES);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(officeGallerySchema) }}
      />

      {/* Hero */}
      <section className="relative pt-20 pb-16 gradient-hero overflow-hidden">
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-gray-300">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
            <span className="font-medium text-white">Company Gallery</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">Company Gallery</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Inside Infolink Services
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              A look at our Nagpur headquarters — the workspace behind 13+ years of industry relationships and enterprise software delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#2563EB] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-15" />
        <div
          aria-hidden="true"
          className="glow-subtle -top-20 right-1/4 h-64 w-64 bg-[#2563EB]"
        />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-colors duration-300 group-hover:bg-[#2563EB]/20">
                  <stat.icon className="h-6 w-6 text-[#2563EB]" />
                </div>
                <p className="mt-4 text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-300 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding section-bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-label">Our Workspace</p>
            <h2 className="section-title mb-4">A Look Inside Our Office</h2>
            <p className="section-subtitle mx-auto">
              From our Nagpur headquarters to the workspace behind our enterprise software delivery.
            </p>
          </div>

          <CompanyGallery images={OFFICE_GALLERY_IMAGES} />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
