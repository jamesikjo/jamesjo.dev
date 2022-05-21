import React, { useState } from "react";
import { Typography, Stack, Box, Avatar, Grid } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ReactMarkdown from "react-markdown";

const Bio = ({ bio }) => {
  const [showText, setShowText] = useState(false);
  const toggleShowText = () => {
    setShowText(!showText);
  };
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
          variant="subtitle1"
          color="primary"
          fontWeight="600"
          mb={-1}
        >
          Short
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          color="primary"
          className="markdown"
          mb={3}
        >
          <ReactMarkdown children={bio.short} />
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="subtitle1"
          component="div"
          color="primary"
          fontWeight="600"
          onClick={toggleShowText}
          sx={{ cursor: "pointer" }}
        >
          Long
        </Typography>
        <Typography
          variant="caption"
          component="div"
          color="primary"
          fontWeight="400"
          onClick={toggleShowText}
          sx={{ cursor: "pointer" }}
        >
          dropdown
          <ArrowDropDownIcon color="info" sx={{ verticalAlign: "middle" }} />
        </Typography>

        {showText && (
          <Typography variant="subtitle1" component="p" color="primary" mt={-1}>
            <ReactMarkdown children={bio.long} />
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Bio;
