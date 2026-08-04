'use client';

import { useLenis } from 'lenis/react';
import React from 'react';

export function useSmoothScroll() {
  const lenis = useLenis();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    offset: number = -80
  ) => {
    // Top of page / home navigation
    if (href === '/') {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // Hash or anchor links
    if (href.startsWith('#') || href.startsWith('/#')) {
      const targetId = href.replace('/', '');
      if (targetId === '#') return;

      // Handle raw ID string passed without '#' (e.g. 'services')
      const querySelector = targetId.startsWith('#') ? targetId : `#${targetId}`;
      const targetElement = document.querySelector(querySelector);

      if (targetElement) {
        e.preventDefault();

        if (lenis) {
          lenis.scrollTo(targetElement as HTMLElement, {
            offset,
            duration: 1.2,
          });
        } else {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        window.history.pushState(null, '', querySelector);
      }
    }
  };

  return handleScroll;
}