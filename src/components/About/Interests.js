import React from "react";
import { Typography, Stack } from "@mui/material";

import Photos from "./Photos";

const Interests = () => {
  return (
    <>
      <Stack mb={4}>
        <Typography
          variant="body1"
          color="secondary"
          sx={{ letterSpacing: ".15rem" }}
        >
          {"Outside of work".toUpperCase()}
        </Typography>

        <Typography
          variant="h3"
          color="primary"
          fontWeight={700}
          sx={{ letterSpacing: "-.12rem" }}
        >
          Interests
        </Typography>
      </Stack>
      <Stack mb={10}>
        <Typography
          variant="subtitle1"
          color="secondary"
          mb={4}
          sx={{ fontSize: { xs: "1em", md: "1.15em" } }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          placerat orci nulla pellentesque dignissim enim sit amet. Sollicitudin
          tempor id eu nisl nunc mi ipsum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut placerat orci nulla pellentesque
          dignissim enim sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum.
        </Typography>
      </Stack>
      <Photos />
    </>
  );
};

export default Interests;
