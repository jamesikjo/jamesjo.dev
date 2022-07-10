import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { MainLayout } from "../../src/components/Layout";
import Resources from "../../src/components/Resources";
import { getAllPropertyValues } from "../../src/lib/notion";

const ResourcePage = ({ allPropertyvalues }) => {
  return (
    <Box>
      <MainLayout title="Resources">
        <Container sx={{ maxWidth: 800 }} maxWidth={false}>
          <Resources allPropertyvalues={allPropertyvalues} />
        </Container>
      </MainLayout>
    </Box>
  );
};

export default ResourcePage;

export const getStaticProps = async () => {
  const allPropertyvalues = await getAllPropertyValues();
  return {
    props: {
      allPropertyvalues,
    },
    revalidate: 1,
  };
};
