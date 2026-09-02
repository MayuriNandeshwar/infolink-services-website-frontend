import type { Metadata } from 'next';
import JobFairGallery from '@/components/JobFairGallery';
import ContactCTA from '@/components/sections/ContactCTA';
import { getBreadcrumbSchema } from '@/lib/structured-data';
import { JOB_FAIR_TOTAL_PHOTOS, JOB_FAIR_EVENTS } from '@/lib/job-fairs-data';

export const metadata: Metadata = {
  title: 'Job Fair Gallery',
  description: `A look back at 100+ job fairs and recruitment drives organized by Infolink Services across Maharashtra — ${JOB_FAIR_TOTAL_PHOTOS}+ photos across ${JOB_FAIR_EVENTS.length} events.`,
  alternates: {
    canonical: '/job-fairs',
  },
};

export default function JobFairsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Job Fairs', url: '/job-fairs' }]);

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
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">Our Journey</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Job Fair Gallery
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Since 2010, we&apos;ve organized 100+ job fairs and recruitment drives across Maharashtra, connecting
              50,000+ candidates with employers. Browse moments from the events that built our network.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-2xl">
            {[
              { value: '100+', label: 'Job Fairs' },
              { value: '50,000+', label: 'Candidates' },
              { value: `${JOB_FAIR_EVENTS.length}`, label: 'Event Categories' },
              { value: `${JOB_FAIR_TOTAL_PHOTOS}+`, label: 'Photos' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-white/10 backdrop-blur-sm p-4 text-center">
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-xs text-gray-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-gray">
        <div className="container-custom">
          <JobFairGallery />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
