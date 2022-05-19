import React from "react";
import { Grid, Typography, Stack, Box, Divider } from "@mui/material";
import TechGridList from "./TechGridList";
import { ResumeButton, GitHubButton } from "../../Buttons";

const Skills = () => {
  return (
    <>
      <Stack mb={3}>
        <Typography
          variant="h4"
          color="primary"
          fontWeight="600"
          sx={{ letterSpacing: "-.10rem" }}
        >
          Skills
        </Typography>
      </Stack>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} alignItems="flex-start">
          <Box>
            <Typography variant="subtitle1" color="primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              placerat orci nulla pellentesque dignissim enim sit amet.
              Sollicitudin tempor id eu nisl nunc mi ipsum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              placerat orci nulla pellentesque dignissim enim sit amet.
              Sollicitudin tempor id eu nisl nunc mi ipsum.
            </Typography>
          </Box>
        </Grid>
        <Grid item container spacing={1} xs={12} md={6} justifyContent="center">
          <TechGridList />
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
