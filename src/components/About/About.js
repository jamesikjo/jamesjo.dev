import React from "react";
import { Box } from "@mui/material";
import Bio from "./Bio";
import Skills from "./Skills";
import BreadNavCrumbs from "../BreadNavCrumbs";
import Links from "./Links";

const About = () => {
  return (
    <Box component="section">
      <BreadNavCrumbs current="About" />
      <Links />
      <Box py={10}>
        <Bio />
      </Box>
      <Box>
        <Skills />
      </Box>
    </Box>
  );
};

export default About;
