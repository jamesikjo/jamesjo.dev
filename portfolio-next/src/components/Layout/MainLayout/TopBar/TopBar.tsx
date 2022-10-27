import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Container, Button, Stack, Box } from "@mui/material";
import NavSideBar from "./NavSideBar";

interface TopBarProps {
  navLinks: { title: string; path: string }[];
}

const TopBar = ({ navLinks }: TopBarProps) => {
  const router = useRouter();

  const activeLinkStyles = (path: string) => {
    if (router.pathname.includes(path)) {
      return {
        textTransform: "capitalize",
        fontWeight: "600",
        color: "info.main",
      } as const;
    }
    return { textTransform: "capitalize", fontWeight: "400" } as const;
  };

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
        maxWidth={false}
        sx={{
          maxWidth: 800,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" passHref>
          <Box component="a" width={80} height={50} position="relative">
            <Image
              src="https://res.cloudinary.com/jjo/image/upload/v1651530311/Portfolio/Profile/JJ_f59a4z.svg"
              alt="James Jo"
              layout="fill"
            />
          </Box>
        </Link>
        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          {navLinks.map(({ title, path }) => (
            <React.Fragment key={title}>
              <Link href={path} passHref>
                <Button
                  variant="text"
                  component="a"
                  color="primary"
                  size="large"
                  disableRipple
                  sx={activeLinkStyles(path)}
                >
                  {title}
                </Button>
              </Link>
            </React.Fragment>
          ))}
        </Stack>
        <NavSideBar navLinks={navLinks} />
      </Container>
    </AppBar>
  );
};

export default TopBar;
