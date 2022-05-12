import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Stack,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { GitHubButton, VisitSiteButton } from "../../../Buttons";

const latestProjects = [
  {
    title: "myKombucha",
    image:
      "https://res.cloudinary.com/jjo/image/upload/v1652295021/Portfolio/myKombucha/mykombucha-latest_lfzaly.png",
    description:
      "An online community for kombucha lovers and professionals. Site features over 500 different kombuchas from 100 different breweries.",
    links: {
      github: "https://github.com/jamesikjo",
      project: "https://www.mykombucha.net",
      details: "/portfolio/mykombucha",
    },
  },
  {
    title: "PowerTek",
    image:
      "https://res.cloudinary.com/jjo/image/upload/v1652295220/Portfolio/powertek/powertek-latest_u4qb6a.png",
    description:
      "Website built for PowerTek - a high performance automotive parts company specializing in engine management and brakes.",
    links: {
      github: "https://github.com/jamesikjo",
      project: "https://powertek.vercel.app/",
      details: "/portfolio/powertek",
    },
  },
  {
    title: "ArmonVan Photography",
    image:
      "https://res.cloudinary.com/jjo/image/upload/v1652295238/Portfolio/Armon%20Van%20Photography/armonvan-latest_cxmvj0.png",
    description:
      "Photography portfolio. Strapi integration allows client to upload and delete photos from the CMS.",
    links: {
      github: "https://github.com/jamesikjo/armonvan-photography-next",
      project: "https://www.armonvanphoto.com/",
      details: "/portfolio/armonvan-photography",
    },
  },
];

const CardList = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Stack spacing={4}>
      {latestProjects.map((item) => (
        <Box
          key={item.title}
          component={Card}
          width={1}
          height={1}
          elevation={0}
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row-reverse" }}
          alignItems="center"
          sx={{
            border: { xs: "none", sm: `0.5px solid #c9cfd6` },
            backgroundImage: "none",
          }}
        >
          <Box
            sx={{
              width: { xs: 1, md: "50%" },
              height: { xs: 280, md: 260 },
              position: "relative",
            }}
          >
            <Image
              layout="fill"
              objectFit="contain"
              src={item.image}
              alt={item.title}
            />
          </Box>

          <CardContent
            sx={{
              position: "relative",
              width: { xs: 1, md: "60%" },
              padding: { xs: 2, sm: 3.5 },
            }}
          >
            <Typography
              variant={isSm ? "h5" : "h5"}
              gutterBottom
              color="primary"
              fontWeight="700"
            >
              {item.title}
            </Typography>
            <Typography
              color="secondary"
              variant={isSm ? "body1" : "subtitle2"}
              fontWeight="400"
              pb={1.5}
            >
              {item.description}
            </Typography>
            <Link href={item.links.details} passHref>
              <Button
                variant="text"
                color="secondary"
                component="a"
                size="small"
                endIcon={<ChevronRightIcon />}
                sx={{
                  "& .MuiButton-endIcon": { ml: 0 },
                  p: 0,
                  fontWeight: 600,
                }}
              >
                Project Page
              </Button>
            </Link>

            <Divider sx={{ my: 1.5 }} />

            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <Stack direction="row" spacing={1}>
                <GitHubButton href={item.links.github} />
                <VisitSiteButton href={item.links.project} />
              </Stack>
            </Box>
          </CardContent>
        </Box>
      ))}
    </Stack>
  );
};

export default CardList;
