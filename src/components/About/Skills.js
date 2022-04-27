import React from "react";
import { Grid, Typography, Stack, Box, Divider } from "@mui/material";
import { ResumeButton, GitHubButton } from "../Buttons";
import TechGridList from "./TechGridList";

const Skills = () => {
  return (
    <>
      <Stack mb={4}>
        <Typography
          variant="body1"
          color="secondary"
          gutterBottom
          sx={{ letterSpacing: ".15rem" }}
        >
          {"Development".toUpperCase()}
        </Typography>

        <Typography
          variant="h3"
          color="primary"
          fontWeight={700}
          sx={{ letterSpacing: "-.12rem" }}
        >
          Skills
        </Typography>
      </Stack>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7} alignItems={"flex-start"}>
          <Box mb={4}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ fontSize: { xs: "1em", md: "1.15em" } }}
            >
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
          <Stack direction="row" spacing={1}>
            <ResumeButton size="medium" color="primary" />
            <Divider orientation="vertical" flexItem />
            <GitHubButton size="medium" color="primary" />
          </Stack>
        </Grid>
        <Grid item container spacing={2} xs={12} md={5} justifyContent="center">
          <TechGridList />
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
