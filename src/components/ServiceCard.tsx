'use client';

import { ReactNode, useId } from 'react';
import Image from 'next/image';
import { serviceCardContent } from '@/data';
import styles from './styles/ServiceCard.module.css';

export interface ServiceDetailProps {
  extendedDescription?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  highlights?: string[];
}

export interface ServiceCardProps {
  id?: string;
  icon: ReactNode;
  title: string;
  description: string;
  ctaText?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
  details?: ServiceDetailProps;
}

export default function ServiceCard({
  id,
  icon,
  title,
  description,
  ctaText = serviceCardContent.defaultCtaText,
  isExpanded = false,
  onToggle,
  details,
}: ServiceCardProps) {
  const generatedId = useId();
  const drawerId = id ? `drawer-${id}` : `drawer-${generatedId}`;

  return (
    <div className={`${styles.card} ${isExpanded ? styles.expandedCard : ''}`}>
      {/* Primary Card View */}
      <div className={styles.cardHeader}>
        <div className={styles.iconBox}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <button
          type="button"
          className={styles.linkBtn}
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls={drawerId}
        >
          <span>{isExpanded ? 'Show Less' : ctaText}</span>
          <span
            className={`${styles.arrow} ${
              isExpanded ? styles.rotateArrow : ''
            }`}
            aria-hidden="true"
          >
            &rarr;
          </span>
        </button>
      </div>

      {/* Accordion Drawer Content */}
      {details && (
        <div
          id={drawerId}
          className={`${styles.bottomDrawerWrapper} ${
            isExpanded ? styles.drawerOpen : ''
          }`}
          aria-hidden={!isExpanded}
        >
          <div className={styles.innerWrapper}>
            <div className={styles.expandedContent}>
              {details.image && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={details.image.src}
                    alt={details.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className={styles.detailImage}
                  />
                </div>
              )}

              <div className={styles.detailText}>
                <span className={styles.detailTitle}>Service Overview</span>
                {details.extendedDescription && (
                  <p className={styles.extendedDescription}>
                    {details.extendedDescription}
                  </p>
                )}

                {details.highlights && details.highlights.length > 0 && (
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
          </div>
        </div>
      )}
    </div>
  );
}