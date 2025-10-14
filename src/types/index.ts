export interface TeamMember {
  name: string;
  role: string;
  experience?: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
}