import { Container } from "@mui/material";
import { MainLayout } from "../../src/components/Layout";
import ProjectList from "../../src/components/ProjectList";
import { fetchData } from "../../src/lib/fetchData";

const PortfolioPage = ({ projects }) => {
  return (
    <MainLayout title="Portfolio">
      <Container sx={{ maxWidth: 800, pb: 10 }} maxWidth={false}>
        <ProjectList projects={projects} />
      </Container>
    </MainLayout>
  );
};

export default PortfolioPage;

export const getStaticProps = async () => {
  const projectRes = await fetchData("/projects", {
    sort: ["order"],
    populate: "*",
  });

  return {
    props: {
      projects: projectRes.data,
    },
    revalidate: 1,
  };
};
