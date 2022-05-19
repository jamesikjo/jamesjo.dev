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

const CardList = ({ latestProjectData }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Stack spacing={4}>
      {latestProjectData.map((item) => (
        <Box
          key={item.title}
          width={1}
          display="flex"
          flexDirection={{ xs: "column", sm: "row-reverse" }}
          alignItems="center"
          borderRadius={1}
          sx={{
            border: { xs: "none", sm: `0.5px solid #c9cfd6` },
            bgcolor: "common.white",
          }}
        >
          <Box
            sx={{
              width: { xs: 1, md: "50%" },
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
              src={item.image}
              alt={item.title}
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
              {item.title}
            </Typography>
            <Typography
              color="secondary"
              variant={isSm ? "body1" : "subtitle2"}
              fontWeight="400"
            >
              {item.description}
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Link href={item.links.details} passHref>
                <Button
                  color="info"
                  component="a"
                  size="small"
                  endIcon={<KeyboardArrowRightIcon />}
                  sx={{
                    "& .MuiButton-endIcon": { ml: 0 },
                    pl: 0,
                    fontWeight: 600,
                  }}
                >
                  Project Page
                </Button>
              </Link>
              <Stack direction="row" spacing={1}>
                <GitHubButton size="small" href={item.links.github} />
                <VisitSiteButton size="small" href={item.links.project} />
              </Stack>
            </Stack>
          </CardContent>
        </Box>
      ))}
    </Stack>
  );
};

export default CardList;
