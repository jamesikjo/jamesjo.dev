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

const Contact = ({ contact }) => {
  const { description, email } = contact;
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
          color="primary"
          fontWeight="600"
          gutterBottom
          sx={{ letterSpacing: "-.10rem" }}
        >
          {"Get in touch"}
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          {description}
        </Typography>

        <Button
          variant="text"
          size="large"
          color="info"
          sx={{
            pl: 0,
            textDecoration: "underline",
          }}
          // startIcon={<MailOutlineIcon />}
        >
          {email}
        </Button>
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
