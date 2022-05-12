import * as React from "react";
import {
  Typography,
  CardContent,
  Box,
  useTheme,
  Card,
  Button,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const ProjectCard = ({ title, subtitle, icon, name, idx }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        // component="a"
        // href=""
        // display="block"
        width={1}
        height={1}
        sx={{
          textDecoration: "none",
          transition: "all .2s ease-in-out",
          "&:hover": {
            transform: `translateY(-${theme.spacing(1 / 2)})`,
          },
        }}
      >
        <Box
          component={Card}
          width={1}
          height={1}
          py={1.5}
          px={2}
          data-aos="fade-up"
          data-aos-delay={idx * 100}
          data-aos-offset={100}
          data-aos-duration={600}
          flexDirection="column"
          display="flex"
          bgcolor="#fafafa"
          elevation={0}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              component="img"
              width={{ xs: 65, md: 75 }}
              marginBottom={1}
              src={icon}
            />
            <Typography
              variant="body1"
              color="secondary"
              sx={{ letterSpacing: ".15rem" }}
            >
              {name.toUpperCase()}
            </Typography>

            <Typography
              variant="h5"
              color="primary"
              fontWeight={700}
              mb={2}
              sx={{ letterSpacing: ".0.5rem" }}
            >
              {title}
            </Typography>
            <Typography color="text.secondary" mb={1.5}>
              {subtitle}
            </Typography>

            <Button
              color="secondary"
              variant="text"
              size="large"
              endIcon={<ArrowRightIcon size="large" />}
              sx={{
                pl: 0,
                letterSpacing: ".0.5rem",
                fontWeight: 700,
                "& span": { ml: "0px" },
                " & .MuiButton-endIcon svg": { fontSize: "1.5rem" },
              }}
            >
              Project Details
            </Button>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
