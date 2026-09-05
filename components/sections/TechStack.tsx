'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  LayoutTemplate,
  Server,
  Database,
  Cloud,
  Brain,
} from 'lucide-react';

const STACK = [
  {
    icon: LayoutTemplate,
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript'],
  },
  {
    icon: Server,
    category: 'Backend',
    items: ['Node.js', 'Java', 'Spring Boot'],
  },
  {
    icon: Database,
    category: 'Database',
    items: ['PostgreSQL', 'Supabase', 'MySQL'],
  },
  {
    icon: Cloud,
    category: 'Cloud',
    items: ['AWS', 'Azure', 'Hostinger VPS'],
  },
  {
    icon: Brain,
    category: 'AI & Automation',
    items: ['OpenAI', 'Automation', 'Integrations'],
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
    },
  }),
};

export default function TechStack() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-14 md:py-16">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-50" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-slate-200 blur-3xl opacity-50" />

      <div className="container-custom relative z-10">

        {/* Heading */}
        <motion.div
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            OUR TECHNOLOGY STACK
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Technology We Build With
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Production-tested technologies selected for performance,
            scalability, security, and long-term maintainability.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

          {STACK.map((group, idx) => (
            <motion.div
              key={group.category}
              custom={idx}
              initial={reduceMotion ? undefined : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true }}
              variants={fadeUp}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white transition-all duration-300 group-hover:scale-110">
                <group.icon className="h-8 w-8" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {group.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}