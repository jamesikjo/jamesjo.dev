import { Box, Typography, Button, useTheme } from "@mui/material";

interface ProjectProps {
  colors: { color1: string; color2: string };
  projectData: any;
}
const Project = ({ projectData, colors }: ProjectProps) => {
  const theme = useTheme();

  const { color1, color2 } = colors;

  const projectInfo = projectData[0]?.attributes;
  if (!projectInfo) return null;

  const { summary, title, links } = projectInfo;

  const verticalLineStyle = {
    "&::before": {
      content: '""',
      position: "absolute",
      left: -20,
      top: 5,
      bottom: 0,
      width: "2px",
      background: `linear-gradient(270deg, ${color1} 0%, ${color2} 100%)`,
    },
  };

  const lineStyle = {
    "&::before": {
      content: '""',
      height: "2px",
      width: "100%",
      opacity: 1,
      display: "inline-block",
      position: "absolute",
      bottom: "-3px",
      left: 0,
      right: 0,
      background: `linear-gradient(270deg, ${color1} 0%, ${color2} 100%)`,
    },
  };

  return (
    <>
      <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Box position="relative" sx={verticalLineStyle} ml={{ xs: 4, md: 2 }}>
        <Typography
          color="primary"
          sx={{
            mb: 2,
            fontSize: {
              xs: theme.typography.subtitle2.fontSize,
              md: theme.typography.subtitle1.fontSize,
            },
          }}
        >
          {summary}
        </Typography>

        {links.map(({ title, url }: { title: string; url: string }) => (
          <Button
            key={title}
            component="a"
            href={url}
            target="__blank"
            color="primary"
            sx={{
              pl: 0,
              textTransform: "none",
            }}
          >
            <Typography
              variant="body1"
              component="span"
              position="relative"
              display="inline-block"
              sx={lineStyle}
            >
              {title}
            </Typography>
          </Button>
        ))}
      </Box>
    </>
  );
};

export default Project;
