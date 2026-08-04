'use client';

import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import { useLenis } from 'lenis/react';
import Logo from '@/components/Logo';
import { navbarData } from '@/data/landingData';
import styles from './styles/Navbar.module.css';

export default function Navbar() {
  const lenis = useLenis();

  // Handle smooth scroll for anchor links (#services, #reviews, #book, etc.)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash / anchor links
    if (href.startsWith('#') || href.startsWith('/#')) {
      const targetId = href.replace('/', ''); // Ensures target is '#id'

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      // ONLY prevent default navigation if the section target actually exists on this page!
      if (targetElement) {
        e.preventDefault();

        if (lenis) {
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80, // Sticky navbar offset
            duration: 1.2,
          });
        } else {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        window.history.pushState(null, '', targetId);
      }
      // If targetElement is NOT found, standard Next.js route navigation takes over safely.
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Brand / Logo */}
        <Link href="/" className={styles.logoWrapper}>
          <Logo className={styles.logoIcon} />
          <span className={styles.logo}>
            <span className={styles.logoAccent}>{navbarData.logoPrefix}</span>
            {navbarData.logoSuffix}
          </span>
        </Link>

        {/* Dynamic Nav Links */}
        <nav className={styles.nav}>
          {navbarData.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={false} // Prevents Next.js default scroll jump
              onClick={(e) => handleScroll(e, link.href)}
              className={styles.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone & CTA */}
        <div className={styles.actions}>
          <a href={`tel:${navbarData.phoneRaw}`} className={styles.phoneLink}>
            <Phone size={16} className={styles.phoneIcon} />
            {navbarData.phoneDisplay}
          </a>
          <Link
            href={navbarData.ctaHref}
            scroll={false} // Prevents Next.js default scroll jump
            onClick={(e) => handleScroll(e, navbarData.ctaHref)}
            className={styles.btnPrimary}
          >
            <Calendar size={16} />
            {navbarData.ctaText}
          </Link>
        </div>
      </div>
    </header>
  );
}