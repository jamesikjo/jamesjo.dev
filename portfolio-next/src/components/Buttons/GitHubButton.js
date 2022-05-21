import React from "react";
import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const GitHubButton = ({
  variant = "text",
  size = "medium",
  href = "https://github.com/jamesikjo",
  color = "primary",
}) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      {isSm ? (
        <Button
          variant={variant}
          component="a"
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
      ) : (
        <IconButton
          variant={variant}
          component="a"
          color={color}
          size={size}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      )}
    </>
  );
};

export default GitHubButton;
