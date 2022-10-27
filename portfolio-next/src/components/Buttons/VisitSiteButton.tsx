import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface ButtonProps {
  variant?: "text";
  color?: "primary";
  size?: "medium";
  href: string;
}

const VisitSiteButton = ({
  variant = "text",
  color = "primary",
  size = "medium",
  href,
}: ButtonProps) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
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
          startIcon={<OpenInNewIcon />}
          sx={{
            "& .MuiButton-startIcon": { mr: 0.5 },
          }}
        >
          Visit
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
          <OpenInNewIcon />
        </IconButton>
      )}
    </>
  );
};

export default VisitSiteButton;
