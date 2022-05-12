import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Container,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import NavDrawer from "./NavDrawer/NavDrawer";

const NavBar = ({ navLinks }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        pt: 4,
        pb: 5,
        bgcolor: "transparent",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <a>
            <Image
              src="https://res.cloudinary.com/jjo/image/upload/v1651530311/Portfolio/Profile/JJ_f59a4z.svg"
              alt="James Jo"
              width={80}
              height={isSm ? 50 : 45}
            />
          </a>
        </Link>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          {navLinks.map(({ title, route }) => (
            <React.Fragment key={title}>
              <Link href={route} passHref>
                <Button variant="text" component="a">
                  {title}
                </Button>
              </Link>
            </React.Fragment>
          ))}
        </Stack>
        <NavDrawer navLinks={navLinks} />
      </Container>
    </AppBar>
  );
};

export default NavBar;
