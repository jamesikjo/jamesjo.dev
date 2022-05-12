import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid, Typography, Box, Button } from "@mui/material";
import BreadNavCrumbs from "../BreadNavCrumbs";

const ProjectList = ({ projectData }) => {
  return (
    <Box>
      <Box mb={3}>
        <BreadNavCrumbs current="Portfolio" />
      </Box>
      <Typography
        variant="h4"
        color="primary"
        fontWeight={700}
        mb={3}
        sx={{ letterSpacing: "-.10rem" }}
      >
        Projects
      </Typography>
      <Grid container rowSpacing={6} columnSpacing={4}>
        {projectData.map((item, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box
              position="relative"
              sx={{
                "&: hover": {
                  "& button": {
                    opacity: 1,
                    transition: "opacity 0.65s ease-in-out",
                  },
                },
              }}
            >
              <Link href={`/portfolio/${item.slug}`} alt={item.title} passHref>
                <Box
                  component="a"
                  sx={{
                    "& img": {
                      borderRadius: 1,
                      border: `0.5px solid #c9cfd6 !important`,
                    },
                  }}
                >
                  <Image
                    src={item.cover}
                    alt={item.title}
                    width={520}
                    height={285}
                  />
                </Box>
              </Link>
              <Link href={`/portfolio/${item.slug}`} alt={item.title} passHref>
                <Box
                  component={"a"}
                  href={`/portfolio/${item.slug}`}
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    right: 15,
                    textDecoration: "none",
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      opacity: 0,
                      px: 1,
                      bgcolor: "info.dark",
                      "&: hover": { bgcolor: "info.light" },
                    }}
                  >
                    Project Page
                  </Button>
                </Box>
              </Link>
            </Box>

            <Typography
              variant="subtitle1"
              color="primary"
              fontWeight="600"
              mt={1}
            >
              {item.title}
            </Typography>
            <Typography variant="body2" color="secondary">
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectList;
