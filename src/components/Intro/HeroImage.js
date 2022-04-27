import React from "react";
import Image from "next/image";
import { Box, styled } from "@material-ui/core";

const HeroImg = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  width: 400,
  height: 400,
  margin: "-300px auto 0",
  [theme.breakpoints.down("md")]: {
    width: 300,
    height: 300,
    margin: "-200px auto 0",
  },
  borderRadius: "50%",
  backgroundImage: `url(${"https://images03.nicepage.com/c461c07a441a5d220e8feb1a/fe55cfc2fc985c689d63436c/ewrrr-min.jpg"})`,
  backgroundSize: "cover",
  border: "8px solid white",
}));

const HeroImage = () => {
  return (
    <Box sx={{ height: { xs: "45vh", lg: "40vh" } }}>
      <Box
        sx={{
          height: { xs: "75%", lg: "80%" },
          bgcolor: "primary.light",
        }}
      />
      <HeroImg />
    </Box>
  );
};

export default HeroImage;
