import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "next-themes";

const ColorModeButton = () => {
  // const theme = useTheme();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const setColorMode = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <IconButton onClick={setColorMode}>
        {resolvedTheme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </>
  );
};

export default ColorModeButton;
