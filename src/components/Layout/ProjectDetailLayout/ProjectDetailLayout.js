import React from "react";
import Link from "next/link";
import {
  Container,
  Typography,
  Stack,
  Grid,
  Chip,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Avatar,
  Tooltip,
  Button,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import BreadNavCrumbs from "../../BreadNavCrumbs";
import Image from "next/image";

const ProjectDetailLayout = ({ projectDetails }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  const {
    title,
    stacks,
    type,
    overview,
    highlights,
    projectLink,
    githubLink,
    preview,
  } = projectDetails;
  return (
    <Container maxWidth="md">
      <BreadNavCrumbs
        prevTitle={"Portfolio"}
        prevHref={"/portfolio"}
        current={title}
      />

      <Box mb={8}>
        <Stack direction="row" alignItems="center" pb={3}>
          <Typography
            variant={isSm ? "h3" : "h4"}
            color="primary"
            fontWeight="700"
            pr={2}
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
                  sx={{ p: 0 }}
                >
                  <GitHubIcon sx={{ fontSize: "1.8rem" }} />
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
                  <OpenInNewIcon sx={{ fontSize: "1.8rem" }} />
                </IconButton>
              </Tooltip>
            </Link>
          </Stack>
        </Stack>

        <Typography variant="subtitle1" color="secondary">
          {overview}
        </Typography>
      </Box>
      <Box mb={10}>
        <Typography variant="h5" color="primary" fontWeight="500" mb={2}>
          Project Highlights
        </Typography>
        <Box component="ul">
          {highlights.map((item) => (
            <>
              <Typography variant="subtitle1" color="secondary" component="li">
                {item}
              </Typography>
            </>
          ))}
        </Box>
      </Box>
      <Box mb={10}>
        <Typography variant="h5" color="primary" pb={2} fontWeight="500">
          Web Stack
        </Typography>
        <Grid container spacing={2}>
          {stacks.map((stack) => (
            <Grid item xs={6} md={4} key={stack.name}>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  border: `0.5px solid #c9cfd6`,
                  borderRadius: 1,
                  bgcolor: "background.paper",
                  px: 2.5,
                  py: 1,
                  width: 1,
                }}
                key={stack.name}
              >
                <Avatar
                  src={stack.icon}
                  sx={{
                    width: { xs: 30, sm: 30 },
                    height: { xs: 30, sm: 30 },
                  }}
                  variant="square"
                />
                <Typography variant="body1" ml={2} fontWeight="400">
                  {stack.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mb={5}>
        <Typography variant="h5" color="primary" mb={2} fontWeight="500">
          Preview
        </Typography>
        <Image
          src={preview.image}
          alt={title}
          width={preview.width}
          height={preview.height}
          loading="eager"
        />
      </Box>

      <Box mb={10} display="flex" justifyContent="flex-end">
        <Link href="/portfolio" passHref>
          <Button
            variant="text"
            color="primary"
            component="a"
            startIcon={<KeyboardArrowLeftIcon />}
          >
            Back to Portfolio
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default ProjectDetailLayout;
