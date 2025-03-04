import { FC } from 'react';
import Video from '../common/Video';
import Link from 'next/link';

const HeroSection: FC = () => {
  return (
    <section className="intro-banner relative flex min-h-[570px] items-center bg-gray-300 bg-left-top bg-no-repeat pb-11 h-auto md:min-h-[385px] lg:min-h-[515px] 3xl:min-h-[600px]">
      <div className="absolute inset-0 overflow-hidden md:hidden"></div>
      <div className="block">
        <div className="video-holder absolute inset-0 overflow-hidden after:absolute after:inset-0 after:bg-black after:opacity-[0.15] after:content-[''] lg:left-0 lg:right-0">
          <Video
            src={`/media/intro-video.mp4`}
            preload="auto"
            width="1920"
            height="1080"
            playsInline
            autoPlay
            muted
            loop
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="intro-holder relative z-10 flex-1 text-pure-white">
        <div>
          <div className="flex flex-col drop-shadow-lg items-start px-6 gap-4 relative z-[3]">
            <h1 className="text-4xl mb-4 font-medium md:text-5xl md:text-[2.8rem] lg:text-title-2">
              Nepal&apos;s most iconic
            </h1>
            <h2 className="text-xl mb-4 uppercase md:text-[1.3rem] md:font-medium lg:text-7xl lg:font-bold">
              Globally trusted
            </h2>
            <h3 className="text-xl uppercase md:text-[1.3rem] mb-6 md:font-medium lg:text-6xl lg:font-bold">
              recording studios
            </h3>
            <Link
              className="text-body-big-bold border-2 hover:border-blue-500 hover:bg-blue-500 border-pure-white py-4 hover:text-pure-white group px-8 leading-6 relative transition-all duration-300 animate-in"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <span className="intro-arrow absolute bottom-[-1px] left-0 right-0 h-6 overflow-hidden">
        <svg viewBox="0 0 14832 55" className="ml-[50%] h-6 -translate-x-1/2 fill-neutral-black">
          <path d="M7501.307 8.517l-68.043 39.341c-10.632 6.185-23.795 6.185-34.528 0l-68.144-39.34c-8.91-5.173-18.988-8.215-29.316-8.518H0v55h14832V0H7530.671a63.604 63.604 0 0 0-29.364 8.517z"></path>
        </svg>
      </span>
    </section>
  );
};

export default HeroSection;
