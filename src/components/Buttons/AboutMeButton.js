import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const AboutMeButton = ({ variant, color, size }) => {
  return (
    <>
      <Link href="/about" passHref>
        <Button
          variant={variant}
          color={color}
          size={size}
          component="a"
          sx={{
            border: "none",
            boxShadow: "4px 4px 24px 2px rgb(0 0 0 / 15%)",
            fontWeight: "500",
            borderRadius: 2,
            padding: "18px 18px",
            height: 35,
            "&:hover": {
              bgcolor: "#F2F2F2",
              border: "none",
            },
          }}
        >
          About Me
        </Button>
      </Link>
    </>
  );
};

export default AboutMeButton;
