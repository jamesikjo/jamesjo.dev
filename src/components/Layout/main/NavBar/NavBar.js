import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import NavDrawer from "./NavDrawer/NavDrawer";

const NavBar = ({ navLinks }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 35,
  });

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: trigger ? "#fff" : "transparent",
        transition: "all ease .85s",
        // borderBottom: "1px solid #ece7e0 ",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
        }}
      >
        <Link href="/">
          <a>
            <Image
              src="https://res.cloudinary.com/jjo/image/upload/v1651530311/Portfolio/Profile/JJ_f59a4z.svg"
              alt="James Jo"
              width={80}
              height={matches ? 55 : 40}
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
                <Button
                  variant="text"
                  component="a"
                  sx={{ "&:hover": { fontWeight: "bold" } }}
                >
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
