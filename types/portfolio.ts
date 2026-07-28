export interface PersonalDetails {
  name: string;
  role: string;
  college: string;
  academicYear: string;
  location: string;
  bio: string;
  interests: string[];
  learningGoals: string[];
  personalQualities: string[];
  profileImage: string;
  resumeUrl: string;
  socials: {
    email: string;
    instagram: string;
    facebook: string;
    github: string;
    linkedin: string;
  };
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Experienced' | 'Learning' | 'Familiar';
    iconName?: string;
    featured?: boolean;
  }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problemStatement: string;
  solutionSummary: string;
  category: 'Web' | 'Full-Stack' | 'AI / ML' | 'Systems / Tools';
  status: 'Completed' | 'In Development' | 'Featured Project';
  techStack: string[];
  features: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: string;
  coursework: string[];
  achievements: string[];
  location: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  type: 'Certification' | 'Workshop' | 'Hackathon' | 'Competition' | 'College Event';
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  tags: string[];
  isPlaceholder?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface PortfolioData {
  personal: PersonalDetails;
  stats: StatItem[];
  skillCategories: SkillCategory[];
  projects: Project[];
  education: EducationItem[];
  achievements: AchievementItem[];
  services: ServiceItem[];
}
