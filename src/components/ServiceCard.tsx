import { ReactNode } from 'react';
import { serviceCardContent } from '@/data/landingData';
import styles from './styles/ServiceCard.module.css';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  ctaText?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  ctaText = serviceCardContent.defaultCtaText,
}: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconBox}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.link}>{ctaText} &rarr;</span>
    </div>
  );
}