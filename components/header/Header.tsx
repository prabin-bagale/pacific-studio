import Link from 'next/link';
import { FC } from 'react';
import * as React from 'react';

const Header: FC = () => {
  return (
    <header className="lg:px-6 md:px-4 px-2 flex flex-col">
      <nav className="flex items-center justify-between py-2">
        <Link className="block text-title-5 group leading-6 relative transition-all animate-in" href="/">
          <span className="text-transparent bg-gradient-to-r to-pure-white from-50% from-blue-500 bg-clip-text">
            Pacific
          </span>{' '}
          <span className="text-transparent bg-gradient-to-r to-yellow-base from-30% from-pure-white bg-clip-text">
            Studios
          </span>
        </Link>

        <div className="hidden lg:flex text-pure-white py-1 items-center justify-between gap-1">
          <Link
            className="text-body-base-bold hover:text-blue-500 group px-4 leading-6 relative transition-all animate-in"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-body-base-bold hover:text-blue-500 group px-4 leading-6 relative transition-all animate-in"
            href="/mastering"
          >
            Mastering
          </Link>
          <Link
            className="text-body-base-bold hover:text-blue-500 group px-4 leading-6 relative transition-all animate-in"
            href="/releases"
          >
            Releases
          </Link>
          <Link
            className="text-body-base-bold border-2 hover:border-blue-500 hover:bg-blue-500 border-pure-white py-2 hover:text-pure-white group px-4 leading-6 relative transition-all duration-300 animate-in"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
