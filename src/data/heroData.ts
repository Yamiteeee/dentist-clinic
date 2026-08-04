import { ImageAsset } from './types';

export const heroData = {
  badge: 'Accepting New Patients & Emergency Cases',
  title: 'Gentle, Modern Dental Care For Your Entire Family',
  subtitle:
    'Experience painless dentistry with state-of-the-art technology. From routine checkups to full smile makeovers, we make your comfort our priority.',
  primaryCta: 'Schedule Your Visit',
  secondaryCta: 'Explore Services',
  avatars: ['JD', 'AS', 'MK'],
  ratingScore: '4.9/5',
  reviewText: 'Over 500+ verified patient reviews',
  image: {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Happy patient smiling at Apex Dental Clinic',
    width: 700,
    height: 700,
  } as ImageAsset,
};