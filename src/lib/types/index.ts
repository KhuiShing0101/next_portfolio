export type NavLinkType = {
  name: string;
  url: string;
};

export type SocialLinkType = {
  icon: string;
  url: string;
};

export type CTAType = {
  title: string;
  url: string;
  title1: string;
  url1: string;
  sameTab?: boolean;
};

// env
export type ExperienceType = {
  role: string;
  role_ja?: string;
  company: string;
  companyUrl: string;
  projectUrl?: string;
  projectname?: string;
  projectname_ja?: string;
  started: Date | string;
  started_ja?: string;
  upto: Date | 'present' | string;
  upto_ja?: string;
  duration?: string;
  duration_ja?: string;
  tasks: string[];
  tasks_ja?: string[];
};

export type ProjectType = {
  id: string;
  name: string;
  url: string;
  year: number;
  img: string;
  tags: string[];
  repo: string;
};

export interface FeaturedProjectType
  extends Omit<ProjectType, 'year' | 'repo'> {
  description: string;
  repo?: string;
  tasks?: string;
}

export type StringKeyValueType = {
  [link: string]: string;
};

export type Direction = 'up' | 'right' | 'down' | 'left';

export type SoftwareSkillType = { name: string; icon: string };

export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
