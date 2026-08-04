import { ServiceItem } from './types';

export const servicesSectionHeader = {
  subheading: 'Our Services',
  heading: 'Comprehensive Dental Solutions',
  description:
    'From preventative care to advanced cosmetic procedures, we offer complete oral healthcare under one roof.',
};

export const serviceCardContent = {
  defaultCtaText: 'Learn more',
};

export const servicesData: ServiceItem[] = [
  {
    id: 'general',
    iconName: 'Stethoscope',
    title: 'General Dentistry',
    description:
      'Routine checkups, cleanings, and cavity prevention programs designed for long-term oral health.',
    details: {
      imageSrc: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'General dentistry checkup and scaling',
      extendedDescription:
        'Our preventative care includes ultrasonic scaling, digital X-rays, and comprehensive oral exams to catch issues early and maintain healthy gums and teeth.',
      highlights: [
        'Comprehensive digital X-rays',
        'Painless ultrasonic cleaning',
        'Personalized care plans',
      ],
    },
  },
 {
    id: 'whitening',
    iconName: 'Sparkles',
    title: 'Teeth Whitening',
    description:
      'Professional in-office whitening treatments that brighten your smile up to 8 shades in one visit.',
    details: {
      // Clean, bright close-up showing white teeth / smile transformation
      imageSrc: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Bright white smile after professional teeth whitening',
      extendedDescription:
        'Fast and safe in-office bleaching treatment using enamel-safe LED light activation, delivering visible results without causing persistent sensitivity.',
      highlights: [
        'Up to 8 shades brighter in 60 mins',
        'Enamel-safe light activation',
        'Includes custom take-home touch-up kit',
      ],
    },
  },
  {
    id: 'cosmetic',
    iconName: 'Smile',
    title: 'Cosmetic Dentistry',
    description:
      'Veneers, bonding, and smile makeovers tailored to give you the natural, confident smile you want.',
    details: {
      // Aesthetic cosmetic smile / dental consultation aesthetic
      imageSrc: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Patient showing cosmetic dental makeover results',
      extendedDescription:
        'Custom porcelain veneers and composite bonding designed to fix gaps, chips, or discoloration while preserving as much natural tooth structure as possible.',
      highlights: [
        'Custom 3D smile design preview',
        'Stain-resistant porcelain material',
        'Minimal prep options available',
      ],
    },
  },
  {
    id: 'implants',
    iconName: 'Shield',
    title: 'Dental Implants',
    description:
      'Permanent, natural-looking tooth replacements engineered for durability, comfort, and aesthetics.',
    details: {
      // Clinical / precise dental restoration setting
      imageSrc: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Dental professional examining implant restoration',
      extendedDescription:
        'Titanium post implants that fuse with your jawbone to provide a stable, lifetime foundation for custom porcelain crowns that look and function like real teeth.',
      highlights: [
        '98% long-term success rate',
        'Restores full chewing power',
        'Prevents jawbone loss',
      ],
    },
  },
];