import { Box } from "@mui/material";
import Bio from "./Bio";
import Skills from "./Skills";
import BreadNavCrumbs from "../BreadNavCrumbs";
import Links from "./Links";
import { About as AboutModel } from "../../../src/types/strapi/About";
import { Stack } from "../../../src/types/strapi/Stack";

interface AboutProps {
  about: AboutModel;
  stacks: Stack[];
}

const About = ({ about, stacks }: AboutProps) => {
  const { bio, skills, links } = about.attributes;

  return (
    <Box component="section" mb={3}>
      <BreadNavCrumbs current="About" />
      <Links links={links} />
      <Box mt={6} mb={7}>
        <Bio bio={bio} />
      </Box>
      <Box>
        <Skills skills={skills} stacks={stacks} />
      </Box>
    </Box>
  );
};

export default About;
