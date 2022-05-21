import React from "react";
import { Container } from "@mui/material";
import { MainLayout } from "../../src/components/Layout";
import ProjectList from "../../src/components/ProjectList";
import { fetchData } from "../../src/lib/fetchData";

const PortfolioPage = ({ projects }) => {
  return (
    <MainLayout title="Portfolio">
      <Container maxWidth="md" sx={{ pb: 10 }}>
        <ProjectList projects={projects} />
      </Container>
    </MainLayout>
  );
};

export default PortfolioPage;

export const getStaticProps = async () => {
  const projectRes = await fetchData("/projects", {
    populate: "*",
  });

  return {
    props: {
      projects: projectRes.data,
    },
  };
};
