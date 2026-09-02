import type { Metadata } from 'next';
import Image from 'next/image';
import { OPEN_POSITIONS, WHY_WORK_WITH_US } from '@/lib/careers-data';
import CareerApplicationForm from '@/components/CareerApplicationForm';
import CareerPositionCard from '@/components/CareerPositionCard';
import { Lightbulb, TrendingUp, Clock, GraduationCap } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    "Join Infolink Services, a Nagpur-based software development company. Explore open positions in development, design, QA, and business analysis, and apply with your resume.",
  alternates: {
    canonical: '/careers',
  },
};

const whyUsIconMap: Record<string, any> = {
  Lightbulb,
  TrendingUp,
  Clock,
  GraduationCap,
};

export default function CareersPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Careers', url: '/careers' }]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SECTION 1 — Careers Hero */}
      <section className="relative py-14 md:py-16 gradient-hero overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.08]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">Careers</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Build Tomorrow&apos;s Technology With Us
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              At Infolink Services, we build software solutions for businesses across industries.
              We&apos;re always looking for passionate developers, designers, analysts, and technology
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Open Positions */}
      <section className="section-padding section-bg-white py-14 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-label">Open Positions</p>
            <h2 className="section-title mb-4">Current Opportunities</h2>
            <p className="section-subtitle mx-auto">
              We&apos;re hiring across engineering, design, and delivery. Find the role that fits you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPEN_POSITIONS.map((position) => (
              <CareerPositionCard key={position.slug} position={position} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Why Work With Us */}
      <section className="section-padding relative overflow-hidden section-bg-navy py-14 md:py-16">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.07]" />
        <div className="container-custom relative">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Why Work With Us</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white mb-4">Built for Careers That Grow</h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300">
              We invest in every hire the same way we invest in our clients&apos; software — deliberately and for the
              long term.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_WORK_WITH_US.map((card) => {
              const Icon = whyUsIconMap[card.icon];
              return (
                <div key={card.title} className="card-premium-dark p-6 text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Resume Submission Form */}
      <section id="apply" className="section-padding section-bg-gray scroll-mt-16 py-14 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label">Apply</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">Submit Your Application</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Don&apos;t see the exact role you&apos;re looking for? Send us your resume anyway — we review every
                application and reach out when there&apos;s a fit for your skills and experience.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[320px] md:h-[400px] relative">
                <Image
                  src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg"
                  alt="Infolink Services workplace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/35 to-transparent" />
              </div>
            </div>

            <CareerApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
