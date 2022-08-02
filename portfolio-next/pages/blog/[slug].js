import { Container, Box } from "@mui/material";
import { useRouter } from "next/router";
import {
  getAllPropertyValues,
  getPropertyValues,
  getPageBySlug,
  getPostBlockContent,
  getUser,
} from "../../src/lib/notion";
import { MainLayout } from "../../src/components/Layout";
import PostBlocks from "../../src/components/Blog/PostBlocks";
import BreadNavCrumbs from "../../src/components/BreadNavCrumbs";

const SinglePost = ({ postContent, author, propertyValues, slug }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <MainLayout
        title={postContent.results[0].heading_1.rich_text[0].plain_text}
      >
        <Container sx={{ maxWidth: 800 }} maxWidth={false}>
          <BreadNavCrumbs
            prevTitle={"Blog"}
            prevHref={"/blog"}
            current={slug.charAt(0).toUpperCase() + slug.slice(1)}
          />
          <PostBlocks
            postContent={postContent}
            author={author}
            propertyValues={propertyValues}
          />
        </Container>
      </MainLayout>
    </Box>
  );
};

export default SinglePost;

export const getStaticPaths = async () => {
  //get only Slug property values
  const propertyValues = await getAllPropertyValues();
  const slugPaths = propertyValues.map((prop) => ({
    params: { slug: prop.Slug.results[0].rich_text.plain_text },
  }));

  return {
    paths: slugPaths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  //get page(post) from database that matches slug name
  const singlePostPage = await getPageBySlug(params.slug);
  const { created_by, id, properties } = singlePostPage;
  const { FormatDate, Tags } = properties;

  const author = await getUser(created_by.id);
  const postContent = await getPostBlockContent(id);
  const propertyValues = await getPropertyValues(id, { FormatDate, Tags });

  return {
    props: { postContent, author, propertyValues, slug: params.slug },
    revalidate: 15,
  };
};
