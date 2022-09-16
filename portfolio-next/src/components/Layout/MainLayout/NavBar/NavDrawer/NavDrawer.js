import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
        PaperProps={{
          sx: {
            bgcolor: "#F9FAFB",
          },
        }}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <Box width={200}>
          <List sx={{ py: 2 }}>
            {navLinks.map(({ title, route }) => (
              <ListItem key={title} sx={{ textAlign: "center", py: 1.5 }}>
                <Link href={route} passHref>
                  <Typography
                    component="a"
                    variant="body1"
                    color="primary"
                    onClick={handleDrawerClose}
                    sx={{ width: 1 }}
                  >
                    {title}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ mb: 2 }} />
          <Box display="flex" justifyContent="center">
            <Box width={50} height={45} position="relative">
              <Image
                src="https://res.cloudinary.com/jjo/image/upload/v1651530311/Portfolio/Profile/JJ_f59a4z.svg"
                alt="Nav drawer logo"
                layout="fill"
              />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavDrawer;
