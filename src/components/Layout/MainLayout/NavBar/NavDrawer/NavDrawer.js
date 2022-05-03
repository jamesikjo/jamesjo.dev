import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";

import {
  Dialog,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

const NavDrawer = ({ navLinks }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }} alignItems={"center"}>
        <IconButton aria-label="open drawer" onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <Box sx={{ width: 200 }}>
          <List>
            {navLinks.map(({ title, route }) => (
              <ListItem button key={title}>
                <Link href={route} passHref>
                  <ListItemText
                    primary={title}
                    component="a"
                    primaryTypographyProps={{
                      align: "center",
                      variant: "body1",
                      fontWeight: 500,
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ mb: 2 }} />
          <Box display="flex" justifyContent="center">
            <Image
              src="/images/main-logo.svg"
              alt="James Jo"
              width={55}
              height={45}
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavDrawer;
