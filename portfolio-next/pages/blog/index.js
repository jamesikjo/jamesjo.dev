import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { MainLayout } from "../../src/components/Layout";
import Blog from "../../src/components/Blog";
import { getDatabase } from "../../src/lib/notion";

const BlogPage = ({ blogPosts }) => {
  return (
    <Box>
      <MainLayout title="Blog">
        <Container sx={{ maxWidth: 800 }} maxWidth={false}>
          <Blog blogPosts={blogPosts} />
        </Container>
      </MainLayout>
    </Box>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const blogPosts = await getDatabase();
  return {
    props: {
      blogPosts,
    },
    revalidate: 10,
  };
};
