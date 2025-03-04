import ClientsPartner from '@/components/home/ClientsPartner';
import CompanyInfoSection from '@/components/home/CompanyInfoSection';
import FeaturedStudioSection from '@/components/home/FeaturedStudioSection';
import HeroSection from '@/components/home/HeroSection';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <main className="flex flex-col gap-5">
      <HeroSection />
      <CompanyInfoSection />
      <div className="w-full container border-b-2 border-neutral-disabled rounded-full"></div>
      <FeaturedStudioSection />
      <ClientsPartner />
    </main>
  );
};

export default Page;
