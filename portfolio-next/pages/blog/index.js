import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { MainLayout } from "../../src/components/Layout";
import Blog from "../../src/components/Blog";
import { getAllPropertyValues } from "../../src/lib/notion";

const BlogPage = ({ allPropertyvalues }) => {
  return (
    <Box>
      <MainLayout title="Resources">
        <Container sx={{ maxWidth: 800 }} maxWidth={false}>
          <Blog allPropertyvalues={allPropertyvalues} />
        </Container>
      </MainLayout>
    </Box>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const allPropertyvalues = await getAllPropertyValues();
  return {
    props: {
      allPropertyvalues,
    },
    revalidate: 1,
  };
};
