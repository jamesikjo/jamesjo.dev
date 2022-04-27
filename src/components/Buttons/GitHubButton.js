import React from "react";
import { Button } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";

const GitHubButton = ({ variant, color, size }) => {
  return (
    <>
      <Button
        variant={variant}
        color={color}
        size={size}
        href={"https://github.com/jamesikjo"}
        rel="noopener noreferrer"
        target="_blank"
        startIcon={<GitHubIcon />}
        sx={{
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        GitHub
      </Button>
    </>
  );
};

export default GitHubButton;
