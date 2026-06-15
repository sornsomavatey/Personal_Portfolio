// src/types/index.ts

export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  image: string;
  featured: boolean;
  liveUrl?: string;
  repositoryUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location?: string;
  duration: string;
  description: string[];
  type: 'internship' | 'competition' | 'program' | 'translation' | 'other';
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  details?: string;
}

export interface Achievement {
  id: number;
  title: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: 'Cloud' | 'Web' | 'Language' | 'Leadership' | 'Other';
}

export interface VolunteerExperience {
  id: number;
  role: string;
  organization: string;
  date: string;
}
