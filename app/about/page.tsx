import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import CompanyTimeline from '@/components/about/CompanyTimeline';
import AboutStats from '@/components/about/AboutStats';
import MissionVision from '@/components/about/MissionVision';
import OfficeGallery from '@/components/about/OfficeGallery';
import WhyChooseInfolink from '@/components/about/WhyChooseInfolink';
import ContactCTA from '@/components/sections/ContactCTA';
import { getBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Infolink Services — founded in 2010 in Nagpur, Maharashtra. 13+ years of industry relationships, 100+ job fairs, 50,000+ candidates connected, and 1,000+ employer relationships — now delivering custom software, web and mobile applications, ERP, CRM, AI, and cloud solutions.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'About Us', url: '/about' }]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <AboutHero />
      <MissionVision />
      <CompanyTimeline />
      <WhyChooseInfolink />
      <OfficeGallery />
      <ContactCTA />
    </>
  );
}
