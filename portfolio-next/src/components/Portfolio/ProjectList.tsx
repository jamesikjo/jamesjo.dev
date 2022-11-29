import Link from "next/link";
import Image from "next/image";
import { Grid, Typography, Box, Button } from "@mui/material";
import BreadNavCrumbs from "../BreadNavCrumbs";
import { Project } from "../../types/strapi/Project";
import getStrapiMedia from "../../lib/strapi/media";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <Box>
      <Box mb={3}>
        <BreadNavCrumbs current="Portfolio" />
      </Box>
      <Typography
        variant="h4"
        color="primary"
        fontWeight="600"
        mb={3}
        sx={{ letterSpacing: "-.10rem" }}
      >
        Projects
      </Typography>
      <Grid container rowSpacing={6} columnSpacing={4}>
        {projects.map(({ attributes: item }, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box
              position="relative"
              sx={{
                "&: hover": {
                  "& button": {
                    opacity: 1,
                    transition: "opacity 0.65s ease-in-out",
                  },
                },
              }}
            >
              <Link href={`/portfolio/${item.slug}`} passHref>
                <Box
                  component="a"
                  sx={{
                    "& img": {
                      borderRadius: 1,
                      border: `0.5px solid #c9cfd6 !important`,
                    },
                  }}
                >
                  <Image
                    src={getStrapiMedia(item.thumbnail)}
                    alt={item.title}
                    width={item.thumbnail.data.attributes.width}
                    height={item.thumbnail.data.attributes.height}
                  />
                </Box>
              </Link>
              <Link href={`/portfolio/${item.slug}`} passHref>
                <Box
                  component={"a"}
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    right: 15,
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      opacity: 0,
                      px: 1,
                      bgcolor: "info.main",
                      color: "#fff",
                      "&: hover": { bgcolor: "info.dark" },
                    }}
                  >
                    Project Page
                  </Button>
                </Box>
              </Link>
            </Box>

            <Typography variant="subtitle1" color="primary" fontWeight="600">
              {item.title}
            </Typography>
            <Typography variant="body1" color="secondary">
              {item.subtitle}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectList;
