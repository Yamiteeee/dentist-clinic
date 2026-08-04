// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  iconName: 'Stethoscope' | 'Sparkles' | 'Smile' | 'Shield';
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  treatment: string;
  quote: string;
  rating: number;
  avatarUrl?: string; // Optional avatar image for reviewers
}

// ============================================================================
// ABOUT US DATA
// ============================================================================

export interface FeaturePoint {
  id: string;
  title: string;
  description: string;
}

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

  // --------------------------------------------------------------------------
  // ABOUT SECTION IMAGE
  // --------------------------------------------------------------------------
  image: {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    alt: 'Apex Dental clinic modern interior and treatment room',
    width: 800,
    height: 600,
  } as ImageAsset,
};

// ============================================================================
// 1. NAVBAR DATA
// ============================================================================

export const navbarData = {
  logoPrefix: 'Apex',
  logoSuffix: 'Dental',
  phoneDisplay: '(555) 019-2834',
  phoneRaw: '+1234567890',
  ctaText: 'Book Visit',
  ctaHref: '#book',
  
  // Navigation Links Header Menu
  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#book' },
  ] as NavLink[],
};

// ============================================================================
// 2. HERO SECTION DATA
// ============================================================================

export const heroData = {
  badge: 'Accepting New Patients & Emergency Cases',
  title: 'Gentle, Modern Dental Care For Your Entire Family',
  subtitle:
    'Experience painless dentistry with state-of-the-art technology. From routine checkups to full smile makeovers, we make your comfort our priority.',
  primaryCta: 'Schedule Your Visit',
  secondaryCta: 'Explore Services',
  
  // Social Proof Badges
  avatars: ['JD', 'AS', 'MK'],
  ratingScore: '4.9/5',
  reviewText: 'Over 500+ verified patient reviews',

  // --------------------------------------------------------------------------
  // HERO SHOWCASE IMAGE
  // --------------------------------------------------------------------------
  image: {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Happy patient smiling at Apex Dental Clinic',
    width: 700,
    height: 700,
  } as ImageAsset,
};

// ============================================================================
// 3. SERVICES SECTION DATA
// ============================================================================

export const servicesSectionHeader = {
  subheading: 'Our Services',
  heading: 'Comprehensive Dental Solutions',
  description:
    'From preventative care to advanced cosmetic procedures, we offer complete oral healthcare under one roof.',
};

export const serviceCardContent = {
  defaultCtaText: 'Learn more',
};

// Array of Services Offered
export const servicesData: ServiceItem[] = [
  {
    id: 'general',
    iconName: 'Stethoscope',
    title: 'General Dentistry',
    description:
      'Routine checkups, cleanings, and cavity prevention programs designed for long-term oral health.',
  },
  {
    id: 'whitening',
    iconName: 'Sparkles',
    title: 'Teeth Whitening',
    description:
      'Professional in-office whitening treatments that brighten your smile up to 8 shades in one visit.',
  },
  {
    id: 'cosmetic',
    iconName: 'Smile',
    title: 'Cosmetic Dentistry',
    description:
      'Veneers, bonding, and smile makeovers tailored to give you the natural, confident smile you want.',
  },
  {
    id: 'implants',
    iconName: 'Shield',
    title: 'Dental Implants',
    description:
      'Permanent, natural-looking tooth replacements engineered for durability, comfort, and aesthetics.',
  },
];

// ============================================================================
// 4. TESTIMONIALS / REVIEWS SECTION DATA
// ============================================================================

export const reviewsSectionHeader = {
  subheading: 'Patient Stories',
  heading: 'What Our Patients Say',
  description: 'Read real experiences from families who trust us with their smiles.',
};

export const testimonialCardContent = {
  defaultRating: 5,
};

// Array of Patient Reviews
export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    treatment: 'Teeth Whitening',
    quote:
      'The staff made me feel completely relaxed from the moment I stepped in. My whitening results exceeded my expectations!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: '2',
    name: 'Michael Carter',
    treatment: 'Dental Implants',
    quote:
      'I was terrified of getting an implant, but Dr. Apex made the procedure painless and easy. Truly top-tier care.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: '3',
    name: 'Elena Rostova',
    treatment: 'General Checkup',
    quote:
      'Hands down the best dental clinic in town. Clean facility, friendly staff, and zero wait times for appointments.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
];

// ============================================================================
// 5. APPOINTMENT FORM DATA
// ============================================================================

export const appointmentFormContent = {
  title: 'Book Your Appointment',
  subtitle:
    'Fill out the form below and our team will call you within 24 hours to confirm.',
  successTitle: 'Request Received!',
  successMessage:
    'Thank you for reaching out. We will contact you shortly to finalize your appointment time.',
  buttonText: 'Submit Request',
};

// ============================================================================
// 6. FOOTER DATA
// ============================================================================

export const footerData = {
  clinicName: 'Apex Dental Clinic',
  copyrightText: 'All rights reserved.',
};