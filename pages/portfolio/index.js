import React from "react";
import { Container } from "@material-ui/core";
import MainLayout from "../../src/components/Layout/main/index";
import Projects from "../../src/components/Portfolio/Projects";

const PortfolioPage = () => {
  return (
    <MainLayout title="Portfolio">
      <Container maxWidth="false" sx={{ py: { xs: 10, sm: 15 } }}>
        <Projects />
      </Container>
    </MainLayout>
  );
};

export default PortfolioPage;
