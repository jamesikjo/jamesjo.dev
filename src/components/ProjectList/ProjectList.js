import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Stack,
  Grid,
  Typography,
  Box,
  Chip,
  useTheme,
  Breadcrumbs,
  Divider,
  useMediaQuery,
  Button,
} from "@mui/material";
import projectData from "../../lib/projectData";
import BreadNavCrumbs from "../BreadNavCrumbs";

const ProjectList = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

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
              <Box
                component={"a"}
                href={`/portfolio/${item.slug}`}
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
                    // px: 1.5,
                    bgcolor: "info.dark",
                    "&: hover": { bgcolor: "info.light" },
                  }}
                >
                  Project Page
                </Button>
              </Box>
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
            {/* <Box
              component={"a"}
              href={`/portfolio/${item.slug}`}
              sx={{
                textDecoration: "none",
                transition: "all .2s ease-in-out",
                "&:hover": {
                  transform:
                    matches && `translateY(-${theme.spacing(1)}) scale(1.03)`,
                },
              }}
            >
              <Box
                width={1}
                height={1}
                sx={{
                  bgcolor: "#F7F9FC",
                  border: "5px solid #F7F9FC",
                  overflow: "hidden",
                  borderRadius: 2,
                  boxShadow: "4px 4px 24px 2px rgb(0 0 0 / 15%)",
                }}
              >
                <Box
                  component="img"
                  src={item.cover}
                  alt={item.title}
                  width={1}
                  sx={{
                    position: "relative",
                    height: "auto",
                  }}
                />
              </Box>

              <Box
                width="90%"
                margin="0 auto"
                display="flex"
                flexDirection="column"
                bgcolor="background.paper"
                position="relative"
                zIndex={3}
                sx={{
                  transform: "translateY(-50px)",
                  borderRadius: 2,
                  p: 2,
                  boxShadow: "4px 4px 24px 2px rgb(0 0 0 / 15%)",
                }}
              >
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    variant="body1"
                    gutterBottom
                    color="primary"
                    fontWeight="600"
                  >
                    {item.title}
                  </Typography>
                  <Chip
                    label={item.category}
                    size="small"
                    sx={{
                      "& .MuiChip-label": { overflow: "visible" },
                      fontSize: "12px",
                      bgcolor: item.chipColor,
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Box> */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectList;
