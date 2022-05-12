import React from "react";
import { Container } from "@mui/material";
import { MainLayout } from "../../src/components/Layout";
import ProjectList from "../../src/components/ProjectList";
import projectData from "../../src/lib/projectData";

const PortfolioPage = ({ projectData }) => {
  return (
    <MainLayout title="Portfolio">
      <Container maxWidth="md" sx={{ pb: 10 }}>
        <ProjectList projectData={projectData} />
      </Container>
    </MainLayout>
  );
};

//get projectData on pre-render
export const getStaticProps = async () => {
  return { props: { projectData } };
};

export default PortfolioPage;
