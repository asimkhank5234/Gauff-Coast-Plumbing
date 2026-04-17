export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  review: string;
  date?: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string; // Lucide icon name
  longDescription?: string;
  features?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}
