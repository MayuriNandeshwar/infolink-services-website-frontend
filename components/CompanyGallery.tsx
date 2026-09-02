'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lightbox from '@/components/Lightbox';

export interface GalleryImage {
  src: string;
  alt: string;
}

// Visually varies the crop of each tile (via aspect-ratio + object-cover)
// so a masonry layout reads as varied even though every source photo
// shares the same underlying 4:3 aspect ratio.
const ASPECT_CLASSES = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-square', 'aspect-[4/3]'];

export default function CompanyGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const photos = images.map((img) => img.src);

  return (
    <div>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {images.map((image, idx) => (
          <motion.button
            key={image.src}
            type="button"
            onClick={() => setLightboxIndex(idx)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: (idx % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative mb-4 block w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${ASPECT_CLASSES[idx % ASPECT_CLASSES.length]}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#0B1F3A]/0 transition-colors duration-300 group-hover:bg-[#0B1F3A]/20" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-[#0B1F3A]/80 to-transparent p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-medium text-white">{image.alt}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          activeIndex={lightboxIndex}
          caption={images[lightboxIndex]?.alt}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}
    </div>
  );
}
