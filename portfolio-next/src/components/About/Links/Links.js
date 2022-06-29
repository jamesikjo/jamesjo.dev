import { Typography, Box } from "@mui/material";

const Links = ({ links }) => {
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
                <a alt={link.title} href={link.url} target="_blank">
                  {link.name}
                </a>
              )}
              {link.title === "Resume" &&
                link.resume.map((link) => (
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
