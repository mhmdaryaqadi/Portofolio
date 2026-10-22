export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  specialization: string;
  location: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  status: {
    available: boolean;
    label: string;
  };
  bio: string;
  extendedBio: string;
  socials: SocialLink[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  isFlagship?: boolean;
  version?: string;
  description: string;
  highlights?: string[];
  metrics?: ProjectMetric[];
  techStack: string[];
  repoUrl: string;
  demoUrl?: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  isHighlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  institution: string;
  location: string;
  period: string;
  type: "work" | "education";
  highlights: string[];
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
