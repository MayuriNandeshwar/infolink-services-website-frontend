import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { GLOSSARY } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ContactCTA from '@/components/sections/ContactCTA';
import { getBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Software Resource Center',
  description: 'Understand software development terminology and the fundamentals of scoping, building, and maintaining custom software — MVPs, cloud hosting, sprints, SLAs, and more, explained plainly.',
  alternates: {
    canonical: '/resources',
  },
};

const GUIDES = [
  {
    title: 'Understanding Your Project Budget',
    body: 'Your budget range is the starting point for scoping a project, but the number that actually matters is what it buys in features and engineering time, not the rupee amount on its own. Costs scale with scope, platform complexity, and integrations required, so two projects with the same budget can end up with very different feature sets depending on those choices. Our team converts your budget and goals into a concrete scope during a free discovery call, but a precise quote always comes from reviewing your full requirements.',
  },
  {
    title: 'Agile Delivery, Explained Simply',
    body: 'Think of Agile delivery as working in short, regular cycles instead of one long build-and-reveal. In each sprint, our team builds and tests a defined slice of the product, then shows you working progress — so you can review, redirect, or reprioritize before the next cycle starts. This keeps a long build from silently drifting away from what you actually need, and means you are never more than a couple of weeks away from seeing real progress.',
  },
  {
    title: 'The Project Process, Step by Step',
    body: 'Our process has four broad stages: (1) discovery and requirements gathering to understand your workflows and constraints, (2) system design and a detailed proposal covering scope, timeline, and pricing, (3) development in sprints with regular check-ins, and (4) testing, deployment, and handover, after which ongoing support begins. The process can feel overwhelming if navigated alone — this is the specific reason Infolink Services\' process includes full documentation and a single point of contact as a standard part of every project.',
  },
  {
    title: 'Why Technology Stack and Vendor Choice Matters',
    body: 'Not all technology choices are equal, even at similar price points. A popular framework is a reasonable starting filter, but factors like long-term maintainability, community support, hosting costs, and how well a stack fits your team\'s future hiring all affect a system\'s multi-year performance. The same logic applies to cloud providers, which are typically the first thing you scale or renegotiate as usage grows. Every Infolink Services proposal specifies the exact frameworks and infrastructure so you can evaluate these choices yourself before committing.',
  },
];

export default function ResourcesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Resources', url: '/resources' }]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative pt-20 pb-16 gradient-hero overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">Resource Center</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Understand Software Projects, in Plain Language
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              No jargon, no sales pitch — just the terminology and concepts you need to make an informed decision.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label">Guides</p>
              <h2 className="section-title mb-4">Key Concepts, Explained</h2>
            </div>
            <div className="space-y-8 mb-16">
              {GUIDES.map((guide, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-8 last:border-0">
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-[#2563EB] flex-shrink-0 mt-1" />
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{guide.body}</p>
                </div>
              ))}
            </div>

            <div className="text-center mb-12">
              <p className="section-label">Glossary</p>
              <h2 className="section-title mb-4">Software Terms You&apos;ll Come Across</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {GLOSSARY.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`glossary-${idx}`}
                  className="bg-gray-50 rounded-xl border border-gray-200 px-6 data-[state=open]:border-[#0B1F3A]/30"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-[#0B1F3A] hover:no-underline py-5">
                    {item.term}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    {item.definition}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Want to see these ideas applied to your own project?</p>
              <Link href="/contact">
                <button className="btn-primary inline-flex items-center gap-2 group">
                  Get a Free Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
