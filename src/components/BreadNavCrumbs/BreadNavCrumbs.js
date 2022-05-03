import React from "react";
import Link from "next/link";
import {
  Breadcrumbs,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const BreadNavCrumbs = ({ prevTitle, prevHref, current }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ "& nav": { paddingLeft: 0 }, pb: 1 }}
    >
      <Link href="/" passHref>
        <Typography
          variant={isSm ? "body1" : "body2"}
          component="a"
          color="secondary"
          sx={{ textDecoration: "none" }}
        >
          Home
        </Typography>
      </Link>
      {prevTitle && (
        <Link href={`${prevHref}`} passHref>
          <Typography
            variant={isSm ? "body1" : "body2"}
            component="a"
            color="secondary"
            sx={{ textDecoration: "none" }}
          >
            {prevTitle}
          </Typography>
        </Link>
      )}

      <Typography color="text.primary" variant={isSm ? "h6" : "body1"}>
        {current}
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadNavCrumbs;
