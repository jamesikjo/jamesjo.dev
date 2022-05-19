import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button } from "@mui/material";

const VisitSiteButton = ({ variant = "text", size = "medium", href }) => {
  return (
    <>
      <Button
        variant={variant}
        color="primary"
        size={size}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        startIcon={<OpenInNewIcon />}
        sx={{
          "& .MuiButton-startIcon": { mr: 0.5 },
        }}
      >
        Visit
      </Button>
    </>
  );
};

export default VisitSiteButton;
