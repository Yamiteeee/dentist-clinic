'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { testimonialCardContent } from '@/data';
import TypewriterText from '@/components/pageAnimations/TypewriterText';
import styles from './styles/TestimonialCard.module.css';

interface TestimonialCardProps {
  name: string;
  treatment: string;
  quote: string;
  rating?: number;
  avatarUrl?: string;
  index?: number;
}

export default function TestimonialCard({
  name,
  treatment,
  quote,
  rating = testimonialCardContent.defaultRating,
  avatarUrl,
  index = 0,
}: TestimonialCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-40px' });

  // Initials fallback
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  const clampedRating = Math.min(5, Math.max(0, rating));

  return (
    <motion.div
      ref={containerRef}
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <div className={styles.contentBody}>
        {/* Rating Header */}
        <div className={styles.starsContainer}>
          <motion.span
            className={styles.ratingText}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: index * 0.08 + 0.1,
            }}
          >
            {clampedRating.toFixed(1)}
          </motion.span>

          <div className={styles.starRow} aria-label={`Rating: ${clampedRating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => {
              const fillPercentage = Math.min(
                100,
                Math.max(0, (clampedRating - i) * 100)
              );

              return (
                <motion.div
                  key={i}
                  className={styles.starWrapper}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 18,
                    delay: index * 0.08 + 0.12 + i * 0.04,
                  }}
                >
                  {/* Base / Empty star */}
                  <Star size={16} className={styles.starEmpty} aria-hidden="true" />

                  {/* Animated fill mask */}
                  <motion.div
                    className={styles.starFillMask}
                    initial={{ width: '0%' }}
                    animate={
                      isInView
                        ? { width: `${fillPercentage}%` }
                        : { width: '0%' }
                    }
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.08 + 0.25 + i * 0.04,
                    }}
                  >
                    <Star size={16} className={styles.starFilled} aria-hidden="true" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quote Block */}
        <div className={styles.quoteWrapper}>
          <TypewriterText
            as="p"
            text={`"${quote}"`}
            className={styles.quote}
            speed={0.015}
          />
        </div>
      </div>

      {/* Author Details */}
      <div className={styles.authorContainer}>
        <div className={styles.avatarWrapper}>
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={`${name}`}
              fill
              sizes="44px"
              className={styles.avatarImage}
            />
          ) : (
            <div className={styles.avatarFallback}>{initials}</div>
          )}
        </div>

        <div className={styles.authorInfo}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.treatment}>{treatment}</p>
        </div>
      </div>
    </motion.div>
  );
}