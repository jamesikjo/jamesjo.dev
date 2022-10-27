import type { NextPage, GetStaticProps } from "next";
import { Container, Box } from "@mui/material";
import { MainLayout } from "../src/components/Layout";
import { Intro, Latest, Contact } from "../src/components/Landing";
import { fetchStrapi } from "../src/lib/strapi/fetchStrapi";
import { LatestProject } from "../src/types/strapi/LatestProject";
import { Profile } from "../src/types/strapi/Profile";

interface APICall {
  latestProjects: LatestProject[];
  profile: Profile;
}

const Home: NextPage<APICall> = ({ latestProjects, profile }) => {
  const { contact } = profile;

  return (
    <MainLayout title="James Jo - Web Developer">
      <Container sx={{ maxWidth: 800 }} maxWidth={false}>
        <Box sx={{ py: 8 }}>
          <Intro profile={profile} />
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
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const profileRes = await fetchStrapi<{ data: { attributes: APICall } }>(
    "/homepage",
    { populate: "*" }
  );
  const latestRes = await fetchStrapi<{ data: APICall["profile"] }>(
    "/latests",
    {
      sort: ["order"],
      populate: "*",
    }
  );
  const profile = profileRes.data.attributes; //remove attributes from type
  return {
    props: {
      profile,
      latestProjects: latestRes.data,
    },
    revalidate: 60,
  };
};
