import React from "react";
import Link from "next/link";
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
} from "@mui/material";
import projectData from "../../lib/projectData";

const ProjectList = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box>
      <Box>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ "& nav": { paddingLeft: 0 }, pb: 1 }}
        >
          <Link href="/" passHref>
            <Typography
              variant="body1"
              component="a"
              color="secondary"
              sx={{ textDecoration: "none" }}
            >
              Home
            </Typography>
          </Link>
          <Link href="/portfolio" passHref>
            <Typography variant="h6" color="text.primary">
              Portfolio
            </Typography>
          </Link>
        </Breadcrumbs>
        <Divider />
      </Box>
      <Stack my={5}>
        <Typography
          variant="body1"
          color="secondary"
          sx={{ letterSpacing: ".15rem" }}
        >
          {"Portfolio".toUpperCase()}
        </Typography>

        <Typography
          variant="h3"
          color="primary"
          fontWeight={700}
          sx={{ letterSpacing: "-.12rem" }}
        >
          Projects
        </Typography>
      </Stack>
      <Grid container columnSpacing={3} rowSpacing={8}>
        {projectData.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={"a"}
              href={`/portfolio/${item.slug}`}
              display={"block"}
              width={1}
              height={1}
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
                height={500}
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
                    overflow: "hidden",
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
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectList;
