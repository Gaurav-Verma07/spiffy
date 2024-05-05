export interface PersonalInfoInterface {
  uid: string;
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
  uid: string;
  summary: string | null;
}

export interface EducationInterface {
  uid: string;
  indexID: number;
  title: string;
  degree?: string;
  fieldOfStudy?: string;
  startDate?: string | null;
  endDate?: string | null;
  cgpa?: number;
  description?: string;
}

export interface ExperienceInterface {
  uid: string;
  indexID: number;
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
  uid: string;
  indexID: number;
  title: string;
  link?: string;
  startDate?: string | null;
  endDate?: string | null;
  isCurrentWoring?: boolean;
  description: string;
}

export type SkillsInterface = string[];

export type ResumeInfoInterface = {
  uid: string;
  resumeName: string;
  jobField?: string | null;
  experienceLevel?: string | null;
};
