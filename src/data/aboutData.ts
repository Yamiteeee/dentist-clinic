import { FeaturePoint, ImageAsset } from './types';

export const aboutData = {
  subheading: 'About Apex Dental',
  heading: 'Providing Modern & Compassionate Dental Care Since 2012',
  description:
    'Our clinic was built on a simple philosophy: dental visits should be painless, transparent, and tailored to each patient. We blend cutting-edge technology with warm, individualized care.',
  stats: [
    { label: 'Years Experience', value: '12+' },
    { label: 'Happy Smiles', value: '15,000+' },
    { label: 'Expert Specialists', value: '8' },
  ],
  features: [
    {
      id: 'tech',
      title: 'State-of-the-Art Tech',
      description: '3D imaging and low-radiation digital X-rays for fast, precise diagnoses.',
    },
    {
      id: 'comfort',
      title: 'Patient-First Comfort',
      description: 'Ergonomic chairs, noise-canceling headphones, and sedation options available.',
    },
  ] as FeaturePoint[],
  image: {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    alt: 'Apex Dental clinic modern interior and treatment room',
    width: 800,
    height: 600,
  } as ImageAsset,
};