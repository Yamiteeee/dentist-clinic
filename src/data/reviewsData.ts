import { TestimonialItem } from './types';

export const reviewsSectionHeader = {
  subheading: 'Patient Stories',
  heading: 'What Our Patients Say',
  description: 'Read real experiences from families who trust us with their smiles.',
};

export const testimonialCardContent = {
  defaultRating: 5,
};

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