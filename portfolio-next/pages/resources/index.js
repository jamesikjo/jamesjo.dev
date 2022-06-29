import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { MainLayout } from "../../src/components/Layout";
import Resources from "../../src/components/Resources/Resources";

const ResourcePage = () => {
  return (
    <Box>
      <MainLayout title="Resources">
        <Container maxWidth="md">
          <Resources />
        </Container>
      </MainLayout>
    </Box>
  );
};

export default ResourcePage;
