import React from "react";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button } from "@mui/material";

const VisitSiteButton = ({ variant, color, size }) => {
  return (
    <>
      <Button
        variant={variant}
        color={color}
        size={size}
        href={"https://github.com/jamesikjo"}
        rel="noopener noreferrer"
        target="_blank"
        startIcon={<OpenInNewIcon />}
        sx={{
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        Visit
      </Button>
    </>
  );
};

export default VisitSiteButton;
