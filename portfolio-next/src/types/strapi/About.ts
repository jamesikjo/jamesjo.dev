export interface About {
  id: number;
  attributes: {
    bio: Bio;
    links: Link[];
    skills: Skill;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface Bio {
  id: number;
  short: string;
  long: string;
}

export interface Link {
  id: number;
  name: string;
  title: string;
  url: string;
  resume: ResumeLink[];
}

export interface Skill {
  id: number;
  content?: string;
  technologies: string;
}

export interface ResumeLink {
  id: number;
  name?: string;
  title?: string;
  url: string;
}
