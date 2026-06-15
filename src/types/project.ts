// src/types/project.ts

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