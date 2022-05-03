import React from "react";
import { Box } from "@mui/material";
import { Main } from "../src/components/Layout";
import About from "../src/components/About";

const AboutPage = () => {
  return (
    <Box>
      <Main title="About">
        <About />
      </Main>
    </Box>
  );
};

export default AboutPage;
