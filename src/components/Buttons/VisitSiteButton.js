import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button } from "@mui/material";

const VisitSiteButton = ({ variant = "text", size, href }) => {
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
      >
        Visit
      </Button>
    </>
  );
};

export default VisitSiteButton;
