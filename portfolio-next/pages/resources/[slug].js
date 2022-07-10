import { Container, Box } from "@mui/material";
import { MainLayout } from "../../src/components/Layout";
import {
  getAllPropertyValues,
  getPropertyValues,
  getPageBySlug,
  getPostBlockContent,
  getUser,
} from "../../src/lib/notion";
import PostBlocks from "../../src/components/Resources/PostBlocks";
import BreadNavCrumbs from "../../src/components/BreadNavCrumbs";

const SinglePost = ({ postContent, author, propertyValues, slug }) => {
  return (
    <Box>
      <MainLayout title="Resources">
        <Container sx={{ maxWidth: 800 }} maxWidth={false}>
          <BreadNavCrumbs
            prevTitle={"Resources"}
            prevHref={"/resources"}
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
    fallback: false,
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
