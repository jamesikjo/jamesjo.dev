import {
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import ReactMarkdown from "react-markdown";

const Intro = ({ profession, intro }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box component="section">
      <Box display="flex" flexDirection={{ xs: "column-reverse", sm: "row" }}>
        <Box pr={{ xs: 5, sm: 5 }}>
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
            color="primary"
            fontWeight="400"
            mb={1}
            sx={{ letterSpacing: "-.05rem" }}
          >
            {profession}
          </Typography>

          <Typography
            variant={isSm ? "subtitle1" : "subtitle2"}
            color="secondary"
            component="div"
            className="markdown"
            fontWeight="400"
            pr={{ xs: 0, md: 3 }}
          >
            <ReactMarkdown children={intro} />
          </Typography>
        </Box>
        <Box mb={{ xs: 1, sm: 0 }}>
          <Avatar
            alt="headshot"
            src="https://res.cloudinary.com/jjo/image/upload/v1661480487/Portfolio/Profile/headshot-portfolio_qpymmq.webp"
            sx={{ width: { xs: 120, sm: 150 }, height: { xs: 120, sm: 150 } }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
