import { BlogProperties, IPerson, ITag } from "../../types/notion/Interface";
import { BlogPostInDB } from "../../types/notion/Properties";

export const extractBlogPost = (BlogPostInDB: BlogPostInDB): BlogProperties => {
  const id = BlogPostInDB.id;
  const author = BlogPostInDB.properties.Author.people.map(
    (person) => person as IPerson
  );
  const published = BlogPostInDB.properties.Published.checkbox;
  const formatDate = BlogPostInDB.properties.FormatDate;
  const slug = BlogPostInDB.properties.Slug.rich_text
    .map((text) => text.plain_text)
    .join(" ");
  const title = BlogPostInDB.properties.Title.title
    .map((text) => text.plain_text)
    .join(" ");
  const description = BlogPostInDB.properties.Description.rich_text
    .map((text) => text.plain_text)
    .join(" ");
  const tags = BlogPostInDB.properties.Tags.multi_select.map(
    (tag) => tag as ITag
  );
  return {
    id: id,
    author: author,
    formatDate: formatDate,
    title: title,
    description: description,
    tags: tags,
    slug: slug,
    published: published,
  };
};
