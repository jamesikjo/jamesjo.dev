import { useRouter } from "next/router";
import { Button, Stack, Typography, Box, useMediaQuery } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useTheme } from "@emotion/react";

const Contact = ({ contact }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const router = useRouter();

  const { description, email } = contact;

  const highLight = router.asPath === "/#contact";

  return (
    <Box component="section">
      <Stack
        alignItems={{ xs: "center", sm: "flex-start" }}
        sx={{ textAlign: { xs: "center", sm: "left" } }}
        mb={1}
      >
        <Typography
          variant="body1"
          color="secondary"
          sx={{ letterSpacing: ".15rem" }}
        >
          {"Contact".toUpperCase()}
        </Typography>
        <Typography
          variant="h4"
          color={highLight ? "info.dark" : "primary"}
          fontWeight="600"
          gutterBottom
          sx={{ letterSpacing: "-.10rem" }}
        >
          {"Get in touch"}
        </Typography>
        <Typography
          variant={isSm ? "subtitle1" : "subtitle2"}
          component="div"
          color="secondary"
          gutterBottom
          fontWeight="400"
          className="markdown"
        >
          <ReactMarkdown children={description} />
        </Typography>

        <Typography
          component="a"
          href="mailto:jamesjodev@gmail.com"
          color="info.main"
          variant="subtitle1"
          fontWeight="500"
          sx={{
            textDecoration: "underline",
          }}
          // startIcon={<MailOutlineIcon />}
        >
          {email}
        </Typography>
      </Stack>
      {/* <Stack
        direction="row"
        justifyContent={{ xs: "center", sm: "flex-start" }}
        // justifyContent="center"
        spacing={3}
      >
        <IconButton sx={{ p: 0 }}>
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton sx={{ p: 0 }}>
          <WhatsappOutlinedIcon fontSize="large" />
        </IconButton>
        <IconButton sx={{ p: 0 }}>
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton sx={{ p: 0 }}>
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton sx={{ p: 0 }}>
          <Avatar
            src="https://res.cloudinary.com/jjo/image/upload/v1649368416/Portfolio/Profile/Raiders_fubors.svg"
            sx={{ width: 36, height: 36 }}
            variant="square"
          />
        </IconButton>
      </Stack> */}
    </Box>
  );
};

export default Contact;
