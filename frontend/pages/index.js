import React from "react";
import { Container } from "@mui/material";
import { Intro, Latest, Contact } from "../src/components/Landing";
import { MainLayout } from "../src/components/Layout";
import latestProjectData from "../src/lib/latestProjectData";

export default function Home({ latestProjectData }) {
  return (
    <MainLayout title="Web Developer">
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Intro />
      </Container>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Latest latestProjectData={latestProjectData} />
      </Container>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Contact />
      </Container>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  return { props: { latestProjectData } };
};
