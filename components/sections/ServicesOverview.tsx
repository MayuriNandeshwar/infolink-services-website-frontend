import { Code2, Globe, Smartphone,ArrowRight, Database, Users, Users2, Brain, Cloud, Headset, Search, Megaphone, BadgePercent, Gauge, PanelTop, Palette, Sparkles, } from 'lucide-react';
import Link from "next/link";

const HOME_SERVICES = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    desc: 'Tailored applications engineered for scale, security, and long-term maintainability.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    slug: 'web-development',
    desc: 'Modern, high-performance websites and web platforms built for growth.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    desc: 'Native and cross-platform apps that put your business in your customers hands.',
  },
  {
    icon: Database,
    title: 'ERP Solutions',
    slug: 'erp-solutions',
    desc: 'Streamline operations with ERP systems built around your business workflows.',
  },
  {
    icon: Users2,
    title: 'CRM Solutions',
    slug: 'crm-solutions',
    desc: 'Manage leads, customers, and relationships with a CRM tailored to your process.',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    slug: 'ai-solutions',
    desc: 'Practical AI integration, automation, copilots, and predictive analytics.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    slug: 'cloud-solutions',
    desc: 'Cloud migration, infrastructure, DevOps, and managed cloud services.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    desc: 'User-centered interface and experience design for web and mobile products.',
  },
  {
    icon: Headset,
    title: 'IT Consulting',
    slug: 'it-consulting',
    desc: 'Strategic technology consulting to modernize and scale your business.',
  },

  // DIGITAL MARKETING

  {
    icon: Search,
    title: 'SEO Services',
    slug: 'seo-services',
    desc: 'Improve rankings, organic traffic, and online visibility through strategic SEO.',
  },
  {
    icon: Megaphone,
    title: 'Google Ads Management',
    slug: 'google-ads',
    desc: 'ROI-driven PPC campaigns that generate qualified leads and sales.',
  },
  {
    icon: BadgePercent,
    title: 'Meta Ads Management',
    slug: 'meta-ads',
    desc: 'Facebook and Instagram advertising campaigns designed for growth.',
  },
  {
    icon: Gauge,
    title: 'Performance Marketing',
    slug: 'performance-marketing',
    desc: 'Data-driven campaigns focused on measurable business outcomes and ROI.',
  },
  {
    icon: Users,
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    desc: 'Build engagement, brand awareness, and customer loyalty across platforms.',
  },

  // CREATIVE SERVICES

  {
    icon: PanelTop,
    title: 'Landing Page Design',
    slug: 'landing-page-design',
    desc: 'High-converting landing pages optimized for lead generation and sales.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    slug: 'graphic-design',
    desc: 'Professional branding, brochures, creatives, banners, and marketing assets.',
  },
  {
    icon: Sparkles,
    title: 'Video Editing',
    slug: 'video-editing',
    desc: 'Corporate videos, reels, promotional content, and motion graphics.',
  },
  {
    icon: Palette,
    title: 'Brand Identity Design',
    slug: 'branding-design',
    desc: 'Logo design, brand guidelines, visual identity, and corporate branding.',
  },

  // DATA & ANALYTICS

  {
    icon: Database,
    title: 'Data Analytics',
    slug: 'data-analytics',
    desc: 'Transform raw business data into actionable insights and opportunities.',
  },
  {
    icon: Gauge,
    title: 'Business Intelligence',
    slug: 'business-intelligence',
    desc: 'Power BI, Tableau, dashboards, KPI monitoring, and executive reporting.',
  },
  {
    icon: PanelTop,
    title: 'Data Visualization',
    slug: 'data-visualization',
    desc: 'Interactive dashboards and visual reports for smarter decision-making.',
  },
  {
    icon: Brain,
    title: 'Predictive Analytics',
    slug: 'predictive-analytics',
    desc: 'Forecast trends, customer behavior, and business outcomes using AI.',
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="relative overflow-hidden py-14 md:py-16 bg-[#071426]">
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

        <div className="mt-16 space-y-14">

          {/* SOFTWARE SERVICES */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-blue-800/40" />
              <h3 className="text-xl font-bold text-white">
                Software & Technology Solutions
              </h3>
              <div className="h-px flex-1 bg-blue-800/40" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HOME_SERVICES.slice(0, 8).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className="group"
                >
                  <div className="card-premium h-full p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <s.icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-base font-semibold text-slate-900">
                      {s.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {s.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* MARKETING SERVICES */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-blue-800/40" />
              <h3 className="text-xl font-bold text-white">
                Digital Marketing Services
              </h3>
              <div className="h-px flex-1 bg-blue-800/40" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HOME_SERVICES.slice(9, 13).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className="group"
                >
                  <div className="card-premium h-full p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <s.icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-base font-semibold text-slate-900">
                      {s.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {s.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* DATA ANALYTICS */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-blue-800/40" />
              <h3 className="text-xl font-bold text-white">
                Data & Analytics Services
              </h3>
              <div className="h-px flex-1 bg-blue-800/40" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HOME_SERVICES.slice(18, 22).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className="group"
                >
                  <div className="card-premium h-full p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <s.icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-base font-semibold text-slate-900">
                      {s.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {s.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
