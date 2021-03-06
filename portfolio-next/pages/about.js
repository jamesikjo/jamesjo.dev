import { Box, Container } from "@mui/material";
import { MainLayout } from "../src/components/Layout";
import About from "../src/components/About";
import { fetchData } from "../src/lib/fetchData";

const AboutPage = ({ about, stacks }) => {
  const { attributes: aboutData } = about;
  return (
    <Box>
      <MainLayout title="About Me">
        <Container sx={{ maxWidth: 800 }} maxWidth={false}>
          <About aboutData={aboutData} stacks={stacks} />
        </Container>
      </MainLayout>
    </Box>
  );
};
export const getStaticProps = async () => {
  const aboutRes = await fetchData("/about", {
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
  const stackRes = await fetchData("/stacks", { sort: ["order"] });
  return {
    props: {
      about: aboutRes.data,
      stacks: stackRes.data,
    },
    revalidate: 1,
  };
};

export default AboutPage;
