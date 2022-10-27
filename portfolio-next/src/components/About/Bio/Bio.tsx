import React from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { Bio } from "../../../types/strapi/About";
import ReactMarkdown from "react-markdown";

interface BioProps {
  bio: Bio;
}

const Bio = ({ bio }: BioProps) => {
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

      <Box>
        <Typography
          variant={isSm ? "subtitle1" : "subtitle2"}
          color="secondary"
          component="div"
          fontWeight="400"
          sx={{ maxWidth: 750 }}
        >
          <ReactMarkdown>{bio.short}</ReactMarkdown>
        </Typography>
      </Box>
    </Box>
  );
};

export default Bio;
