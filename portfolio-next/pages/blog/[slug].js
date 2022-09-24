import { Container, Box } from "@mui/material";
import { useRouter } from "next/router";
import {
  getDatabase,
  getBlogPostProperties,
  getBlogContentBlocks,
} from "../../src/lib/notion";
import { MainLayout } from "../../src/components/Layout";
import PostBlocks from "../../src/components/Blog/PostBlocks";
import BreadNavCrumbs from "../../src/components/BreadNavCrumbs";
import Title from "../../src/components/Blog/Title";

const SinglePost = ({ properties, blogContentBlocks, slug }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <MainLayout title={properties.Title.title[0].plain_text}>
        <Container sx={{ maxWidth: 800 }} maxWidth={false}>
          <BreadNavCrumbs
            prevTitle={"Blog"}
            prevHref={"/blog"}
            current={slug.charAt(0).toUpperCase() + slug.slice(1)}
          />
          <Title properties={properties} />
          <PostBlocks blogContentBlocks={blogContentBlocks} />
        </Container>
      </MainLayout>
    </Box>
  );
};

export default SinglePost;

export const getStaticPaths = async () => {
  //implement dynamic paths using blog post slug property value
  const blogPosts = await getDatabase();

  const paths = blogPosts.map(({ properties: { Slug } }) => ({
    params: { slug: Slug.rich_text[0].plain_text },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  //use slug to get properties of each blog post
  const blogProperties = await getBlogPostProperties(slug);
  const { id, properties } = blogProperties;

  //use post id to get content blocks of each blog post
  const blogContentBlocks = await getBlogContentBlocks(id);

  return {
    props: { properties, blogContentBlocks, slug },
    revalidate: 10,
  };
};
