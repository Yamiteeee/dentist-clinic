'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLenis } from 'lenis/react';
import { ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { heroData } from '@/data';
import styles from './styles/Hero.module.css';

export default function Hero() {
  const lenis = useLenis();
  const [animatedRating, setAnimatedRating] = useState(0);

  const targetRating = parseFloat(heroData.ratingScore) || 4.9;

  // Counter animation logic
  useEffect(() => {
    let start = 0;
    const duration = 1200; // Snappier 1.2s duration
    const steps = 40;
    const stepTime = duration / steps;
    const increment = targetRating / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetRating) {
        setAnimatedRating(targetRating);
        clearInterval(timer);
      } else {
        setAnimatedRating(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetRating]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(`#${targetId}`, { offset: -80 });
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate percentage fill for partial star
  const getFillPercentage = (starIndex: number) => {
    const fill = animatedRating - starIndex;
    if (fill >= 1) return 100;
    if (fill <= 0) return 0;
    return Math.round(fill * 100);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.gridContainer}>
        {/* Left Column Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <ShieldCheck size={16} aria-hidden="true" />
            <span>{heroData.badge}</span>
          </div>

          <h1 className={styles.title}>{heroData.title}</h1>

          <p className={styles.subtitle}>{heroData.subtitle}</p>

          <div className={styles.buttonGroup}>
            <Link
              href="#book"
              className={styles.primaryBtn}
              onClick={(e) => handleScroll(e, 'book')}
            >
              <span>{heroData.primaryCta}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="#services"
              className={styles.secondaryBtn}
              onClick={(e) => handleScroll(e, 'services')}
            >
              <span>{heroData.secondaryCta}</span>
            </Link>
          </div>

          {/* Social Proof Bar */}
          <div className={styles.socialProof}>
            <div className={styles.avatarGroup} aria-hidden="true">
              {heroData.avatars.map((initials, index) => (
                <div
                  key={initials}
                  className={`${styles.avatar} ${styles[`av${index + 1}`]}`}
                >
                  {initials}
                </div>
              ))}
            </div>

            <div className={styles.ratingBox}>
              <div className={styles.starsContainer}>
                <div className={styles.starRow} aria-label={`Rating ${targetRating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => {
                    const fillPercent = getFillPercentage(i);
                    return (
                      <div key={i} className={styles.starWrapper}>
                        {/* Base Empty Star */}
                        <Star size={18} className={styles.starEmpty} aria-hidden="true" />

                        {/* Foreground Filled Star */}
                        <div
                          className={styles.starFillMask}
                          style={{ width: `${fillPercent}%` }}
                        >
                          <Star size={18} className={styles.starFilled} aria-hidden="true" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <span className={styles.ratingText}>
                  {animatedRating.toFixed(1)}
                </span>
              </div>
              <p className={styles.reviewSubtext}>{heroData.reviewText}</p>
            </div>
          </div>
        </div>

        {/* Right Column Visual */}
        <div className={styles.visualWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src={heroData.image.src}
              alt={heroData.image.alt}
              width={heroData.image.width ?? 700}
              height={heroData.image.height ?? 600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className={styles.roundedImg}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}