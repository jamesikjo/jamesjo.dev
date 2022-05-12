import React from "react";
import { Box, Container } from "@mui/material";
import { MainLayout } from "../src/components/Layout";
import About from "../src/components/About";

const AboutPage = () => {
  return (
    <Box>
      <MainLayout title="About">
        <Container maxWidth="md">
          <About />
        </Container>
      </MainLayout>
    </Box>
  );
};

export default AboutPage;
