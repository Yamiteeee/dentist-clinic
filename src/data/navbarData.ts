import { NavLink } from './types';

export const navbarData = {
  logoPrefix: 'Apex',
  logoSuffix: 'Dental',
  phoneDisplay: '(555) 019-2834',
  phoneRaw: '+1234567890',
  ctaText: 'Book Visit',
  ctaHref: '#book',
  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#book' },
  ] as NavLink[],
};