import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, MessageCircle, Code2, Globe, Smartphone, Database, Users, Sparkles, Cloud, Briefcase, Wrench, PanelTop, Gauge, BadgePercent, Settings, Lightbulb, Palette } from 'lucide-react';
import { SERVICES, SUPPORT_SERVICES } from '@/lib/constants';
import ContactCTA from '@/components/sections/ContactCTA';
import { getServicesSchema, getBreadcrumbSchema } from '@/lib/structured-data';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Enterprise Software Services',
  description: 'Infolink Services delivers enterprise-grade custom software, web & mobile development, ERP, CRM, AI, cloud solutions, and UI/UX design — engineered for organizations that expect precision and accountability.',
  alternates: {
    canonical: '/services',
  },
};

const iconMap: Record<string, any> = { Code2, Globe, Smartphone, Database, Users, Sparkles, Cloud, Briefcase, Wrench, PanelTop, Gauge, BadgePercent, Settings, Lightbulb, Palette, };

export default function ServicesPage() {
  const servicesSchema = getServicesSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Services', url: '/services' }]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative py-14 md:py-16 gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/4337240/pexels-photo-4337240.jpeg"
            alt="Enterprise technology services"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">Enterprise Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Enterprise-Grade Software, Engineered for Accountability
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              From custom development to AI and cloud infrastructure — we deliver every layer of your technology stack with the precision, documentation, and support enterprise organizations require.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-white py-14 md:py-16">
        <div className="container-custom">
          <div className="space-y-20">
            {SERVICES.map((service, idx) => {
              const Icon = iconMap[service.icon];
              const isReversed = idx % 2 === 1;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-mt-24`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <p className="section-label mb-0">{`Service ${String(idx + 1).padStart(2, '0')}`}</p>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.benefits.map((benefit, bidx) => (
                        <div key={bidx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link href="/contact">
                        <button className="btn-primary inline-flex items-center gap-2 group">
                          Request Consultation
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                      <a
                        href={getWhatsAppUrl(`Hi Infolink Services, I'm interested in your ${service.title}. Can you share more details?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="inline-flex items-center gap-2 border-2 border-[#25D366] text-[#1da851] hover:bg-green-50 font-semibold px-6 py-3 rounded-lg transition-all">
                          <MessageCircle className="h-5 w-5" />
                          Ask on WhatsApp
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-[450px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/40 to-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

        <section className="relative overflow-hidden bg-[#07152D] py-14 md:py-16">
          <div className="container-custom">
            <div className="text-center mb-14">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#60A5FA]"> Additional Services </p>

             <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl"> End-to-End Technology Support </h2>

              <p className="mx-auto max-w-2xl text-lg text-slate-300">
                Beyond software delivery, we provide complete support
                throughout your technology journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SUPPORT_SERVICES.map((service, idx) => {
                const Icon = iconMap[service.icon];

                return (
                  <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 to-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-blue-500/25">
                      <Icon className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <h3 className="mb-2 font-bold text-white">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-300">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      <ContactCTA />
    </>
  );
}
