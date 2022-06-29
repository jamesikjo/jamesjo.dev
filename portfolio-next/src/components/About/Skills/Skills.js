import { Grid, Typography, Stack, Box, Divider } from "@mui/material";
import TechGridList from "./TechGridList";
import ReactMarkdown from "react-markdown";

const Skills = ({ skills, stacks }) => {
  return (
    <Box mb={3}>
      <Typography
        variant="h4"
        color="primary"
        fontWeight="600"
        mb={2}
        sx={{ letterSpacing: "-.10rem" }}
      >
        Skills
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} alignItems="flex-start">
          <Typography variant="subtitle1" color="primary" fontWeight="500">
            Technologies
          </Typography>
          <Typography
            variant="subtitle1"
            color="primary"
            component="div"
            className="markdown"
          >
            <ReactMarkdown children={skills.technologies} />
          </Typography>
        </Grid>
        <Grid item container spacing={1} xs={12} md={6} justifyContent="center">
          <TechGridList stacks={stacks} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
