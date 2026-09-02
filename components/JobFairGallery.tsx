'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Images } from 'lucide-react';
import { JOB_FAIR_EVENTS, JOB_FAIR_CATEGORIES } from '@/lib/job-fairs-data';
import Lightbox from '@/components/Lightbox';

const ALL = 'All';

export default function JobFairGallery() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [lightbox, setLightbox] = useState<{ photos: string[]; index: number; caption: string } | null>(null);

  const events = useMemo(() => {
    if (activeCategory === ALL) return JOB_FAIR_EVENTS;
    return JOB_FAIR_EVENTS.filter((e) => e.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-14">
        <button
          onClick={() => setActiveCategory(ALL)}
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
            activeCategory === ALL
              ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
              : 'bg-white text-gray-600 border-gray-300 hover:border-[#0B1F3A]'
          }`}
        >
          All Events
        </button>
        {JOB_FAIR_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              activeCategory === cat
                ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
                : 'bg-white text-gray-600 border-gray-300 hover:border-[#0B1F3A]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Event-wise grouped galleries */}
      <div className="space-y-16">
        {events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0B1F3A]">{event.category}</h2>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 text-[#2563EB]" />
                  {event.location}
                  {event.year && <span className="text-gray-400">· {event.year}</span>}
                </p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                <Images className="h-3.5 w-3.5" />
                {event.photos.length} photos
              </span>
            </div>

            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-gray-600">{event.description}</p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {event.photos.map((photo, idx) => (
                <button
                  key={photo}
                  type="button"
                  onClick={() => setLightbox({ photos: event.photos, index: idx, caption: event.category })}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Image
                    src={photo}
                    alt={`${event.category} — photo ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0B1F3A]/0 transition-colors duration-300 group-hover:bg-[#0B1F3A]/20" />
                </button>
              ))}
            </div>
          </motion.div>
        ))}

        {events.length === 0 && (
          <p className="text-center text-gray-500">No photos found for this category.</p>
        )}
      </div>

      {lightbox && (
        <Lightbox
          photos={lightbox.photos}
          activeIndex={lightbox.index}
          caption={lightbox.caption}
          onClose={() => setLightbox(null)}
          onNavigate={(index) => setLightbox((prev) => (prev ? { ...prev, index } : prev))}
        />
      )}
    </div>
  );
}
