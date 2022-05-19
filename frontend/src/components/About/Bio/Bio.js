import React from "react";
import { Typography, Stack, Box, Avatar, Grid } from "@mui/material";

const Bio = () => {
  return (
    <>
      <Stack mb={3}>
        <Typography
          variant="h4"
          color="primary"
          fontWeight="600"
          sx={{ letterSpacing: "-.10rem" }}
        >
          Bio
        </Typography>
      </Stack>

      <Typography variant="subtitle1" color="primary">
        {`Hello, I'm James.`} <br />{" "}
        {`Prior to switching my career path to become a
        developer, I spent my last seven years in the heavy steel industry primarily as an environmental compliance manager and operations supervisor.
        Having come from a family of steel workers, I always assumed I would
        carry on the tradition. This soon changed after I was introduced to
        software development through a contractor who authored the software that
        she used to submit our agency's monthly reports. I was incredibly
        fascinated by it and developed a profound interest in development. It
        was only a matter of time before my curiosity took over.`}
        <br />
        Add Rest of text...
      </Typography>
    </>
  );
};

export default Bio;
