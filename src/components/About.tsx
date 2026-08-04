import Image from 'next/image';
import { Award, HeartPulse } from 'lucide-react';
import { aboutData } from '@/data/landingData';
import styles from './styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Visual & Quick Stats */}
          <div className={styles.visualWrapper}>
            <Image
              src={aboutData.image.src}
              alt={aboutData.image.alt}
              width={aboutData.image.width ?? 800}
              height={aboutData.image.height ?? 600}
              className={styles.roundedImg}
            />

            <div className={styles.statsBadgeGrid}>
              {aboutData.stats.map((stat, i) => (
                <div key={i} className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Copy & Highlights */}
          <div className={styles.content}>
            <span className={styles.subheading}>{aboutData.subheading}</span>
            <h2 className={styles.heading}>{aboutData.heading}</h2>
            <p className={styles.description}>{aboutData.description}</p>

            <div className={styles.featuresList}>
              {aboutData.features.map((feature, idx) => (
                <div key={feature.id} className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    {idx === 0 ? <Award size={22} /> : <HeartPulse size={22} />}
                  </div>
                  <div>
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