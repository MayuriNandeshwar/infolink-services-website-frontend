'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  Factory,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Truck,
  Landmark,
  Banknote,
  Rocket,
} from 'lucide-react';

const INDUSTRIES = [
  { icon: Factory, title: 'Manufacturing' },
  { icon: HeartPulse, title: 'Healthcare' },
  { icon: GraduationCap, title: 'Education' },
  { icon: ShoppingBag, title: 'Retail' },
  { icon: Truck, title: 'Logistics' },
  { icon: Landmark, title: 'Government' },
  { icon: Banknote, title: 'Finance' },
  { icon: Rocket, title: 'Startups' },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
    },
  }),
};

export default function IndustriesWeServe() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#06152B] py-14 md:py-16">

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container-custom relative z-10">

        {/* Heading */}
        <motion.div
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            WHO WE WORK WITH
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Industries We Serve
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            More than 13 years of experience delivering software solutions
            across industries with unique operational challenges and growth goals.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">

          {INDUSTRIES.map((item, idx) => (
            <motion.div
              key={item.title}
              custom={idx}
              initial={reduceMotion ? undefined : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true }}
              variants={fadeUp}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500">
                <item.icon className="h-8 w-8" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {item.title}
              </h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}