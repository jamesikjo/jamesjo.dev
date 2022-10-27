import { GetStaticProps, GetStaticPaths } from "next";
import { Container, Box } from "@mui/material";
import { useRouter } from "next/router";
import {
  getBlogPostProperties,
  getSingleBlogProperty,
  getBlocks,
} from "../../src/lib/notion/fetchNotion";
import { MainLayout } from "../../src/components/Layout";
import BreadNavCrumbs from "../../src/components/BreadNavCrumbs";
import { PostBlocks, Title as BlogTitle } from "../../src/components/Blog/Post";
import { Block } from "../../src/types/notion/Block";
import { BlogProperties } from "../../src/types/notion/Interface";

interface APICall {
  blogPost: BlogProperties[];
  slug: string;
  blocks: Block[];
}

const BlogPost = ({ blogPost, slug, blocks }: APICall) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Box>
      <MainLayout title={blogPost[0].title}>
        <Container sx={{ maxWidth: 800 }} maxWidth={false}>
          <BreadNavCrumbs
            prevTitle={"Blog"}
            prevHref={"/blog"}
            current={slug.charAt(0).toUpperCase() + slug.slice(1)}
          />
          <BlogTitle blogPost={blogPost[0]} />
          {blocks.map((block) => (
            <PostBlocks block={block} key={block.id} />
          ))}
        </Container>
      </MainLayout>
    </Box>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  //implement dynamic paths using each blog's slug value in properties
  const blogProperties = await getBlogPostProperties();

  const paths = blogProperties.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  //use slug to get single blog post to extract properties
  const blogPost = await getSingleBlogProperty(slug);

  //use blog id to get content blocks of each blog post
  const blocks = await getBlocks(blogPost[0].id);

  return {
    props: { blogPost, slug, blocks },
    revalidate: 10,
  };
};
