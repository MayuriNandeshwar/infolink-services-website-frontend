'use client';

import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Flag, TrendingUp, Network, Cpu } from 'lucide-react';
function TimelineCard({
  icon: Icon,
  tag,
  title,
  description,
}: {
  icon: any;
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div className=" w-[280px] min-h-[140px] rounded-2xl border border-blue-500/20 bg-[#07152D]/95 backdrop-blur-xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300 ">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
          <Icon className="h-5 w-5 text-blue-400" />
        </div>

        <div>
          <span className="text-xs font-bold text-blue-400">
            {tag}
          </span>

          <h3 className="mt-1 text-base font-semibold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
const positions = [
  'left-[4%] top-[10%]',      // Founded
  'left-[12%] bottom-[8%]',   // Job Fair
  'right-[12%] top-[8%]',     // Recruitment
  'right-[4%] bottom-[8%]',   // Technology
];

const MILESTONES = [
  {
    icon: Flag,
    tag: '2010',
    title: 'Founded in Nagpur',
    description:
      'Started connecting businesses with talent and growth opportunities.',
  },
  {
    icon: TrendingUp,
    tag: '100+',
    title: 'Job Fair Growth',
    description:
      'Organized large-scale recruitment drives across Maharashtra.',
  },
  {
    icon: Network,
    tag: '50K+',
    title: 'Recruitment Expansion',
    description:
      'Connected thousands of candidates with employers nationwide.',
  },
  {
    icon: Cpu,
    tag: 'Today',
    title: 'Technology Transformation',
    description:
      'Delivering AI, ERP, CRM and cloud-powered business solutions.',
  },
];
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function CompanyTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0B1F3A] py-14 md:py-16">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.08]" />

      <div className="container-custom relative z-8">
        <motion.div
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-label">Company Timeline</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            From Local Network to Technology Partner
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#CBD5E1]">
            Four milestones that shaped how Infolink Services builds and delivers technology today.
          </p>
        </motion.div>
        <div className="relative mt-8 h-[400px]">

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 blur-3xl" />

              <div className=" relative rounded-3xl border border-blue-500/20 bg-white px-10 py-7 ">
                <Image
                  src="/images/logo.jpeg"
                  alt="Infolink Services"
                  width={220}
                  height={90}
                />
              </div>
            </div>
          </div>

          {/* Horizontal line */}
          <div className=" absolute left-10 right-10 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-0 "/>

          {/* Founded */}
          {MILESTONES.map((item, index) => (
            <motion.div
              key={item.title}
              animate={{
                y: index % 2 === 0 ? [0, -10, 0] : [0, 10, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
              }}
              className={`absolute ${positions[index]}`}
            >
              <TimelineCard
                icon={item.icon}
                tag={item.tag}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
