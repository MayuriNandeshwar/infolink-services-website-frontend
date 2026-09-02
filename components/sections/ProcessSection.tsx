'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Phone, ClipboardList, Palette, Code2, Bug, Rocket } from 'lucide-react';

// Homepage-scoped content, defined locally rather than pulled from
// lib/constants.PROCESS_STEPS (which powers the existing /about page and
// is out of scope here) so that page keeps working exactly as it did.
const STEPS = [
  { icon: Phone, title: 'Discovery Call' },
  { icon: ClipboardList, title: 'Requirement Analysis' },
  { icon: Palette, title: 'UI/UX Design' },
  { icon: Code2, title: 'Development' },
  { icon: Bug, title: 'Testing' },
  { icon: Rocket, title: 'Deployment & Support' },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0A1F44] py-20">
      <div className="container-custom">
        <motion.div
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">How We Work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            A clear, six-step path from first conversation to a system that&apos;s live and supported.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              custom={idx}
              initial={reduceMotion ? undefined : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="relative"
            >
              {/* Connector line to the next step (desktop only) */}
              {idx < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-9 hidden h-px w-6 translate-x-full bg-gradient-to-r from-blue-300 to-blue-500 lg:block"
                />
              )}

              <div className="card-premium group flex h-full flex-col items-center p-6 text-center">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1F3A] shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <step.icon className="h-6 w-6 text-white" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-blue-600 shadow ring-1 ring-blue-100">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-900">{step.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
