export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  imageUrl?: string;
};

export type EducationItem = {
  institution: string;
  location: string;
  period: string;
  degree: string;
  score?: string;
};

export type Certification = {
  title: string;
  issuer: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};