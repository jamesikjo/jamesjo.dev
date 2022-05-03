import React from "react";
import Link from "next/link";
import {
  Breadcrumbs,
  Typography,
  Box,
  Container,
  Divider,
} from "@mui/material";
import Bio from "./Bio";
import Photos from "./Photos";
import Skills from "./Skills";
import Interests from "./Interests";
import BreadNavCrumbs from "../BreadNavCrumbs";

const About = () => {
  return (
    <Box component="section" sx={{ py: { xs: 10, sm: 15 } }}>
      <Container>
        <BreadNavCrumbs current={"About"} />
        <Divider />
      </Container>

      <Container sx={{ py: { xs: 5, sm: 10 } }}>
        <Bio />
      </Container>

      <Container>
        <Divider />
      </Container>

      <Container sx={{ py: 10 }}>
        <Skills />
      </Container>
      <Container>
        <Divider />
      </Container>
      <Container sx={{ py: 10 }}>
        <Interests />
      </Container>
    </Box>
  );
};

export default About;
