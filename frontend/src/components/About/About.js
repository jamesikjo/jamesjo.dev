import React from "react";
import { Box } from "@mui/material";

import Bio from "./Bio";
import Skills from "./Skills";
import BreadNavCrumbs from "../BreadNavCrumbs";
import Links from "./Links";

const About = ({ aboutData }) => {
  const { bio, skills, links } = aboutData;
  return (
    <Box component="section">
      <BreadNavCrumbs current="About" />
      <Links links={links} />
      <Box py={8}>
        <Bio bio={bio} />
      </Box>
      <Box>
        <Skills skills={skills} />
      </Box>
    </Box>
  );
};

export default About;
