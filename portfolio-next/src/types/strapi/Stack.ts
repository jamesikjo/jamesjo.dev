export interface Stack {
  id: number;
  attributes: {
    stack: string;
    icon: Icon;
    order: number;
    url: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface Icon {
  id: number;
  data: {
    attributes: {
      name: string;
      alternativeText: null | string;
      caption: null | string;
      width: null | number;
      height: null | number;
      formats: null;
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

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}
