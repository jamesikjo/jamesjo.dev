import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Avatar,
} from "@mui/material";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { AboutMeButton } from "../../Buttons";

const Intro = ({ profession, intro }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box component="section">
      <Box display="flex" flexDirection={{ xs: "column-reverse", sm: "row" }}>
        <Box pr={{ xs: 5, sm: 10 }}>
          <Typography
            variant={isSm ? "h3" : "h4"}
            component="h1"
            color="primary"
            fontWeight="600"
            mb={1}
            sx={{ letterSpacing: "-.10rem" }}
          >
            James Jo,
          </Typography>
          <Typography
            variant={isSm ? "h5" : "h6"}
            component="h2"
            color="secondary"
            fontWeight="400"
            mb={2}
            sx={{ letterSpacing: "-.05rem" }}
          >
            {profession}
          </Typography>

          <Typography
            variant={isSm ? "subtitle1" : "subtitle2"}
            color="primary"
            fontWeight="400"
            sx={{
              lineHeight: "1.8em",
              "& a": {
                color: "info.main",
                fontWeight: "600",
              },
            }}
          >
            {intro}
          </Typography>
        </Box>
        <Box
          minWidth={150}
          width={{ xs: 120, sm: 150 }}
          height={{ xs: 120, sm: 150 }}
          mb={{ xs: 2, sm: 0 }}
          position="relative"
        >
          <Image
            alt="headshot"
            src="https://res.cloudinary.com/jjo/image/upload/v1651530508/Portfolio/Profile/headshot-2_iudufa.png"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        {/* <Stack
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
        </Stack> */}
      </Box>
    </Box>
  );
};

export default Intro;
