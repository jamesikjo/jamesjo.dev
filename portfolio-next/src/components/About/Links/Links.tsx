import { Typography, Box } from "@mui/material";
import { Link } from "../../../../src/types/strapi/About";

interface LinksProps {
  links: Link[];
}

const Links = ({ links }: LinksProps) => {
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
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Links;
