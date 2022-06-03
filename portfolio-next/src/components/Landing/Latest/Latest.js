import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CardLatest from "./CardList/CardList";

const Latest = ({ latestProjects }) => {
  return (
    <Box component="section" id="featured">
      <Typography
        variant="body1"
        color="secondary"
        sx={{ letterSpacing: ".15rem" }}
      >
        {"projects".toUpperCase()}
      </Typography>
      <Typography
        variant="h4"
        component="h3"
        color="primary"
        fontWeight="600"
        mb={3}
        sx={{ letterSpacing: "-.10rem" }}
      >
        Latest
      </Typography>

      <CardLatest latestProjects={latestProjects} />

      <Box
        display="flex"
        justifyContent={{ xs: "center", sm: "flex-start" }}
        mt={5}
      >
        <Link href="/portfolio" passHref>
          <Button
            variant="text"
            color="primary"
            component="a"
            size="large"
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              "& .MuiButton-endIcon": { ml: 0 },
              ml: 0,
              p: 0,
            }}
          >
            See Portfolio
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Latest;
