import Image from "next/image";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import ReactMarkdown from "react-markdown";

const Intro = ({ profession, intro }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box component="section">
      <Box display="flex" flexDirection={{ xs: "column-reverse", sm: "row" }}>
        <Box pr={{ xs: 5, sm: 10 }}>
          <Typography
            variant={isSm ? "h3" : "h4"}
            component="h1"
            color="primary"
            fontWeight="600"
            mb={{ xs: 0, sm: 1 }}
            sx={{ letterSpacing: "-.10rem" }}
          >
            James Jo,
          </Typography>
          <Typography
            variant={isSm ? "h5" : "h6"}
            component="h2"
            color="secondary"
            fontWeight="400"
            mb={1}
            sx={{ letterSpacing: "-.05rem" }}
          >
            {profession}
          </Typography>

          <Typography
            variant={isSm ? "subtitle1" : "subtitle2"}
            color="primary"
            component="div"
            className="markdown"
            fontWeight="400"
            pr={{ xs: 0, md: 3 }}
          >
            <ReactMarkdown children={intro} />
          </Typography>
        </Box>
        <Box
          maxWidth={{ xs: 130, sm: 165 }}
          width={500}
          height={{ xs: 130, sm: 165 }}
          mb={{ xs: 2, sm: 0 }}
          position="relative"
        >
          <Image
            alt="headshot"
            src="https://res.cloudinary.com/jjo/image/upload/v1654297450/Portfolio/Profile/headshot_1_jjqdbt.png"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
