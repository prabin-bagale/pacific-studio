import { FC } from 'react';

const CompanyInfoSection: FC = () => {
  return (
    <section className="container">
      <div className="flex flex-col gap-2 items-center text-pure-white justify-center mb-10">
        <h2 className="text-center text-title-2 font-bold mb-4">Pacific Studios</h2>
        <p className="text-body-big text-center mb-4 text-neutral-light max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat
          nibh. Etiam non elit dui. Nullam vel erat et nunc egestas scelerisque. Suspendisse nec risus dui. Nam posuere,
        </p>
        <p className="text-body-big text-center text-neutral-light max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat
          nibh. Etiam non elit dui. Nullam vel erat et nunc egestas scelerisque. Suspendisse nec risus dui. Nam posuere,
        </p>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
