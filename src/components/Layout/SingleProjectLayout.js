import React from "react";
import Link from "next/link";
import {
  Container,
  Typography,
  Divider,
  Stack,
  Grid,
  Chip,
  Box,
  Breadcrumbs,
  useTheme,
  useMediaQuery,
  IconButton,
  Avatar,
  Tooltip,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const SingleProjectLayout = ({ projectDetails }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const {
    title,
    description,
    stacks,
    type,
    purpose,
    projectLink,
    githubLink,
    cover,
    screenShots,
    projectOverview,
  } = projectDetails;
  return (
    <Container maxWidth="lg" sx={{ pt: matches ? 15 : 10 }}>
      <Box mb={5}>
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
            <Typography
              variant="body1"
              component="a"
              color="secondary"
              sx={{ textDecoration: "none" }}
            >
              Projects
            </Typography>
          </Link>
          <Typography color="text.primary" variant="h6">
            {title}
          </Typography>
        </Breadcrumbs>
        <Divider />
      </Box>

      <Box mb={1.5} display="flex" alignItems="center">
        <Typography
          variant={matches ? "h2" : "h4"}
          color="primary"
          fontWeight="bold"
          mr={2}
        >
          {title}
        </Typography>
        <Stack direction="row" alignItems="center">
          <Link href={githubLink} passHref>
            <Tooltip
              title={<Typography variant="body2">View Repository</Typography>}
              arrow
            >
              <IconButton
                color="secondary"
                component="a"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHubIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Tooltip>
          </Link>
          <Link href={projectLink} passHref>
            <Tooltip
              title={<Typography variant="body2">View Site</Typography>}
              arrow
            >
              <IconButton
                color="secondary"
                component="a"
                rel="noopener noreferrer"
                target="_blank"
              >
                <OpenInNewIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Tooltip>
          </Link>
        </Stack>
      </Box>

      <Box mb={{ xs: 8, sm: 10 }}>
        <Stack direction="row" spacing={1} mb={6}>
          <Chip
            label="Web Development"
            size={matches ? "small" : "small"}
            sx={{
              "& .MuiChip-label": { overflow: "visible", fontSize: "0.85em" },
            }}
          />
          <Chip
            label="Web Design"
            size={matches ? "small" : "small"}
            sx={{
              "& .MuiChip-label": { overflow: "visible", fontSize: "0.85em" },
            }}
          />
          <Chip
            label={type}
            size={matches ? "small" : "small"}
            color="info"
            sx={{
              "& .MuiChip-label": { overflow: "visible", fontSize: "0.85em" },
            }}
          />
        </Stack>
        <Box maxWidth={850}>
          <Typography
            variant="subtitle1"
            color="secondary"
            sx={{ fontSize: { xs: "0.95em", sm: "1.05em" } }}
          >
            {projectOverview}
          </Typography>
        </Box>
      </Box>
      {screenShots[0] !== "" && (
        <Box sx={{ mb: { xs: 10, sm: 25 } }}>
          <Box
            component="img"
            src={screenShots[0]}
            alt={title}
            width={1}
            sx={{
              borderRadius: 2,
              boxShadow: "4px 4px 15px 5px rgb(0 0 0 / 15%)",
            }}
          />
        </Box>
      )}

      <Grid container spacing={10} mb={{ xs: 10, sm: 20 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" color="primary" mb={3}>
            Project Process and Goal
          </Typography>
          <Typography
            variant="subtitle1"
            color="secondary"
            // sx={{ fontSize: "1.05em" }}
            sx={{ fontSize: { xs: "0.95em", sm: "1.05em" } }}
            mb={2}
          >
            {projectOverview}
          </Typography>
          <Typography
            variant="subtitle1"
            color="secondary"
            sx={{ fontSize: { xs: "0.95em", sm: "1.05em" } }}
          >
            {purpose}
          </Typography>
        </Grid>
        <Grid item container xs={12} md={4} spacing={3} mb={3}>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Web Stack
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2}>
              {stacks.map((stack) => (
                <>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{
                      border: "none",
                      boxShadow: "2px 4px 4px 4px rgb(0 0 0 / 10%)",
                      fontWeight: "500",
                      borderRadius: 2,
                      fontSize: "0.8rem",
                      bgcolor: "background.paper",
                      px: 2.5,
                      py: 1,
                      width: { xs: 240, sm: 300 },
                    }}
                    key={stack.name}
                  >
                    <Avatar
                      src={stack.icon}
                      sx={{
                        width: { xs: 30, sm: 40 },
                        height: { xs: 30, sm: 40 },
                      }}
                      variant="square"
                    />
                    <Typography variant="body1" ml={2} fontWeight="400">
                      {stack.name}
                    </Typography>
                  </Box>
                </>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Box mb={15}>
        <Box
          component="img"
          src={screenShots[1]}
          alt={title}
          width={1}
          sx={{
            borderRadius: 2,
            boxShadow:
              title === !"PowerTek" ||
              (!"Kush Bowl" && "4px 4px 24px 2px rgb(0 0 0 / 15%)"),
          }}
        />
      </Box>

      {/* <Divider sx={{ mt: 3, mb: 10 }} /> */}

      <Box maxWidth={850} mb={6}>
        <Typography variant="h5" color="primary" fontWeight="400" mb={3}>
          Take Aways
        </Typography>
        <Typography
          variant="subtitle1"
          color="secondary"
          sx={{ fontSize: { xs: "0.95em", sm: "1.05em" } }}
        >
          {projectOverview}
        </Typography>
      </Box>
      <Box mb={20}>
        <Link href="/portfolio" passHref>
          <Button
            variant="contained"
            color="primary"
            component="a"
            sx={{
              border: "none",
              boxShadow: "4px 4px 24px 2px rgb(0 0 0 / 20%)",
              fontWeight: "400",
              borderRadius: 1.5,
              fontSize: "0.8rem",
              py: { xs: 1, sm: 1 },
              // px: 2,
            }}
          >
            More Projects
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default SingleProjectLayout;
