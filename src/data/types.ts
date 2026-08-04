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

export interface FeaturePoint {
  id: string;
  title: string;
  description: string;
}

export interface ServiceDetail {
  imageSrc: string;
  imageAlt: string;
  extendedDescription: string;
  highlights?: string[];
}

export interface ServiceItem {
  id: string;
  iconName: string; // Dynamic icon rendering string name
  title: string;
  description: string;
  details?: ServiceDetail;
}

export interface TestimonialItem {
  id: string;
  name: string;
  treatment: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
}