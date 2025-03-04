import { FC } from 'react';

interface AboutUsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const AboutUsPage: FC<AboutUsPageProps> = async ({ params }) => {
  const slug = (await params).slug;

  return (
    <main>
      <h1>About {slug}</h1>
    </main>
  );
};

export default AboutUsPage;
