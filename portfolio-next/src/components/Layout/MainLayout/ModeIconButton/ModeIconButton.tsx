import React, { useContext } from "react";
import { IconButton, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "../../../../../pages/_app";

const ModeIconButton = () => {
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);

  return (
    <>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </>
  );
};

export default ModeIconButton;
