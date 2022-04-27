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
} from "@material-ui/core";

const Copyright = () => {
  return (
    <Typography color="primary" align="center" sx={{ fontSize: 10, mt: 1 }}>
      Copyright © James Jo {new Date().getFullYear()}.
    </Typography>
  );
};

const Footer = ({ navLinks }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      component="footer"
      sx={{ py: 6, mt: "auto", bgcolor: "#EDEDED" }}
      id="contact"
    >
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Image
              src="/images/main-logo.svg"
              alt="footer logo"
              width={60}
              height={45}
            />
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
            height={35}
            sx={{
              "& .MuiButtonBase-root": {
                fontSize: 12,
                fontWeight: "bolder",
              },
            }}
          >
            {navLinks.map(({ title, route }) => (
              <React.Fragment key={title}>
                <Link href={route} passHref>
                  <Button
                    variant="text"
                    component="a"
                    color="secondary"
                    sx={{ fontWeight: 600 }}
                  >
                    {title}
                  </Button>
                </Link>
              </React.Fragment>
            ))}
          </Stack>
        </Box>
        <Divider flexItem sx={{ my: 0.5 }} />
        <Stack alignItems="flex-end">
          <Copyright />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
