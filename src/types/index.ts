export interface Doctor {
  id: string;
  slug: string;
  name: string;
  specialty: string;
  departmentSlug: string;
  yearsExperience: number;
  gender: 'Male' | 'Female';
  bio: string;
  qualifications: string[];
  certifications: string[];
  expertise: string[];
  languages: string[];
  consultationHours: string;
  location: string;
  availability: 'Available Today' | 'Available This Week' | 'Fully Booked';
  photoSeed: string;
}

export interface Department {
  id: string;
  slug: string;
  name: string;
  description: string;
  servicesOffered: string[];
  openingHours: string;
  phone: string;
  photoSeed: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  departmentSlug: string;
}

export interface Article {
  id: string;
  slug: string;
  category: string;
  title: string;
  summary: string;
  body: string;
  author: string;
  date: string;
  photoSeed: string;
  src?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  description: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  photoSeed: string;
  src?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  quote: string;
}

export interface AppointmentDraft {
  departmentSlug?: string;
  doctorSlug?: string;
  date?: string;
  time?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  dob?: string;
  gender?: string;
  reason?: string;
  insuranceProvider?: string;
  notes?: string;
}
