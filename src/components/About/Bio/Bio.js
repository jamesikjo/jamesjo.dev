import React from "react";
import { Typography, Stack, Box, Avatar, Grid } from "@mui/material";

const Bio = () => {
  return (
    <>
      <Stack mb={3}>
        <Typography
          variant="h4"
          color="primary"
          fontWeight="700"
          sx={{ letterSpacing: "-.1rem" }}
        >
          Bio
        </Typography>
      </Stack>

      <Typography variant="subtitle1" color="secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci
        nulla pellentesque dignissim enim sit amet. Sollicitudin tempor id eu
        nisl nunc mi ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut placerat orci nulla pellentesque dignissim enim sit amet.
        Sollicitudin tempor id eu nisl nunc mi ipsum.
      </Typography>
    </>
  );
};

export default Bio;
