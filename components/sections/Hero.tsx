'use client';

import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles, BrainCircuit, Code2, Smartphone, Database, CloudCog, CalendarDays, Users, UserRound, Handshake, } from 'lucide-react';

interface TechCard {
  icon: typeof Code2;
  title: string;
  top: number;
  left?: number;
  right?: number;
  delay: number;
}

const TECH_CARDS: TechCard[] = [
  { icon: Code2, title: 'Custom Software', top: 10, left: 12, delay: 0 },
  { icon: BrainCircuit, title: 'AI Solutions', top: 6, right: 8, delay: 0.15 },
  { icon: CloudCog, title: 'Cloud Infrastructure', top: 50, right: 2, delay: 0.3 },
  { icon: Smartphone, title: 'Mobile Apps', top: 84, left: 8, delay: 0.45 },
  { icon: Database, title: 'ERP / CRM', top: 90, right: 20, delay: 0.6 },
];

const MESH_BLOBS = [
  { color: '#1D4ED8', size: 480, top: '-8%', left: '-6%', dx: 40, dy: 30, duration: 22 },
  { color: '#2563EB', size: 420, top: '30%', left: '68%', dx: -30, dy: 40, duration: 26 },
  { color: '#3B82F6', size: 380, top: '62%', left: '8%', dx: 30, dy: -30, duration: 30 },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

function cardCoord(card: TechCard) {
  const x = card.left !== undefined ? card.left : 100 - (card.right ?? 0);
  return { x, y: card.top };
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const loop = reduceMotion ? 0 : Infinity;

  return (
    <section className="relative isolate overflow-hidden bg-[#050B16] pt-4 pb-16">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A] via-[#081428] to-[#040810]" />

      {/* Animated gradient mesh */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {MESH_BLOBS.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-[110px]"
            style={{
              width: blob.size * 0.85,
              height: blob.size * 0.85,
              top: blob.top,
              left: blob.left,
              background: blob.color,
              opacity: 0.14,
            }}
            animate={
              reduceMotion
                ? {}
                : { x: [0, blob.dx, 0], y: [0, blob.dy, 0], opacity: [0.1, 0.16, 0.1] }
            }
            transition={{ duration: blob.duration, repeat: loop, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Structural grid + vignette */}
      <div className="absolute inset-0 hero-grid-lines opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.14),transparent_70%)]" />

      {/* Grain texture for premium depth */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay">
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      <div className="relative container-custom">
        <div className="grid min-h-[620px] lg:min-h-[650px] grid-cols-1 items-start gap-0 lg:grid-cols-2">
          {/* LEFT: copy */}
          <div className="pt-8 lg:pt-12">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-blue-400" />
              Trusted Technology Partner Since 2010
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            >
              Building Enterprise Software That{' '}
              <span className="text-[#60A5FA]">
                Powers Business Growth
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
            >
              Infolink Services delivers custom software, web applications, mobile apps, AI
              solutions, cloud platforms and enterprise systems for startups, SMEs and large
              organizations.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <Link href="/contact">
                <button className="group inline-flex h-12 items-center justify-center rounded-full bg-[#2563EB] px-7 text-base font-semibold text-white shadow-md transition-all hover:bg-[#1D4ED8]">
                  Request Proposal
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <a href="/services">
                <button className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 text-base font-medium text-white backdrop-blur-xl transition-colors hover:bg-white/[0.08]">
                  Explore Services
                </button>
              </a>
            </motion.div>

            {/* Trust indicators */}
            {/* Premium Company Highlights */}
            
          </div>

          {/* RIGHT SIDE GLOBE */}
          <div className="relative flex h-[500px] items-start justify-center lg:-ml-6 pt-4">

            {/* Glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[110px]" />

            {/* Globe */}
            <img
              src="/images/hero-globe.png"
              alt="Infolink Technology Ecosystem"
              className="relative z-10 w-full max-w-[820px] object-contain"
            />

            {/* AI */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 left-20 z-20"
            >
              <div className="min-w-[190px] rounded-2xl border border-blue-400/20 bg-[#0B1F3A]/85 px-5 py-4 backdrop-blur-xl shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                    <BrainCircuit className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    AI Solutions
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Mobile */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-16 right-12 z-20"
            >
              <div className="min-w-[190px] rounded-2xl border border-blue-400/20 bg-[#0B1F3A]/85 px-5 py-4 backdrop-blur-xl shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                    <Smartphone className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    Mobile Apps
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Web */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute left-0 top-[42%] z-20"
            >
              <div className="min-w-[210px] rounded-2xl border border-blue-400/20 bg-[#0B1F3A]/85 px-5 py-4 backdrop-blur-xl shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                    <Code2 className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    Web Development
                  </span>
                </div>
              </div>
            </motion.div>

            {/* ERP */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute right-0 top-[48%] z-20"
            >
              <div className="min-w-[200px] rounded-2xl border border-blue-400/20 bg-[#0B1F3A]/85 px-5 py-4 backdrop-blur-xl shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                    <Database className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    ERP Solutions
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Cloud */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity }}
              className="absolute bottom-28 left-10 z-20"
            >
              <div className="min-w-[210px] rounded-2xl border border-blue-400/20 bg-[#0B1F3A]/85 px-5 py-4 backdrop-blur-xl shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                    <CloudCog className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    Cloud & DevOps
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Software */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity }}
              className="absolute bottom-12 right-20"
            >
              <div className="min-w-[220px] rounded-2xl border border-blue-400/20 bg-[#0B1F3A]/85 px-5 py-4 backdrop-blur-xl shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                    <Code2 className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    Custom Software
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="relative z-20 -mt-20">
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4">

              {/* Years */}
              <div className="flex items-center gap-5 p-8 border-r border-white/5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30">
                  <CalendarDays className="h-8 w-8 text-blue-400" />
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-blue-400">
                    13+
                  </h3>
                  <p className="text-slate-400">
                    Years Experience
                  </p>
                </div>
              </div>

              {/* Job Fairs */}
              <div className="flex items-center gap-5 p-8 border-r border-white/5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-blue-400">
                    100+
                  </h3>
                  <p className="text-slate-400">
                    Job Fairs Conducted
                  </p>
                </div>
              </div>

              {/* Candidates */}
              <div className="flex items-center gap-5 p-8 border-r border-white/5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30">
                  <UserRound className="h-8 w-8 text-blue-400" />
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-blue-400">
                    50,000+
                  </h3>
                  <p className="text-slate-400">
                    Candidates Connected
                  </p>
                </div>
              </div>

              {/* Business */}
              <div className="flex items-center gap-5 p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30">
                  <Handshake className="h-8 w-8 text-blue-400" />
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-blue-400">
                    1,000+
                  </h3>
                  <p className="text-slate-400">
                    Business Relationships
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}