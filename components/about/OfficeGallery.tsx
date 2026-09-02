'use client';

import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { OFFICE_GALLERY_PREVIEW } from '@/lib/office-gallery-data';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function OfficeGallery() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#07152D] py-16 md:py-16">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.08]" />
      <div
        aria-hidden="true"
        className="glow-subtle -top-24 right-1/4 h-72 w-72 bg-[#2563EB]"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-label">OUR WORKSPACE</p>
          <h2 className="text-3xl font-bold text-white sm:text-3xl lg:text-4xl">
            The Home of Infolink Services
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#CBD5E1] md:text-lg">
            For over 13 years, our Nagpur office has served as the foundation of our
            recruitment, consulting, and technology operations—supporting businesses,
            professionals, and digital transformation initiatives across multiple industries.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {OFFICE_GALLERY_PREVIEW.map((image, idx) => (
            <motion.div
              key={image.src}
              custom={idx}
              initial={reduceMotion ? undefined : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07152D]/80 via-[#07152D]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
