import React from "react";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CardLatest from "./CardList/CardList";

const Latest = () => {
  return (
    <Box component="section" id="featured">
      <Typography
        variant="body1"
        color="secondary"
        sx={{ letterSpacing: ".15rem" }}
      >
        {"projects".toUpperCase()}
      </Typography>
      <Typography
        variant="h4"
        component="h3"
        color="primary"
        fontWeight="700"
        mb={5}
        sx={{ letterSpacing: "-.10rem" }}
      >
        Latest
      </Typography>

      <CardLatest />

      <Box display="flex" justifyContent="flex-end" mt={5}>
        <Link href="/portfolio" passHref>
          <Button
            variant="text"
            color="primary"
            size="large"
            component="a"
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              "& .MuiButton-endIcon": { ml: 0 },
              ml: 1,
              p: 0,
            }}
          >
            See Portfolio
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Latest;
