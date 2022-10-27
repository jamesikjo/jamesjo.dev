import { GetStaticProps } from "next";
import { Container, Box } from "@mui/material";
import { MainLayout } from "../../src/components/Layout";
import { getBlogPostProperties } from "../../src/lib/notion/fetchNotion";
import { List } from "../../src/components/Blog";
import { BlogProperties } from "../../src/types/notion/Interface";

interface APICall {
  blogProperties: BlogProperties[];
}

//Render Blog List
const BlogListPage = ({ blogProperties }: APICall) => {
  return (
    <Box>
      <MainLayout title="Blog">
        <Container sx={{ maxWidth: 800 }} maxWidth={false} component="section">
          <List blogProperties={blogProperties} />
        </Container>
      </MainLayout>
    </Box>
  );
};

export default BlogListPage;

export const getStaticProps: GetStaticProps = async () => {
  const blogProperties = await getBlogPostProperties();

  return {
    props: {
      blogProperties,
    },
    revalidate: 15,
  };
};
