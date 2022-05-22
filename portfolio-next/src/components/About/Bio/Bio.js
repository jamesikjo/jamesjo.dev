import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ReactMarkdown from "react-markdown";

const Bio = ({ bio }) => {
  const [showText, setShowText] = useState(false);

  const toggleShowText = () => {
    setShowText(!showText);
  };
  const switchToggleIcon = () => {
    return showText ? (
      <ArrowDropUpIcon color="info" sx={{ verticalAlign: "middle" }} />
    ) : (
      <ArrowDropDownIcon color="info" sx={{ verticalAlign: "middle" }} />
    );
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

      <Box mb={3}>
        <Typography variant="subtitle1" color="primary" fontWeight="600">
          Short
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          color="primary"
          className="markdown"
        >
          <ReactMarkdown children={bio.short} />
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle1" color="primary" fontWeight="600">
          Long
        </Typography>
        <Typography
          variant="caption"
          component="div"
          color="primary"
          fontWeight="400"
          onClick={toggleShowText}
          className="markdown"
          display="inline"
          sx={{ cursor: "pointer" }}
        >
          {showText ? "hide" : "dropdown"}
          {switchToggleIcon()}
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
