export interface PersonalInfoInterface {
  name: string;
  email: string;
  number?: string | null;
  country?: string | null;
  linkedin?: string | null;
  github?: string | null;
  twitter?: string | null;
  portfolio?: string | null;
}

export interface SummaryInfoInterface {
  summary: string | null;
}

export interface EducationInterface {
  uid: number;
  school: string;
  degree?: string;
  fieldOfStudy?: string;
  startDate?: string | null;
  endDate?: string | null;
  cgpa?: number;
  description?: string;
}

export interface ExperienceInterface {
  uid: number;
  title: string;
  employmentType: string;
  companyName: string;
  locationName: string;
  startDate: string | null;
  endDate: string | null;
  isCurrentWoring?: boolean;
  description?: string;
}

export interface ProjectsInterface {
  uid: number;
  title: string;
  link?: string;
  startDate?: string | null;
  endDate?: string | null;
  isCurrentWoring?: boolean;
  description: string;
}

export type SkillsInterface = string[];
