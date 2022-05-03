import React from "react";
import { Box } from "@mui/material";
import { MainLayout } from "../src/components/Layout";
import About from "../src/components/About";

const AboutPage = () => {
  return (
    <Box>
      <MainLayout title="About">
        <About />
      </MainLayout>
    </Box>
  );
};

export default AboutPage;
