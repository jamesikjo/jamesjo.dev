import { Typography, Box } from "@mui/material";
import BreadNavCrumbs from "../BreadNavCrumbs";

const Resources = () => {
  return (
    <Box>
      <BreadNavCrumbs current="Resources" />
      <Box mb={6}>
        <Typography
          variant="h4"
          color="primary"
          fontWeight="600"
          mb={3}
          sx={{ letterSpacing: "-.10rem" }}
        >
          Resources
        </Typography>
        <Typography>In progress...</Typography>
      </Box>
      {/* <Box mb={8}>
        <Typography variant="h6" color="primary" fontWeight="500" mb={2}>
          Javascript
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          color="primary"
          className="markdown"
        ></Typography>
      </Box> */}
    </Box>
  );
};

export default Resources;
