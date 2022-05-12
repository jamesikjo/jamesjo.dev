import React from "react";
import Link from "next/link";
import {
  Breadcrumbs,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
  Divider,
} from "@mui/material";

const BreadNavCrumbs = ({ prevTitle, prevHref, current }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box mb={5}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ "& nav": { paddingLeft: 0 }, pb: 1 }}
      >
        <Link href="/" passHref>
          <Typography
            variant="body2"
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
              variant="body2"
              component="a"
              color="secondary"
              sx={{ textDecoration: "none" }}
            >
              {prevTitle}
            </Typography>
          </Link>
        )}

        <Typography color="primary" variant="body1" fontWeight="500">
          {current}
        </Typography>
      </Breadcrumbs>
      <Divider />
    </Box>
  );
};

export default BreadNavCrumbs;
