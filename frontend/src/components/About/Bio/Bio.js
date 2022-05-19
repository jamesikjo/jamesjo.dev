import React from "react";
import { Typography, Stack, Box, Avatar, Grid } from "@mui/material";

const Bio = ({ bio }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        color="primary"
        fontWeight="600"
        mb={3}
        sx={{ letterSpacing: "-.10rem" }}
      >
        Bio
      </Typography>

      <Box mb={3}>
        <Typography
          variant="subtitle1"
          color="primary"
          gutterBottom
          fontWeight="600"
          // sx={{ fontStyle: "italic" }}
        >
          Short
        </Typography>
        <Typography variant="subtitle1" color="primary">
          {bio.short}
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="subtitle1"
          color="primary"
          gutterBottom
          fontWeight="600"
          // sx={{ fontStyle: "italic" }}
        >
          Long
        </Typography>
        <Typography variant="subtitle1" color="primary">
          {bio.long}
        </Typography>
      </Box>
    </Box>
  );
};

export default Bio;
