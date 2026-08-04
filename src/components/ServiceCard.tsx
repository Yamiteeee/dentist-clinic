'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { serviceCardContent } from '@/data';
import type { ServiceDetail } from '@/data';
import styles from './styles/ServiceCard.module.css';

export interface ServiceCardProps {
  id?: string;
  icon: ReactNode;
  title: string;
  description: string;
  ctaText?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
  details?: ServiceDetail & {
    image?: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };
    imageSrc?: string;
    imageAlt?: string;
  };
}

export default function ServiceCard({
  id,
  icon,
  title,
  description,
  ctaText = serviceCardContent?.defaultCtaText || 'Learn More',
  isExpanded = false,
  onToggle,
  details,
}: ServiceCardProps) {
  // Extract image source safely
  const imageSrc = details?.image?.src || details?.imageSrc;
  const imageAlt = details?.image?.alt || details?.imageAlt || title;

  // Fallback to description if extendedDescription isn't present
  const bodyText = details?.extendedDescription || description;

  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.card} ${isExpanded ? styles.expandedCard : ''}`}>
        <div className={styles.cardHeader}>
          <div className={styles.iconBox}>{icon}</div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>

          <button
            type="button"
            className={styles.linkBtn}
            onClick={onToggle}
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Show Less' : ctaText}</span>
            <span
              className={`${styles.arrow} ${isExpanded ? styles.rotateArrow : ''}`}
              aria-hidden="true"
            >
              &rarr;
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            className={styles.drawerWrapper}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.expandedContent}>
              {imageSrc && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.detailImage}
                  />
                </div>
              )}

              <div className={styles.detailText}>
                <span className={styles.detailTitle}>Overview — {title}</span>
                
                {bodyText && (
                  <p className={styles.extendedDescription}>
                    {bodyText}
                  </p>
                )}

                {details?.highlights && details.highlights.length > 0 && (
                  <ul className={styles.highlightList}>
                    {details.highlights.map((item, index) => (
                      <li key={index} className={styles.highlightItem}>
                        <span className={styles.checkDot} aria-hidden="true">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}