import React from "react";
import { Container } from "@material-ui/core";
import { Main } from "../../src/components/Layout";
import ProjectList from "../../src/components/ProjectList";

const PortfolioPage = () => {
  return (
    <Main title="Portfolio">
      <Container maxWidth="false" sx={{ py: { xs: 10, sm: 15 } }}>
        <ProjectList />
      </Container>
    </Main>
  );
};

export default PortfolioPage;
