import React from "react";
import { Typography, Box } from "@mui/material";

const links = [
  {
    name: "GitHub",
    at: "@jamesikjo",
    href: "https://www.github.com/jamesikjo",
  },
  { name: "Website", at: "https://jamesjo.dev", href: "https://jamesjo.dev" },
  {
    name: "LinkedIn",
    at: "https://www.linkedin.com",
    href: "https://www.linkedin.com",
  },
  {
    name: "Resume",
    at: "James Jo | Resume",
    href: "",
  },
];

const Links = () => {
  return (
    <>
      <Typography
        variant="h4"
        color="primary"
        fontWeight="700"
        sx={{ letterSpacing: "-.12rem" }}
      >
        Links
      </Typography>
      <Box component="ul" mb={0}>
        {links.map((link) => (
          <Box key={link.at} component="li">
            <Typography variant="subtitle1" color="primary">
              {link.name}:{" "}
              {
                <Typography
                  variant="subtitle1"
                  component="a"
                  href={link.href}
                  fontWeight="500"
                  sx={{ textDecoration: "none", color: "info.main" }}
                >
                  {link.at}
                </Typography>
              }
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Links;
