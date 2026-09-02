import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CompanyJourney from '@/components/sections/CompanyJourney';
import IndustriesWeServe from '@/components/sections/IndustriesWeServe';
import TechStack from '@/components/sections/TechStack';
import ProcessSection from '@/components/sections/ProcessSection';
import LeadFormSection from '@/components/sections/LeadFormSection';
import ContactCTA from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesOverview />
      <WhyChooseUs />
      <IndustriesWeServe />
      <TechStack />
      <ProcessSection />
      <LeadFormSection />
    </>
  );
}
