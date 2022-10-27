import { GetStaticProps } from "next";
import { Container } from "@mui/material";
import { MainLayout } from "../../src/components/Layout";
import { Project } from "../../src/types/strapi/Project";
import ProjectList from "../../src/components/Portfolio/ProjectList";
import { fetchStrapi } from "../../src/lib/strapi/fetchStrapi";

interface APICall {
  projects: Project[];
}

const PortfolioPage = ({ projects }: APICall) => {
  return (
    <MainLayout title="Portfolio">
      <Container sx={{ maxWidth: 800 }} maxWidth={false}>
        <ProjectList projects={projects} />
      </Container>
    </MainLayout>
  );
};

export default PortfolioPage;

export const getStaticProps: GetStaticProps = async () => {
  //TS Note: projectRes.data is typed to the APICall interface
  const projectRes = await fetchStrapi<{ data: APICall }>("/projects", {
    sort: ["order"],
    populate: "*",
  });

  return {
    props: {
      projects: projectRes.data,
    },
    revalidate: 15,
  };
};
