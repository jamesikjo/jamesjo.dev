import { Box, Typography, Stack, Button } from "@mui/material";
import LinkPreview from "./LinkPreview/";
import { Project } from "../../types/strapi/Project";

interface ProjectsProps {
  colors: { color1: string; color2: string };
  setSelectedProject: any;
  projectData: Project[];
}
const Projects = ({
  colors,
  setSelectedProject,
  projectData,
}: ProjectsProps) => {
  const { color1, color2 } = colors;

  const borderLineStyle = {
    "&::before": {
      content: '""',
      position: "absolute",
      borderTopLeftRadius: "8px",
      left: -2,
      top: -2,
      bottom: 0,
      width: "90px",
      background: `linear-gradient(135deg, ${color1} 0%, ${color2} 50%, ${color1} 100%)`,
      height: "90px",
    },
  };
  const underLineStyle = {
    "&:hover": {
      letterSpacing: "1px",
      transition: "all .3s ease-in-out",
    },
    "&::before": {
      content: '""',
      height: "1.5px",
      width: "100%",
      opacity: 1,
      transition: "all .3s ease-in-out",
      display: "inline-block",
      position: "absolute",
      bottom: "-3px",
      left: 0,
      right: 0,
      background: `linear-gradient(270deg, ${color1} 0%, ${color2} 100%)`,
    },
  };

  return (
    <Box>
      <Typography variant="h4" color="primary" mb={4}>
        Projects
      </Typography>
      <Box position="relative" sx={borderLineStyle}>
        <Stack
          direction="column"
          spacing={2.5}
          position="relative"
          sx={{
            background: "#1D1D20",
            borderTopLeftRadius: "8px",
            padding: "30px 30px 0px 30px",
          }}
        >
          {projectData.map((project) => (
            <LinkPreview
              url={project.attributes.thumbnail}
              key={project.attributes.title}
            >
              <Button
                size="small"
                onClick={() => setSelectedProject(project.attributes.title)}
                sx={{ textTransform: "none" }}
              >
                <Typography
                  variant="body2"
                  component="span"
                  color="primary"
                  position="relative"
                  display="inline-block"
                  sx={underLineStyle}
                >
                  {project.attributes.title}
                </Typography>
              </Button>
            </LinkPreview>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Projects;
