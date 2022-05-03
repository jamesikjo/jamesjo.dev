import React from "react";
import {
  Grid,
  Typography,
  Container,
  Divider,
  Box,
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { AboutMeButton } from "../../Buttons";

const Intro = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container direction="column" alignItems="flex-start">
          <Grid item xs={12}>
            <Typography
              variant={matches ? "h3" : "h4"}
              color="text.secondary"
              sx={{ letterSpacing: "-.10rem", mb: 1 }}
            >
              James Jo,
            </Typography>
            <Typography
              variant={matches ? "h3" : "h4"}
              color="primary"
              fontWeight={300}
              sx={{ letterSpacing: "-.10rem" }}
            >
              Front-end / UI Developer
            </Typography>
          </Grid>

          <Divider
            sx={{
              margin: "0.5em 0em",
              width: "2em",
              my: 3,
            }}
          />
          <Grid item xs={12} mb={1}>
            <Typography
              variant="subtitle1"
              color="secondary"
              fontWeight={600}
              sx={{ pr: { xs: 0, md: 70 }, lineHeight: "1.8em" }}
              mb={2}
            >
              Based in Oakland, California.
            </Typography>
            <Typography
              variant={matches ? "subtitle1" : "subtitle2"}
              color="primary"
              fontWeight="400"
              sx={{ pr: { xs: 0, md: 70 }, lineHeight: "1.8em" }}
            >
              I focus primarily on developing web applications using modern
              software libraries and frameworks such as React/Next.js and MUI.
              Take a look at my about page to learn a bit more about me and my
              journey to becoming a self-taught developer. My motivation and
              passion for development have brought me to where I am today.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ my: matches ? 4 : 2 }} xs={12}>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2 }}
            alignItems="center"
            mb={3}
          >
            <AboutMeButton variant="outlined" size="small" color="primary" />
            <Divider orientation="vertical" flexItem sx={{ pl: 0.5 }} />

            <IconButton sx={{ pl: 0 }}>
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <WhatsappOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Grid>
        <Box
          position="absolute"
          sx={{ top: "95%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          {/* <Box
          component="img"
          src="/images/scroll-down.gif"
          width={matches ? 30 : 25}
          sx={{ opacity: 0.8 }}
        /> */}
          <KeyboardDoubleArrowDownIcon
            color="secondary"
            fontSize={matches ? "large" : "medium"}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Intro;
