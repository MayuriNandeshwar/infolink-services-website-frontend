'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Calendar, Briefcase, Users, Handshake } from 'lucide-react';

const STATS = [
  { icon: Calendar, value: 13, suffix: '+', label: 'Years Experience' },
  { icon: Briefcase, value: 100, suffix: '+', label: 'Job Fairs Conducted' },
  { icon: Users, value: 50000, suffix: '+', label: 'Candidates Connected' },
  { icon: Handshake, value: 1000, suffix: '+', label: 'Employer Relationships' },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

/** Formats a raw number the same way the original static labels did (13, 100, 50,000, 1,000). */
function formatCount(n: number): string {
  return Math.round(n).toLocaleString('en-IN');
}

function AnimatedStatValue({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? target : 0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current || reduceMotion) return;
    started.current = true;

    const duration = 1400;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setDisplay(target * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, reduceMotion]);

  return (
    <p className="mt-4 text-2xl font-bold text-white sm:text-3xl">
      {formatCount(display)}
      {suffix}
    </p>
  );
}

export default function AboutStats() {
  const reduceMotion = useReducedMotion();
  const [inViewFlags, setInViewFlags] = useState<boolean[]>(() => STATS.map(() => false));

  const markInView = (idx: number) => {
    setInViewFlags((prev) => {
      if (prev[idx]) return prev;
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#07152D] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.08]" />
      <div
        aria-hidden="true"
        className="glow-subtle -top-20 left-1/4 h-72 w-72 bg-[#2563EB]"
      />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">By The Numbers</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Credibility Built Over a Decade</h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              custom={idx}
              initial={reduceMotion ? undefined : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.4 }}
              onViewportEnter={() => markInView(idx)}
              variants={fadeUp}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-900/20"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-colors duration-300 group-hover:bg-[#2563EB]">
                <stat.icon className="h-6 w-6 text-[#60A5FA] transition-colors duration-300 group-hover:text-white" />
              </div>
              <AnimatedStatValue target={stat.value} suffix={stat.suffix} active={inViewFlags[idx]} />
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#94A3B8] sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
