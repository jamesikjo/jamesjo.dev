import React from "react";
import { Container } from "@mui/material";
import { MainLayout } from "../../src/components/Layout";
import ProjectList from "../../src/components/ProjectList";

const PortfolioPage = () => {
  return (
    <MainLayout title="Portfolio">
      <Container maxWidth="md" sx={{ pb: 10 }}>
        <ProjectList />
      </Container>
    </MainLayout>
  );
};

export default PortfolioPage;
