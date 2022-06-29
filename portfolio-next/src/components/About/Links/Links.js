import { Typography, Box } from "@mui/material";

const Links = ({ links }) => {
  const resumeLinks = [
    { name: "PDF / ", url: "/pdf/resume-jamesjo.pdf" },
    {
      name: "Google Doc / ",
      url: "https://docs.google.com/document/d/1gTETH1Z0orVNaCxSWIi3nuLeZTIRh66rZxWspoi2xBc/edit?usp=sharing",
    },
    {
      name: "Notion",
      url: "https://purring-beef-d64.notion.site/James-Jo-b59ae81f0b9c421f883989f971767170",
    },
  ];
  return (
    <>
      <Typography
        variant="h4"
        color="primary"
        fontWeight="600"
        sx={{ letterSpacing: "-.10rem" }}
      >
        Links
      </Typography>
      <Box component="ul" mb={0} pl={2.5}>
        {links.map((link) => (
          <Box key={link.title} component="li">
            <Typography variant="subtitle1" color="primary" fontWeight="500">
              {link.title} :{" "}
              {link.title !== "Resume" && (
                <Typography
                  variant="subtitle1"
                  component="a"
                  alt={link.title}
                  href={link.url}
                  target="_blank"
                  fontWeight="500"
                  sx={{ color: "info.main" }}
                >
                  {link.name}
                </Typography>
              )}
              {link.title === "Resume" &&
                resumeLinks.map((link) => (
                  <a
                    href={link.url}
                    target="_blank"
                    alt={link.name}
                    key={link.name}
                  >
                    {link.name}
                  </a>
                ))}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Links;
