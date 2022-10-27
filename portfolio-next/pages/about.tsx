import { Box, Container } from "@mui/material";
import { MainLayout } from "../src/components/Layout";
import About from "../src/components/About";
import { fetchStrapi } from "../src/lib/strapi/fetchStrapi";
import { About as AboutModel } from "../src/types/strapi/About";
import { Stack } from "../src/types/strapi/Stack";

export interface APICall {
  about: AboutModel;
  stacks: Stack[];
}

const AboutPage = ({ about, stacks }: APICall) => {
  return (
    <Box>
      <MainLayout title="About Me">
        <Container sx={{ maxWidth: 800 }} maxWidth={false}>
          <About about={about} stacks={stacks} />
        </Container>
      </MainLayout>
    </Box>
  );
};

export const getStaticProps = async () => {
  const aboutRes = await fetchStrapi<{ data: APICall }>("/about", {
    populate: {
      links: {
        populate: "*",
      },
      skills: {
        populate: "*",
      },
      bio: {
        populate: "*",
      },
    },
  });
  const stackRes = await fetchStrapi<{ data: APICall }>("/stacks", {
    sort: ["order"],
  });
  return {
    props: {
      about: aboutRes.data,
      stacks: stackRes.data,
    },
    revalidate: 1,
  };
};

export default AboutPage;
