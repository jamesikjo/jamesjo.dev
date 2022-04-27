import React from "react";
import Link from "next/link";

import { Box, Container, Divider } from "@material-ui/core";
import Bio from "./Bio";
import Photos from "./Photos";
import Skills from "./Skills";
import Interests from "./Interests";
import { Breadcrumbs, Typography } from "@mui/material";

const About = () => {
  return (
    <Box component="section" sx={{ py: { xs: 10, sm: 15 } }}>
      <Container>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ "& nav": { paddingLeft: 0 }, pb: 1 }}
        >
          <Link href="/" passHref>
            <Typography
              variant="body1"
              component="a"
              color="secondary"
              sx={{ textDecoration: "none" }}
            >
              Home
            </Typography>
          </Link>
          <Typography variant="h6" color="text.primary" fontWeight="500">
            About
          </Typography>
        </Breadcrumbs>
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
