import { Container, Box } from "@mui/material";
import { Intro, Latest, Contact } from "../src/components/Landing";
import { MainLayout } from "../src/components/Layout";
import { fetchData } from "../src/lib/fetchData";

export default function Home({ latestProjects, homeData }) {
  const { profession, intro, contact } = homeData;

  return (
    <MainLayout title="Web Developer">
      <Container sx={{ maxWidth: 800 }} maxWidth={false}>
        <Box sx={{ py: 8 }}>
          <Intro intro={intro} profession={profession} />
        </Box>
        <Box sx={{ py: 4 }}>
          <Latest latestProjects={latestProjects} />
        </Box>
        <Box sx={{ py: 8 }}>
          <Contact contact={contact} />
        </Box>
      </Container>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const homepageRes = await fetchData("/homepage", { populate: "*" });
  const latestRes = await fetchData("/latests", {
    sort: ["order"],
    populate: "*",
  });

  return {
    props: {
      homeData: homepageRes.data.attributes,
      latestProjects: latestRes.data,
    },
    revalidate: 1,
  };
};
