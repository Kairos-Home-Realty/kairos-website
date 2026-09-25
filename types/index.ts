export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  image?: string;
}

export interface Builder {
  name: string;
  tagline: string;
  description: string;
  projects: string[];
  established: string;
  logo?: string;
  logoBg?: "light" | "dark";
}

export interface BankPartner {
  name: string;
  productHighlight: string;
  logo: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  role: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ContactFormValues {
  fullName: string;
  phone: string;
  email: string;
  requirement: string;
  budget: string;
  location: string;
  message: string;
}
