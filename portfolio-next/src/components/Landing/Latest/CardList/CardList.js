import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Stack,
  Typography,
  Box,
  CardContent,
  Divider,
  useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { GitHubButton, VisitSiteButton } from "../../../Buttons";
import getStrapiMedia from "../../../../lib/media";

const CardList = ({ latestProjects }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Stack spacing={4}>
      {latestProjects.map(({ attributes }) => (
        <Box
          key={attributes.title}
          width={1}
          display="flex"
          flexDirection={{ xs: "column", sm: "row-reverse" }}
          alignItems="center"
          borderRadius={1}
          sx={{
            border: { xs: "none", sm: `0.5px solid #c9cfd6` },
            bgcolor: { xs: "none", sm: "common.white" },
          }}
        >
          <Box
            sx={{
              width: { xs: 1, md: "40%" },
              height: { xs: 280, sm: 240 },
              maxHeight: { sm: 240 },
              position: "relative",
              "& img": {
                filter: "drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.2))",
              },
            }}
          >
            <Image
              layout="fill"
              objectFit="contain"
              src={getStrapiMedia(attributes.cover)}
              alt={attributes.title}
              priority
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
              fontWeight="600"
            >
              {attributes.title}
            </Typography>
            <Typography
              color="secondary"
              variant={isSm ? "body1" : "subtitle2"}
              fontWeight="400"
            >
              {attributes.description}
            </Typography>
            <Divider sx={{ my: 1.5, display: { xs: "none", sm: "block" } }} />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={{ xs: 1, sm: 0 }}
            >
              <Link href={attributes.page.url} passHref>
                <Button
                  color="info"
                  component="a"
                  endIcon={<KeyboardArrowRightIcon />}
                  sx={{
                    "& .MuiButton-endIcon": { ml: 0 },
                    pl: 0,
                    fontWeight: 600,
                  }}
                >
                  Project Info
                </Button>
              </Link>
              <Stack direction="row" spacing={{ xs: 0, sm: 1 }}>
                <GitHubButton href={attributes.github.url} />
                <VisitSiteButton href={attributes.visit.url} />
              </Stack>
            </Stack>
          </CardContent>
        </Box>
      ))}
    </Stack>
  );
};

export default CardList;
