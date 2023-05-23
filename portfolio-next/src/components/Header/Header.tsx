import { Box, IconButton, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ReplyIcon from "@mui/icons-material/Reply";

interface HeaderProps {
  selectedProject: null | string;
  setSelectedProject: React.Dispatch<React.SetStateAction<null>>;
}

const EMAIL = process.env.EMAIL;
const GITHUB = process.env.GITHUB;
const LINKEDIN = process.env.LINKEDIN;

const Header = ({ selectedProject, setSelectedProject }: HeaderProps) => {
  return (
    <Box component="header" mb={{ xs: 3, md: 0 }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height={60}
      >
        {selectedProject ? (
          <IconButton
            aria-label="home"
            color="primary"
            onClick={() => setSelectedProject(null)}
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <ReplyIcon sx={{ fontSize: "2.5rem" }} />
          </IconButton>
        ) : (
          <Button
            sx={{
              p: 0,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <Box
              component="img"
              src="https://res.cloudinary.com/jjo/image/upload/v1669679560/Portfolio/Profile/jjo-dark.svg"
              width={{ xs: 70, md: 80 }}
            />
          </Button>
        )}

        <Box display="flex" gap={2}>
          <IconButton
            component="a"
            href={`mailto:${EMAIL}`}
            aria-label="email-link"
            color="secondary"
          >
            <EmailIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href={GITHUB}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="github-link"
            color="secondary"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href={LINKEDIN}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="linkedIn-link"
            color="secondary"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
