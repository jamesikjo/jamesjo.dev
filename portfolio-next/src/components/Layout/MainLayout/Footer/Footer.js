import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Typography,
  Box,
  Container,
  Divider,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Copyright = () => {
  return (
    <Typography color="primary" align="center" sx={{ fontSize: 10, mt: 1 }}>
      Copyright © James Jo {new Date().getFullYear()}.
    </Typography>
  );
};

const Footer = ({ navLinks }) => {
  const theme = useTheme();
  return (
    <Box component="footer" sx={{ py: 6, mt: "auto" }} id="contact">
      <Container maxWidth="md">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box width={60} height={45} position="relative">
            <Image
              src="https://res.cloudinary.com/jjo/image/upload/v1651530311/Portfolio/Profile/JJ_f59a4z.svg"
              alt="footer logo"
              layout="fill"
              objectFit="contain"
            />
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
            sx={{
              "& .MuiButtonBase-root": {
                fontSize: { xs: 10, sm: 12 },
                fontWeight: "500",
              },
            }}
          >
            {navLinks.slice(0, 3).map(({ title, route }) => (
              <React.Fragment key={title}>
                <Link href={route} passHref>
                  <Button variant="text" component="a" color="primary">
                    {title}
                  </Button>
                </Link>
              </React.Fragment>
            ))}
          </Stack>
        </Box>
        <Divider flexItem sx={{ my: 0.5 }} />
        <Stack alignItems="flex-end">
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <WhatsappOutlinedIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
