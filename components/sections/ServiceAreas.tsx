import { MapPin } from 'lucide-react';
import { SERVICE_AREAS } from '@/lib/constants';

interface Area {
  label: string;
  description: string;
  cities?: string[];
}

export default function ServiceAreas() {
  const areas: Area[] = [SERVICE_AREAS.primary, SERVICE_AREAS.extended];

  return (
    <section className="section-padding section-bg-gray py-14 md:py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-label">Where We Work</p>
          <h2 className="section-title mb-4">Our Service Area</h2>
          <p className="section-subtitle mx-auto">
            We&apos;re upfront about where we currently operate, and where we take on projects case by case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {areas.map((area, idx) => (
            <div key={idx} className="card-premium p-6">
              <div className="w-11 h-11 rounded-lg bg-[#0B1F3A]/10 flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 text-[#0B1F3A]" />
              </div>
              <h3 className="font-bold text-[#0B1F3A] mb-2">{area.label}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
              {area.cities && area.cities.length > 0 && (
                <p className="text-xs text-gray-400 mt-3">{area.cities.join(' · ')}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
