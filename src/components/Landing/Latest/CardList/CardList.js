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
          height={1}
          display="flex"
          flexDirection={{ xs: "column", sm: "row-reverse" }}
          alignItems="center"
          borderRadius={1}
          sx={{
            border: `0.5px solid #c9cfd6`,
            bgcolor: theme.palette.background.paper,
          }}
        >
          <Box
            sx={{
              width: { xs: 1, md: "50%" },
              height: { xs: 280, md: 240 },
              position: "relative",

              "& img": {
                filter: "drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.2))",
              },
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
                endIcon={<KeyboardArrowRightIcon />}
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
