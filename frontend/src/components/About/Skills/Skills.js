import React from "react";
import { Grid, Typography, Stack, Box, Divider } from "@mui/material";
import TechGridList from "./TechGridList";
import { ResumeButton, GitHubButton } from "../../Buttons";

const Skills = ({ skills }) => {
  return (
    <Box mb={3}>
      <Typography
        variant="h4"
        color="primary"
        fontWeight="600"
        mb={3}
        sx={{ letterSpacing: "-.10rem" }}
      >
        Skills
      </Typography>

      <Box>
        <Typography
          variant="subtitle1"
          color="primary"
          gutterBottom
          fontWeight="600"
          // sx={{ fontStyle: "italic" }}
        >
          Technologies
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} alignItems="flex-start">
            <Box>
              <Typography variant="subtitle1" color="primary">
                {skills.content}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            container
            spacing={1}
            xs={12}
            md={6}
            justifyContent="center"
          >
            <TechGridList />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
