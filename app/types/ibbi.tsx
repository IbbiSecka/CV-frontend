export interface Project {
  name: string;
  img: string;
  description: string;
  date: string;
  role: string;
  ibbiId: number;
}

export interface Resume {
  companyName: string;
  companyLocation: string;
  position: string;
  duration: string;
  description: string;
  ibbiId: number;
}
export interface Social{
    name: string;
    link: string;
}

export interface Language {
  name: string;
  ibbiId: number;
}

export interface Education {
  educationName: string;
  description: string;
  educationSite: string;
  degree: string;
  duration: string;
  ibbiId: number;
}

export interface Profile {
  id: number;
  firstName: string;
  description: string;
  dob: string;
  img: string;
  projects: Project[];
  resumeExperiences: Resume[];
  languages: Language[];
  educations: Education[];
  socials : Social[];
}