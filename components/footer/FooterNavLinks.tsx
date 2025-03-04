import Link from 'next/link';
import { FC } from 'react';

const serviceLinks = [
  {
    linkText: 'Recording and Mixing',
    url: '/engineers-and-producers',
  },
  {
    linkText: 'Online Mixing',
    url: '/online-mixing',
  },
  {
    linkText: 'Mastering',
    url: '/mastering',
  },
  {
    linkText: 'Event Hire',
    url: '/event-hire',
  },
  {
    linkText: 'Pacific Studios Academy',
    url: '/pacific-studios-academy',
  },
  {
    linkText: 'Masterclass',
    url: '/masterclass',
  },
  {
    linkText: 'Distribution',
    url: '/distribution',
  },
];

const quickLinks = [
  {
    linkText: 'About Us',
    url: '/about-us',
  },
  {
    linkText: 'Become a Partner',
    url: '/become-a-partner',
  },
  {
    linkText: 'Contact Us',
    url: '/contact-us',
  },
];

const FooterNavLinks: FC = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-x-4 items-center">
      <div className="flex flex-col gap-1 h-full items-center justify-center">
        <Link className="block text-title-2 group" href="/">
          <span className="text-transparent bg-gradient-to-r to-pure-white from-50% from-blue-500 bg-clip-text">
            Pacific
          </span>{' '}
          <span className="text-transparent bg-gradient-to-r to-yellow-base from-30% from-pure-white bg-clip-text">
            Studios
          </span>
        </Link>
        <span>
          Aloknagar,<span>&nbsp;Kathmandu</span>
        </span>
      </div>
      <div className="flex h-full flex-col gap-4">
        <strong className="block text-body-big-bold">Services</strong>
        <nav>
          <ul className="flex flex-col gap-2">
            {serviceLinks.map((link, index) => (
              <li key={index}>
                <Link
                  prefetch={false}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pure-white text-body-base italic hover:text-blue-500 transition-all duration-300"
                >
                  {link.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex h-full flex-col gap-4">
        <strong className="block text-body-big-bold">Quick Links</strong>
        <nav>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  prefetch={false}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pure-white text-body-base italic hover:text-blue-500 transition-all duration-300"
                >
                  {link.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FooterNavLinks;
