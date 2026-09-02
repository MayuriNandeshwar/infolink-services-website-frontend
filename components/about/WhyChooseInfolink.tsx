'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  Handshake,
  Building2,
  ShieldCheck,
  Users,
  FileText,
  Lightbulb,
} from 'lucide-react';

const REASONS = [
  {
    icon: Handshake,
    title: 'A Network Most Vendors Don’t Have',
    description:
      '1,000+ employer relationships built over a decade mean we understand context most technology vendors have to learn from scratch on every new project.',
  },
  {
    icon: Building2,
    title: 'We’ve Seen How Businesses Actually Run',
    description:
      'Our on-the-ground drives put us inside the operations of organizations across retail, manufacturing, education, and services long before we built software for them.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust Earned Before the First Line of Code',
    description:
      'Many of our software clients are organizations we already had a working relationship with. That existing trust changes how engagements start — with context, not a cold pitch.',
  },
  {
    icon: Users,
    title: 'Single Point of Contact, Start to Finish',
    description:
      'The same relationship-first approach that built our network carries into delivery — one accountable point of contact from discovery through deployment and support.',
  },
  {
    icon: FileText,
    title: 'Transparent, Documented Engagements',
    description:
      'Clear scope, clear pricing, and clear documentation at every stage — the standard we built our reputation on long before we were a software company.',
  },
  {
    icon: Lightbulb,
    title: 'Solutions Grounded in Real Business Problems',
    description:
      'Our software recommendations come from years of seeing what actually slows businesses down, not from a generic technology playbook.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function WhyChooseInfolink() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-14 md:py-16">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
            WHY BUSINESSES CHOOSE US
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
            Why Businesses Choose Infolink
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            What 13+ years of direct business relationships taught us about delivering
            technology organizations can rely on.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((item, idx) => (
            <motion.div
              key={item.title}
              custom={idx}
              initial={reduceMotion ? undefined : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true }}
              variants={fadeUp}
              className="
                group
                rounded-2xl
                border border-slate-700/60
                bg-[#0F172A]
                p-8
                shadow-[0_10px_40px_rgba(2,6,23,0.12)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#2563EB]/40
                hover:bg-[#162338]
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E293B] transition-colors duration-300 group-hover:bg-[#2563EB]">
                <item.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mt-6 text-xl font-bold leading-snug text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-slate-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}