import Link from 'next/link';
import FacebookSocialIcon from '../common/icons/socialIcons/FacebookSocialIcon';
import InstagramSocialIcon from '../common/icons/socialIcons/InstagramSocialIcon';
import PinterestSocialIcon from '../common/icons/socialIcons/PinterestSocialIcon';
import XSocialIcon from '../common/icons/socialIcons/XSocialIcon';

const socialList = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/pacificstudios',
    icon: (
      <FacebookSocialIcon
        height={24}
        width={24}
        className="[&>path]:fill-neutral-sub-text [&>path]:hover:fill-[#4267B2]"
      />
    ),
  },
  {
    name: 'twitter',
    url: 'https://x.com/pacificstudios',
    icon: (
      <XSocialIcon className="[&>path]:fill-neutral-sub-text [&>path]:hover:fill-pure-black" height={24} width={24} />
    ),
  },
  {
    name: 'pinterest',
    url: 'https://www.pinterest.com/pacificstudios',
    icon: (
      <PinterestSocialIcon
        className="[&>path]:fill-neutral-sub-text [&>path]:hover:fill-[#E60023]"
        height={24}
        width={24}
      />
    ),
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/pacificstudios',
    icon: (
      <InstagramSocialIcon
        className="[&>path]:fill-neutral-sub-text [&>path]:hover:fill-[#FE006A]"
        height={24}
        width={24}
      />
    ),
  },
];

const SocialIcons = () => (
  <ul className="-mx-3 flex items-center">
    {socialList.map((list, index) => (
      <li key={index} className="mx-3">
        <Link href={list.url} className={`social-link block text-xl leading-none`} target="_blank" rel="noopener">
          {list.icon}

          <i className="sr-only">{list.name}</i>
        </Link>
      </li>
    ))}
  </ul>
);

export default SocialIcons;
