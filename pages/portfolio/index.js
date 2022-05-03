import React from "react";
import { Container } from "@material-ui/core";
import { MainLayout } from "../../src/components/Layout";
import ProjectList from "../../src/components/ProjectList";

const PortfolioPage = () => {
  return (
    <MainLayout title="Portfolio">
      <Container maxWidth="false" sx={{ py: { xs: 10, sm: 15 } }}>
        <ProjectList />
      </Container>
    </MainLayout>
  );
};

export default PortfolioPage;
