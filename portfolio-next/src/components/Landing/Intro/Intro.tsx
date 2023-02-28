import {
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import { Profile } from "../../../types/strapi/Profile";

interface IntroProps {
  profile: Profile;
}

const Intro = ({ profile }: IntroProps) => {
  const { profession, intro } = profile;
  const { url } = profile.headshot.data.attributes;

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
            mb={-1}
            sx={{ letterSpacing: "-.05rem" }}
          >
            {profession}
          </Typography>

          <Typography
            variant={isSm ? "subtitle1" : "subtitle2"}
            color="secondary"
            component="div"
            fontWeight="400"
            // className="markdown"
            pr={{ xs: 0, md: 3 }}
          >
            <ReactMarkdown>{intro}</ReactMarkdown>
          </Typography>
        </Box>
        <Box mb={{ xs: 1, sm: 0 }}>
          <Avatar
            alt="headshot"
            src={url}
            sx={{ width: { xs: 120, sm: 150 }, height: { xs: 120, sm: 150 } }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
