import React from "react";
import Link from "next/link";

import { Button } from "@material-ui/core";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";

const ResumeButton = ({ variant, color, size }) => {
  return (
    <>
      <Button
        variant={variant}
        color={color}
        size={size}
        startIcon={<FeedOutlinedIcon />}
        sx={{
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        Resume
      </Button>
    </>
  );
};

export default ResumeButton;
