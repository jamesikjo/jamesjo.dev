export interface Project {
  id: number;
  attributes: {
    highlights: string;
    order: number;
    slug: string;
    subtitle: string;
    summary: string;
    title: string;
    type: string;
    links: Link[];
    preview: Preview;
    thumbnail: Thumbnail;
    created_at: Date;
    updated_at: Date;
  };
}

export interface Link {
  id: number;
  name?: string;
  title?: string;
  url: string;
}

export interface Preview {
  id: number;
  data: {
    attributes: {
      name: string;
      alternativeText: null | string;
      caption: null | string;
      width: number;
      height: number;
      formats: Formats;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      provider_metadata: ProviderMetadata;
      created_at: Date;
      updated_at: Date;
    };
  };
}

export enum EXT {
  Jpg = ".jpg",
  PNG = ".png",
  Webp = ".webp",
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  data: {
    id: number;
    attributes: {
      name: string;
      hash: string;
      ext: EXT;
      mime: string;
      width: number;
      height: number;
      size: number;
      path: null;
      url: string;
      provider_metadata: ProviderMetadata;
    };
  };
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}
