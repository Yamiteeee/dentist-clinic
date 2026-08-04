import { Star } from 'lucide-react';
import { testimonialCardContent } from '@/data/landingData';
import styles from './styles/TestimonialCard.module.css';

interface TestimonialCardProps {
  name: string;
  treatment: string;
  quote: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  treatment,
  quote,
  rating = testimonialCardContent.defaultRating,
}: TestimonialCardProps) {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.stars}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={18} fill="var(--star-color)" color="var(--star-color)" />
          ))}
        </div>
        <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>
      </div>
      <div>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.treatment}>{treatment}</p>
      </div>
    </div>
  );
}