'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { navbarData } from '@/data';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import styles from './styles/Navbar.module.css';

export default function Navbar() {
  const handleScroll = useSmoothScroll();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    handleScroll(e, href);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Brand / Logo */}
        <Link href="/" className={styles.logoWrapper} onClick={() => setIsOpen(false)}>
          <Logo className={styles.logoIcon} />
          <span className={styles.logo}>
            <span className={styles.logoAccent}>{navbarData.logoPrefix}</span>
            {navbarData.logoSuffix}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {navbarData.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={false}
              onClick={(e) => handleScroll(e, link.href)}
              className={styles.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className={styles.actions}>
          {/* Mobile Quick Call Icon */}
          <a
            href={`tel:${navbarData.phoneRaw}`}
            className={styles.mobilePhoneBtn}
            aria-label={`Call us at ${navbarData.phoneDisplay}`}
          >
            <Phone size={18} />
          </a>

          {/* Desktop Phone */}
          <a href={`tel:${navbarData.phoneRaw}`} className={styles.phoneLink}>
            <Phone size={16} className={styles.phoneIcon} aria-hidden="true" />
            <span>{navbarData.phoneDisplay}</span>
          </a>

          {/* CTA Button */}
          <Link
            href={navbarData.ctaHref}
            scroll={false}
            onClick={(e) => handleScroll(e, navbarData.ctaHref)}
            className={styles.btnPrimary}
          >
            <Calendar size={16} aria-hidden="true" />
            <span>{navbarData.ctaText}</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <nav className={styles.mobileNav} aria-label="Mobile Navigation">
          {navbarData.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={false}
              onClick={(e) => onNavClick(e, link.href)}
              className={styles.mobileNavLink}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileDrawerFooter}>
            <a href={`tel:${navbarData.phoneRaw}`} className={styles.mobileDrawerPhone}>
              <Phone size={18} className={styles.phoneIcon} />
              <span>{navbarData.phoneDisplay}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}