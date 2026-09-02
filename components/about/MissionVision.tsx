'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-16">

      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Mission & Vision
          </p>

          <h2 className="text-4xl font-bold text-[#0B1F3A] md:text-5xl">
            What Drives Us
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Connecting business understanding with technology excellence.
          </p>
        </div>
          
        {/* Cards */}
        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_0.9fr_1fr]">
          {/* Mission */}
          <div className="rounded-3xl border border-slate-700 bg-[#07152D] p-8 shadow-2xl ">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600">
              <Target className="h-7 w-7 text-white" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Our Mission
            </h3>

            <p className="mt-4 leading-relaxed text-slate-300">
              To bring the same relationship-first, on-the-ground
              understanding of business that built our industry network
              into every software engagement—delivering technology that
              fits how our clients actually operate.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-300/20 blur-3xl" />
              <div className=" flex justify-center rounded-3xl bg-[#5677b0] p-6 shadow-2xl border border-slate-700 ">
                <Image
                  src="/about/mission-vision.png"
                  alt="Mission Vision Illustration"
                  width={600}
                  height={600}
                  className="w-full max-w-sm object-contain"
                />
              </div>
          </div>

          {/* Vision */}
          <div className="rounded-3xl border border-slate-700 bg-[#07152D] p-8 shadow-2xl ">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600">
              <Eye className="h-7 w-7 text-white" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Our Vision
            </h3>

            <p className="mt-4 leading-relaxed text-slate-300">
              To become the preferred technology partner for businesses
              by combining deep industry relationships with innovative
              software, AI, cloud, and enterprise solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}