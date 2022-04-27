import React from "react";
import {
  Avatar,
  Button,
  IconButton,
  Stack,
  Typography,
  Container,
  Box,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        py: 20,
      }}
    >
      <Container component="section" sx={{ maxWidth: { xs: "sm", lg: "lg" } }}>
        <Stack alignItems="center">
          <Typography
            variant="body1"
            color="secondary"
            mb={1}
            sx={{ letterSpacing: ".15rem" }}
          >
            {"Contact".toUpperCase()}
          </Typography>
          <Typography
            variant="h3"
            color="primary"
            fontWeight={700}
            gutterBottom
            sx={{ letterSpacing: "-.12rem" }}
          >
            {"Get in touch"}
          </Typography>
        </Stack>
        <Stack alignItems="center" mb={2}>
          <Typography
            variant="subtitle1"
            color="secondary"
            gutterBottom
            align="center"
          >
            Feel free to reach out if {"you're"} looking for a developer,
            <br />
            have a question, or just want to connect.
          </Typography>

          <Button
            variant="text"
            color="inherit"
            size="large"
            sx={{ textDecoration: "underline", pl: 0 }}
            startIcon={<MailOutlineIcon />}
          >
            jamesjodev@gmail.com
          </Button>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={{ xs: 1, sm: 2 }}
        >
          <IconButton>
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
          <IconButton>
            <Avatar
              src="https://res.cloudinary.com/jjo/image/upload/v1649368416/Portfolio/Profile/Raiders_fubors.svg"
              sx={{ width: 36, height: 36 }}
              variant="square"
            />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
