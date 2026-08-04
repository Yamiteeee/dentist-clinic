'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Award, HeartPulse } from 'lucide-react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { aboutData } from '@/data';
import styles from './styles/About.module.css';

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
  const suffix = value.replace(/[0-9.]/g, '');

  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const springValue = useSpring(count, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      count.set(numericValue);
    }
  }, [isInView, count, numericValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Header Block: Displayed at top on mobile, hidden on desktop */}
        <div className={styles.mobileHeader}>
          <span className={styles.subheading}>{aboutData.subheading}</span>
          <h2 className={styles.heading}>{aboutData.heading}</h2>
        </div>

        <div className={styles.grid}>
          {/* Visuals & Quick Stats */}
          <div className={styles.visualWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src={aboutData.image.src}
                alt={aboutData.image.alt}
                width={aboutData.image.width ?? 800}
                height={aboutData.image.height ?? 600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className={styles.roundedImg}
                priority
              />
            </div>

            <div className={styles.statsBadgeGrid}>
              {aboutData.stats.map((stat, i) => (
                <div key={i} className={styles.statCard}>
                  <span className={styles.statValue}>
                    <Counter value={stat.value} />
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Copy & Highlights */}
          <div className={styles.content}>
            {/* Desktop Header: Hidden on mobile */}
            <div className={styles.desktopHeader}>
              <span className={styles.subheading}>{aboutData.subheading}</span>
              <h2 className={styles.heading}>{aboutData.heading}</h2>
            </div>

            <p className={styles.description}>{aboutData.description}</p>

            <div className={styles.featuresList}>
              {aboutData.features.map((feature, idx) => (
                <div key={feature.id} className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    {idx === 0 ? <Award size={22} /> : <HeartPulse size={22} />}
                  </div>
                  <div className={styles.featureText}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDesc}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}