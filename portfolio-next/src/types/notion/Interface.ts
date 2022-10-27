export interface ITag {
  id: string;
  name: string;
  color: string;
}

export interface IPerson {
  type: "person";
  person: {
    email?: string | undefined;
  };
  name: string | null;
  avatar_url: string | null;
  id: string;
  object: "user";
}

export interface BlogProperties {
  id: string;
  author: IPerson[];
  date?: string;
  description: string;
  formatDate: {
    formula: {
      type: "string";
      string: string | null;
    };
  };
  published: boolean;
  slug: string;
  tags: ITag[];
  title: string;
}

export interface Project {
  id: string;
  tags: ITag[];
  title: string;
  description: string;
  link: string;
}
