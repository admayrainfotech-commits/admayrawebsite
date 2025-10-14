import { TeamMember, Service, PortfolioItem, Testimonial, ContactInfo } from '../types';

export const teamMembers: TeamMember[] = [
  {
    name: "Koldycrack",
    role: "Founder & Cyber Security Expert",
    experience: "4 years experience in design & security",
    image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    name: "Sanket Langore",
    role: "Marketing Head",
    experience: "MBA - Marketing",
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    name: "Prajakta Jagtap",
    role: "Sales Manager",
    experience: "Expert in client relations",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    name: "Satish Tardale",
    role: "Developer",
    experience: "Full-stack development expert",
    image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    icon: "Code",
    features: ["React/Next.js", "Full-stack solutions", "Responsive design", "Performance optimization"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies that drive results",
    icon: "TrendingUp",
    features: ["SEO optimization", "Social media marketing", "Content strategy", "PPC campaigns"]
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description: "Protect your business with advanced security solutions",
    icon: "Shield",
    features: ["Security audits", "Threat protection", "Data encryption", "Compliance consulting"]
  },
  {
    id: "ui-design",
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that convert",
    icon: "Palette",
    features: ["User research", "Wireframing", "Prototyping", "Design systems"]
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Modern e-commerce solution with advanced features",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: "2",
    title: "Brand Campaign",
    category: "Digital Marketing",
    image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Successful digital marketing campaign increasing ROI by 300%",
    technologies: ["SEO", "Social Media", "Content Marketing", "Analytics"]
  },
  {
    id: "3",
    title: "Security Dashboard",
    category: "Cyber Security",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Comprehensive security monitoring and threat detection system",
    technologies: ["Python", "Machine Learning", "Real-time Analytics", "API Integration"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    company: "TechStart Solutions",
    content: "Admayra Info Tech transformed our digital presence completely. Their expertise in both development and marketing is unmatched.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: "2",
    name: "Priya Patel",
    company: "Digital Ventures",
    content: "The team's attention to detail and innovative approach helped us achieve our goals faster than expected.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: "3",
    name: "Amit Kumar",
    company: "SecureNet Inc",
    content: "Outstanding cyber security solutions that gave us peace of mind. Highly recommend their services!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export const contactInfo: ContactInfo = {
  phone: "+91 91122 93040",
  email: "info@admayratech.com",
  address: "Near Vishwaraj Hospital, Loni Kalbhor, Pune",
  whatsapp: "919112293040"
};