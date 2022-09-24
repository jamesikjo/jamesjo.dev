import { MainLayout, ProjectDetailLayout } from "../../src/components/Layout";
import { fetchData } from "../../src/lib/fetchData";

const ProjectPage = ({ singleProject }) => {
  return (
    <MainLayout title={singleProject.title}>
      <ProjectDetailLayout singleProject={singleProject} />
    </MainLayout>
  );
};

export const getStaticPaths = async () => {
  const res = await fetchData("/projects", {
    fields: "slug",
  });
  const paths = res.data.map(({ attributes: p }) => ({
    params: { project: p.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { project } = params;

  const res = await fetchData("/projects", {
    filters: { slug: project },
    //You can populate either as a whole on the 1st level or
    //populate each field indiviually to populate deeper levels
    //can't combine to do both
    populate: {
      stacks: { populate: "*", sort: ["order"] },
      links: { populate: "*" },
      thumbnail: { populate: "*" },
      preview: { populate: "*" },
    },
  });

  const singleProject = res.data[0].attributes;

  return { props: { singleProject }, revalidate: 1 };
};

export default ProjectPage;
