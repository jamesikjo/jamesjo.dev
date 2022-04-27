import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Stack,
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  Grid,
  useTheme,
  useMediaQuery,
  Chip,
} from "@mui/material";
import { GitHubButton, VisitSiteButton } from "../Buttons";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const FeaturedCard = ({ featuredDetails }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const { number, title, img, stack, description, path, projectLink, gitLink } =
    featuredDetails;
  return (
    <>
      <Grid item xs={12} md={6}>
        <Box
          width={1}
          height="auto"
          sx={{
            position: { xs: "static", md: "relative" },
            left: "5%",
            top: "10%",
            zIndex: 100,
            boxShadow: "4px 4px 24px 2px rgb(0 0 0 / 15%)",
            borderRadius: 2,
            border: "4px solid #F4F4F4",
            transition: "all .2s ease-in-out",
            "&:hover": {
              transform: matches && `translateY(-${theme.spacing(1)})`,
            },
          }}
        >
          <Box
            component="img"
            src={img}
            alt={title}
            sx={{
              width: 1,
              height: 1,
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} mb={4}>
        <Paper
          sx={{
            height: 1,
            position: { xs: "static", md: "relative" },
            right: "5%",
            boxShadow: "4px 4px 24px 2px rgb(0 0 0 / 10%)",
            borderRadius: 2,
            bgcolor: "#fff",
            transition: "all .2s ease-in-out",
            "&:hover": {
              transform: matches && `translateY(-${theme.spacing(1)})`,
            },
          }}
        >
          <Stack
            py={matches ? 4.5 : 3}
            px={matches ? 5 : 3}
            alignItems={matches ? "flex-end" : "flex-start"}
          >
            <Box mb={1.5}>
              <Typography
                variant={matches ? "h2" : "h3"}
                color="secondary"
                align={matches ? "right" : "left"}
                fontWeight={700}
              >
                {number}
              </Typography>
              <Typography
                variant={matches ? "h4" : "h5"}
                color="primary"
                align="right"
                fontWeight={700}
                gutterBottom
              >
                {title}
              </Typography>
              <Divider sx={{ borderBottomWidth: "medium" }} />
            </Box>
            <Typography
              variant={matches ? "body1" : "body2"}
              color="primary"
              sx={{ pl: { xs: 0, md: 10 } }}
              align={matches ? "right" : "left"}
            >
              {description}
            </Typography>

            <Stack direction="row" pt={2} pb={!matches && 2} spacing={1}>
              {stack.map((s, idx) => (
                <Chip
                  label={s}
                  key={idx}
                  sx={{ "& .MuiChip-label": { overflow: "visible" } }}
                />
              ))}
            </Stack>
            <Box display="flex" flexDirection={matches ? "column" : "row"}>
              <Stack
                pt={matches && 2}
                pb={matches && 2}
                display="flex"
                direction="row"
                spacing={1}
              >
                <VisitSiteButton size="small" />
                <Divider orientation="vertical" flexItem />
                <GitHubButton size="small" />
                {!matches && <Divider orientation="vertical" flexItem />}
              </Stack>
              <Link href={`/portfolio/${path}`} passHref>
                <Button
                  variant="text"
                  component="a"
                  color="primary"
                  size={matches ? "medium" : "small"}
                  endIcon={<ChevronRightIcon />}
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    "& .MuiButton-endIcon": { ml: 0 },
                    justifyContent: "flex-end",
                    ml: 1,
                    p: 0,
                  }}
                >
                  Project Details
                </Button>
              </Link>
            </Box>
          </Stack>
        </Paper>
      </Grid>
    </>
  );
};

export default FeaturedCard;
