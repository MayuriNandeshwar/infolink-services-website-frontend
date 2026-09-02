'use client';

import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  photos: string[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  caption?: string;
}

export default function Lightbox({ photos, activeIndex, onClose, onNavigate, caption }: LightboxProps) {
  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + photos.length) % photos.length);
  }, [activeIndex, photos.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % photos.length);
  }, [activeIndex, photos.length, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', handleKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose, goPrev, goNext]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4 py-10"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>

        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        <motion.div
          key={photos[activeIndex]}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative flex max-h-full max-w-5xl flex-col items-center"
        >
          <div className="relative max-h-[80vh] w-full overflow-hidden rounded-xl bg-black/20">
            <Image
              src={photos[activeIndex]}
              alt={caption ? `${caption} — photo ${activeIndex + 1}` : `Photo ${activeIndex + 1}`}
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto object-contain mx-auto"
              priority
            />
          </div>
          <div className="mt-4 flex items-center gap-3 text-sm text-white/80">
            {caption && <span className="font-medium text-white">{caption}</span>}
            <span>{activeIndex + 1} / {photos.length}</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
