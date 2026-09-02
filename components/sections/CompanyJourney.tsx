'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Flag, Users, Rocket, Briefcase, Handshake } from 'lucide-react';

// Homepage-scoped content, defined locally to match the pattern used by
// TrustedBy / ServicesOverview / WhyChooseUs rather than pulled from
// lib/constants. Purely additive — no existing section, form, or data
// source is touched.
const MILESTONES = [
  {
    year: '2010',
    tag: 'Founded',
    icon: Flag,
    title: 'Company Founded',
    description:
      'Infolink Services was established, laying the foundation for over a decade of hands-on business and industry relationships.',
    highlights: [] as { icon: typeof Users; label: string }[],
  },
  {
    year: '2010–2020',
    tag: 'Decade One',
    icon: Handshake,
    title: 'Recruitment, Placement & Industry Networking',
    description:
      'A decade spent building trust on the ground — connecting talent with opportunity and forming lasting business relationships across Maharashtra.',
    highlights: [
      { icon: Briefcase, label: '100+ Job Fairs Conducted' },
      { icon: Users, label: '50,000+ Candidates Connected' },
      { icon: Handshake, label: '1,000+ Business Relationships Built' },
    ],
  },
  {
    year: '2026+',
    tag: 'What\u2019s Next',
    icon: Rocket,
    title: 'Technology Services Expansion',
    description:
      'That same network and business understanding now powers a full-stack technology practice built for the next stage of growth.',
    highlights: [] as { icon: typeof Users; label: string }[],
    tags: ['Custom Software', 'ERP', 'CRM', 'AI', 'Cloud Solutions'],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function CompanyJourney() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding relative overflow-hidden section-bg-gray-alt">
      <div className="glow-subtle -top-24 left-1/2 h-72 w-72 -translate-x-1/2 bg-blue-200" />

      <div className="container-custom relative">
        <motion.div
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Our Story</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Company Journey
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From connecting people to engineering software \u2014 a decade-plus track record built one relationship at a time.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Vertical connector line */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#0B1F3A] via-[#2563EB] to-[#0B1F3A] sm:block md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10 md:space-y-16">
            {MILESTONES.map((m, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  custom={idx}
                  initial={reduceMotion ? undefined : 'hidden'}
                  whileInView={reduceMotion ? undefined : 'visible'}
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  className={`relative flex flex-col gap-6 sm:pl-16 md:pl-0 md:flex-row md:items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1F3A] shadow-md sm:left-0 md:left-1/2 md:-translate-x-1/2">
                    <m.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Spacer for desktop alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />

                  <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-0' : 'md:pl-0'}`}>
                    <div className="card-premium group p-7">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-600">
                          {m.year}
                        </span>
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{m.tag}</span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-slate-900">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.description}</p>

                      {m.highlights.length > 0 && (
                        <ul className="mt-5 space-y-2.5">
                          {m.highlights.map((h) => (
                            <li key={h.label} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                              <h.icon className="h-4 w-4 flex-shrink-0 text-blue-600" />
                              {h.label}
                            </li>
                          ))}
                        </ul>
                      )}

                      {m.tags && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {m.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 transition-colors group-hover:border-blue-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
