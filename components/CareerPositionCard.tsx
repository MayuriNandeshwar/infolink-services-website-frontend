'use client';

import { useState } from 'react';
import { Briefcase, MapPin, Clock, Layers } from 'lucide-react';
import type { OpenPosition } from '@/lib/careers-data';
import CareerApplicationForm from '@/components/CareerApplicationForm';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function CareerPositionCard({ position }: { position: OpenPosition }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div id={position.slug} className="card-premium p-6 scroll-mt-18">
        <div className="icon-chip h-12 w-12 mb-4">
          <Briefcase className="h-6 w-6 text-white" />
        </div>

        <h3 className="font-bold text-[#0B1F3A] text-lg mb-2">{position.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">{position.description}</p>

        <div className="space-y-2 text-sm text-gray-600 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-[#2563EB] flex-shrink-0" />
            <span>{position.experience}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#2563EB] flex-shrink-0" />
            <span>{position.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#2563EB] flex-shrink-0" />
            <span>{position.employmentType}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-5 inline-flex items-center justify-center w-full border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white font-semibold px-5 py-2.5 rounded-lg transition-all text-sm"
        >
          Apply Now
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{position.title}</DialogTitle>
            <DialogDescription className="text-gray-600">{position.description}</DialogDescription>
          </DialogHeader>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 border-y border-gray-100 py-4">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#2563EB]" />
              <span>{position.experience}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#2563EB]" />
              <span>{position.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#2563EB]" />
              <span>{position.employmentType}</span>
            </div>
          </div>

          <CareerApplicationForm defaultPosition={position.title} variant="bare" />
        </DialogContent>
      </Dialog>
    </>
  );
}
