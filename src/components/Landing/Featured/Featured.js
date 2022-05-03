import React from "react";
import Link from "next/link";

import { Container, Box, Grid, Typography, Button } from "@material-ui/core";
import FeaturedCard from "./FeaturedCard";

const Featured = ({ featuredData }) => {
  return (
    <Box
      sx={{ pt: 5, pb: { xs: 15, sm: 20 } }}
      component="section"
      id="featured"
    >
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          color="secondary"
          mb={1}
          sx={{ letterSpacing: ".15rem" }}
        >
          {"projects".toUpperCase()}
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          fontWeight={700}
          mb={5}
          sx={{ letterSpacing: "-.12rem" }}
        >
          Featured
        </Typography>
      </Container>

      <Container sx={{ pb: { xs: 0, sm: 10 }, mb: { xs: 5, sm: 15 } }}>
        <Grid
          container
          rowSpacing={{ xs: 2, md: 30 }}
          sx={{ position: "relative" }}
        >
          {featuredData.map((f) => (
            <React.Fragment key={f.title}>
              <FeaturedCard featuredDetails={f} />
            </React.Fragment>
          ))}
        </Grid>
      </Container>
      <Box display="flex" justifyContent="center">
        <Link href="/portfolio" passHref>
          <Button
            variant="contained"
            color="primary"
            component="a"
            sx={{
              border: "none",
              boxShadow: "4px 4px 24px 2px rgb(0 0 0 / 30%)",
              fontWeight: "400",
              borderRadius: 1.5,
              fontSize: "0.85rem",
              py: { xs: 1, sm: 1.2 },
              px: 2.5,
            }}
          >
            See Portfolio
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Featured;
