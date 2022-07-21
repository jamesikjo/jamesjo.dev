import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { MainLayout } from "../../src/components/Layout";
import Blog from "../../src/components/Blog";
import { getAllPropertyValues } from "../../src/lib/notion";

const BlogPage = ({ allPropertyValues }) => {
  return (
    <Box>
      <MainLayout title="Blog">
        <Container sx={{ maxWidth: 800 }} maxWidth={false}>
          <Blog allPropertyValues={allPropertyValues} />
        </Container>
      </MainLayout>
    </Box>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const allPropertyValues = await getAllPropertyValues();
  return {
    props: {
      allPropertyValues,
    },
    revalidate: 1,
  };
};
