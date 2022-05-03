import React from "react";
import { Typography, Stack, Box, Avatar, Grid } from "@mui/material";

const Bio = () => {
  return (
    <>
      <Stack mb={4}>
        <Typography
          variant="body1"
          color="secondary"
          sx={{ letterSpacing: ".15rem" }}
        >
          {"About Me".toUpperCase()}
        </Typography>

        <Typography
          variant="h3"
          color="primary"
          fontWeight={700}
          sx={{ letterSpacing: "-.12rem" }}
        >
          Bio
        </Typography>
      </Stack>
      <Grid container columnSpacing={5} alignItems="center">
        <Grid item xs={12} md={8} mb={{ xs: 5 }}>
          <Typography
            variant="subtitle1"
            color="secondary"
            mb={1}
            sx={{ fontSize: { xs: "1em", md: "1.15em" } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            placerat orci nulla pellentesque dignissim enim sit amet.
            Sollicitudin tempor id eu nisl nunc mi ipsum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut placerat orci nulla
            pellentesque dignissim enim sit amet. Sollicitudin tempor id eu nisl
            nunc mi ipsum.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} align="center">
          <Box
            sx={{
              maxWidth: 225,
              maxHeight: 225,
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://res.cloudinary.com/jjo/image/upload/v1651530508/Portfolio/Profile/headshot-2_iudufa.png"
              sx={{
                width: { xs: 1, sm: 1 },
                height: { xs: 1, sm: 1 },
                // border: "1px solid #EDEDED",
                transform: "scale(1.2)",
                boxShadow: "4px 0px 10px 5px rgb(0 0 0 / 15%)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Bio;
