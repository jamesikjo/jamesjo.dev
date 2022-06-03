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
            <Typography variant="subtitle1" color="primary">
              {link.title}:{" "}
              {
                <Typography
                  variant="subtitle1"
                  component="a"
                  href={link.url}
                  fontWeight="500"
                  sx={{ color: "info.main" }}
                >
                  {link.url.replace("https://", "")}
                </Typography>
              }
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Links;
