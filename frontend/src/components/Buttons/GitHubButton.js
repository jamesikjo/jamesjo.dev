import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const GitHubButton = ({
  variant = "text",
  size = "medium",
  href = "https://github.com/jamesikjo",
  color = "primary",
}) => {
  return (
    <>
      <Button
        variant={variant}
        color={color}
        size={size}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        startIcon={<GitHubIcon />}
        sx={{
          "& .MuiButton-startIcon": { mr: 0.5 },
        }}
      >
        GitHub
      </Button>
    </>
  );
};

export default GitHubButton;
