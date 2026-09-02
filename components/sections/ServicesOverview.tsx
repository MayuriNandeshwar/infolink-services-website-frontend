import {
  Code2, Globe, Smartphone, Database, Users2, Brain, Cloud, Headset,
} from 'lucide-react';

// Homepage-scoped service list. Intentionally defined here rather than
// pulled from lib/constants SERVICES, which still powers the existing
// /services page (out of Phase 1 scope) — this keeps that page working
// exactly as it did while the new homepage teaser reflects Infolink's
// actual service lines.
const HOME_SERVICES = [
  { icon: Code2, title: 'Custom Software Development', desc: 'Tailored applications engineered for scale, security, and long-term maintainability.' },
  { icon: Globe, title: 'Web Development', desc: 'Modern, high-performance websites and web platforms built for growth.' },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Native and cross-platform apps that put your business in your customers\u2019 hands.' },
  { icon: Database, title: 'ERP Development', desc: 'Streamline operations with ERP systems built around how your business runs.' },
  { icon: Users2, title: 'CRM Development', desc: 'Manage leads, customers, and relationships with a CRM shaped to your process.' },
  { icon: Brain, title: 'AI Solutions', desc: 'Practical AI integration \u2014 copilots, automation, and predictive analytics.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Cloud migration, infrastructure, and DevOps across AWS, Azure, and GCP.' },
  { icon: Headset, title: 'IT Consulting', desc: 'Strategic technology guidance to plan, modernize, and de-risk your roadmap.' },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="relative overflow-hidden py-20 bg-[#071426]">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            WHAT WE DO
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Full-Stack Engineering
            <span className="block text-blue-400">
              Under One Roof
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            From custom software and mobile applications to ERP,
            CRM, AI, cloud infrastructure, and strategic consulting —
            a single technology partner for every stage of growth.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_SERVICES.map((s) => (
            <div
              key={s.title}
              className="card-premium group p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
