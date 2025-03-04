import { FC } from 'react';
import FooterNavLinks from './FooterNavLinks';
import SocialIcons from './SocialIcons';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="bg-neutral-black-2 py-6 mt-auto text-pure-white">
      <div className="container">
        <FooterNavLinks />
        <div className="pt-4">
          <div className={`b-footer items-center md:flex md:justify-between h-full`}>
            <div className="b-left">
              <div className="mb-6 flex justify-center md:justify-start">
                <SocialIcons />
              </div>
              <div className="mb-5 justify-center md:mb-0 md:justify-start">
                <ul className="flex flex-wrap items-center justify-center text-center text-base md:justify-start">
                  <li className="mb-3 flex basis-1/2 items-center justify-center font-medium md:mb-0 md:mr-6 md:basis-auto">
                    <Link href={`tel: 1234567890`} className="text-pure-white">
                      +1234567890
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center md:text-right mt-auto">
              <div className="mb-5"></div>
              <span className="copyright flex justify-center gap-2 md:justify-end">
                &copy;
                <Link href="/" className="font-bold text-pure-white">
                  Pacific Studios
                </Link>
                2024. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
