import React from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import ReactMarkdown from "react-markdown";

const Bio = ({ bio }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box>
      <Typography
        variant="h4"
        color="primary"
        fontWeight="600"
        mb={2}
        sx={{ letterSpacing: "-.10rem" }}
      >
        Bio
      </Typography>

      <Box mb={3}>
        <Typography
          variant={isSm ? "subtitle1" : "subtitle2"}
          component="div"
          color="secondary"
          className="markdown"
          fontWeight="400"
          sx={{ maxWidth: 750 }}
        >
          <ReactMarkdown children={bio.short} />
        </Typography>
      </Box>
    </Box>
  );
};

export default Bio;
