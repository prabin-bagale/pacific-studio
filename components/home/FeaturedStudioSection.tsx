import { FC } from 'react';

const FeaturedStudioSection: FC = () => {
  return (
    <section className="px-6 pt-8 pb-16">
      <header className="flex flex-col items-start lg:items-center text-pure-white gap-1 mb-6">
        <h2 className="text-2xl font-light mx-auto text-pure-white md:text-title-2 md:font-light">
          Our <span className="font-bold">Featured</span> Studios
        </h2>
        <p>Check out our studios before selecting which one you want to work with.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="h-[400px] flex-1 bg-neutral-sub-text rounded-2xl"></div>
        <div className="h-[400px] flex-1 bg-neutral-sub-text rounded-2xl"></div>
        <div className="h-[400px] flex-1 bg-neutral-sub-text rounded-2xl"></div>
        <div className="h-[400px] flex-1 bg-neutral-sub-text rounded-2xl"></div>
      </div>
    </section>
  );
};

export default FeaturedStudioSection;
