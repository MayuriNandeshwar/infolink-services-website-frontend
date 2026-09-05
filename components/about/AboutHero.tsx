'use client';

import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function AboutHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#07152D] pt-20 pb-20 md:pt-24 md:pb-24">
      {/* Background image — kept as-is, per requirements */}
      <div className="absolute inset-0">
        <Image
          src="/about/about.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark overlay for accessible text contrast */}
      <div className="absolute inset-0 bg-[#07152D]/55" />
      {/* Directional gradient — darkest under the left-aligned copy, easing right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07152D] via-[#07152D]/85 to-[#07152D]/45" />
      {/* Depth gradient toward the bottom, so the section reads as one continuous surface with what follows */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07152D]/85 via-[#07152D]/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.08]" />
      <div
        aria-hidden="true"
        className="glow-subtle -top-24 -right-24 h-80 w-80 bg-[#2563EB]"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-7xl">
          <motion.div
            initial={reduceMotion ? undefined : 'hidden'}
            animate={reduceMotion ? undefined : 'visible'}
            variants={fadeUp}
            custom={0}
            className="max-w-4xl lg:w-[58%]"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#60A5FA]" />
              Since 2010 • Nagpur, Maharashtra
            </span>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#3B82F6]">
              Our Story
            </p>

            <h1 className="mb-8 max-w-3xl text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl">
              13+ Years of Business
              <br />
              Understanding.
              <br />
              Delivered Through
              <br />
              Technology.
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Infolink Services was founded in Nagpur in 2010. Over more than a decade
              we built one of Maharashtra&apos;s strongest business networks and today
              transform that experience into custom software, ERP, CRM, AI and cloud
              solutions for organizations across India.
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
