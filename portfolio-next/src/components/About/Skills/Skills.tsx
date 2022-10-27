import { Grid, Typography, Box } from "@mui/material";
import TechGridList from "./TechGridList";
import { Stack as StackModel } from "../../../types/strapi/Stack";
import { Skill } from "../../../types/strapi/About";
import ReactMarkdown from "react-markdown";

interface SkillsProps {
  skills: Skill;
  stacks: StackModel[];
}

const Skills = ({ skills, stacks }: SkillsProps) => {
  return (
    <Box>
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
            component="div"
            color="primary"
            className="markdown"
          >
            <ReactMarkdown>{skills.technologies}</ReactMarkdown>
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
