import { Box } from "@mui/material";

import Bio from "./Bio";
import Skills from "./Skills";
import BreadNavCrumbs from "../BreadNavCrumbs";
import Links from "./Links";

const About = ({ aboutData, stacks }) => {
  const { bio, skills, links } = aboutData;

  return (
    <Box component="section">
      <BreadNavCrumbs current="About" />
      <Links links={links} />
      <Box pt={6} pb={8}>
        <Bio bio={bio} />
      </Box>
      <Box>
        <Skills skills={skills} stacks={stacks} />
      </Box>
    </Box>
  );
};

export default About;
