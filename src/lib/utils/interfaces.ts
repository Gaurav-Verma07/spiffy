export interface PersonalInfoInterface {
  name: string;
  email: string;
  number?: string;
  country?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  portfolio?: string;
}

export interface SummaryInfoInterface {
  summary: string;
}

export interface EducationInterface {
  educationId: number;
  school: string;
  degree?: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  cgpa?: number;
  description?: string;
}
