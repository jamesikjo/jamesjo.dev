import { getStrapiURL } from "./fetchStrapi";

interface Media {
  data: {
    attributes: {
      url: string;
    };
  };
}

const getStrapiMedia = (media: Media) => {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
};

export default getStrapiMedia;
