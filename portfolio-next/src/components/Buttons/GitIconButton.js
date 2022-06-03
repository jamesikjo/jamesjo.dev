import Link from "next/link";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const GitIconButton = ({ color, size, href }) => {
  return (
    <>
      <Link href={href} passHref>
        <IconButton
          color={color}
          component="a"
          rel="noopener noreferrer"
          target="_blank"
          sx={{ p: "5px" }}
        >
          <GitHubIcon fontSize={size} />
        </IconButton>
      </Link>
    </>
  );
};

export default GitIconButton;
