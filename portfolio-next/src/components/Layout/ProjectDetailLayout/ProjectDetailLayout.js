import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Typography,
  Stack,
  Grid,
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
import getStrapiMedia from "../../../lib/media";
import ReactMarkdown from "react-markdown";

const ProjectDetailLayout = ({ singleProject }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const { title, stacks, summary, highlights, thumbnail, links, preview } =
    singleProject;
  console.log(links);
  return (
    <Container maxWidth="md">
      <BreadNavCrumbs
        prevTitle={"Portfolio"}
        prevHref={"/portfolio"}
        current={title}
      />
      <Box mb={8}>
        <Stack direction="row" alignItems="center" pb={2}>
          <Typography variant={"h4"} color="primary" fontWeight="700" pr={2}>
            {title}
          </Typography>

          <Link href={links[0].url} passHref>
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
          <Link href={links[1].url} passHref>
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
        <Typography
          variant="subtitle1"
          component="div"
          color="primary"
          className="markdown"
        >
          <ReactMarkdown children={summary} />
        </Typography>
      </Box>

      <Box mb={8}>
        <Typography variant="h6" color="primary" fontWeight="500" mb={2}>
          Project Highlights
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          color="primary"
          className="markdown"
        >
          <ReactMarkdown children={highlights} />
        </Typography>
      </Box>
      <Box mb={10}>
        <Typography variant="h6" color="primary" pb={2} fontWeight="500">
          Web Stack
        </Typography>
        <Grid container spacing={2}>
          {stacks.data.map(({ attributes: stack }) => (
            <Grid item xs={6} sm={4} key={stack.stack}>
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
                key={stack.stack}
              >
                <Avatar
                  src={getStrapiMedia(stack.icon)}
                  sx={{
                    width: { xs: 30, sm: 30 },
                    height: { xs: 30, sm: 30 },
                  }}
                  variant="square"
                />
                <Typography variant="body2" color="primary" ml={2}>
                  {stack.stack}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box mb={10}>
        <Typography variant="h6" color="primary" fontWeight="500" mb={2}>
          Links
        </Typography>
        {links.map((link) => (
          <React.Fragment key={link.title}>
            <Typography variant="body1" color="primary" gutterBottom>
              {link.title}:{" "}
              <Typography
                component="a"
                target="_blank"
                href={link.url}
                color="info.main"
                fontWeight="500"
              >
                {link.name}
              </Typography>
            </Typography>
          </React.Fragment>
        ))}
      </Box>
      <Box
        mb={5}
        // sx={{
        //   "& img": {
        //     border: "1px solid #c9cfd6 !important",
        //     borderRadius: "5px",
        //   },
        // }}
      >
        <Typography variant="h6" color="primary" mb={2} fontWeight="500">
          Site Preview
        </Typography>
        <Image
          src={getStrapiMedia(preview)}
          alt={title}
          width={preview.data.attributes.width}
          height={preview.data.attributes.height}
          priority
          quality={100}
        />
      </Box>

      <Box mb={10} display="flex" justifyContent="flex-end">
        <Link href="/portfolio" passHref>
          <Button
            variant="text"
            color="primary"
            component="a"
            size="large"
            startIcon={<KeyboardArrowLeftIcon />}
          >
            To Portfolio
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default ProjectDetailLayout;
