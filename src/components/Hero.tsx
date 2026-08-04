import Link from 'next/link';
import Image from 'next/image'; // 1. Imported Image component
import { ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { heroData } from '@/data/landingData';
import styles from './styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.gridContainer}>
        {/* Left Column */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <ShieldCheck size={16} />
            {heroData.badge}
          </div>

          <h1 className={styles.title}>
            {heroData.title}
          </h1>

          <p className={styles.subtitle}>
            {heroData.subtitle}
          </p>

          <div className={styles.buttonGroup}>
            <Link href="#book" className={styles.primaryBtn}>
              {heroData.primaryCta}
              <ArrowRight size={18} />
            </Link>
            <Link href="#services" className={styles.secondaryBtn}>
              {heroData.secondaryCta}
            </Link>
          </div>

          {/* Social Proof */}
          <div className={styles.socialProof}>
            <div className={styles.avatarGroup}>
              {heroData.avatars.map((initials, index) => (
                <div 
                  key={initials} 
                  className={`${styles.avatar} ${styles[`av${index + 1}`]}`}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="var(--star-color)" color="var(--star-color)" />
                ))}
                <span className={styles.ratingText}>{heroData.ratingScore}</span>
              </div>
              <p className={styles.reviewSubtext}>{heroData.reviewText}</p>
            </div>
          </div>
        </div>

        {/* Right Column Visual */}
        <div className={styles.visualWrapper}>
          <Image
            src={heroData.image.src}
            alt={heroData.image.alt}
            width={heroData.image.width ?? 700}
            height={heroData.image.height ?? 700}
            className={styles.roundedImg}

            priority
          />
        </div>
      </div>
    </section>
  );
}