import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const GitHubButton = ({
  variant = "text",
  size,
  href = "https://github.com/jamesikjo",
}) => {
  return (
    <>
      <Button
        variant={variant}
        color="primary"
        size={size}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        startIcon={<GitHubIcon />}
      >
        GitHub
      </Button>
    </>
  );
};

export default GitHubButton;
