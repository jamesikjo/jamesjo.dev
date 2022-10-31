import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

interface ButtonProps {
  variant?: "text";
  color?: "primary";
  size?: "medium";
  href: Href;
}

type Href = string | undefined;

const GitHubButton = ({
  size = "medium",
  variant = "text",
  color = "primary",
  href,
}: ButtonProps) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  if (!href) return null;

  return (
    <>
      {isSm ? (
        <Button
          variant={variant}
          component="a"
          color={color}
          size={size}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          startIcon={<GitHubIcon />}
          sx={{
            "& .MuiButton-startIcon": { mr: 0.5 },
          }}
        >
          GitHub
        </Button>
      ) : (
        <IconButton
          component="a"
          color={color}
          size={size}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      )}
    </>
  );
};

export default GitHubButton;
