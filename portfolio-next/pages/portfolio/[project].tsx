import { GetStaticPaths } from "next";
import { MainLayout } from "../../src/components/Layout";
import ProjectLayout from "../../src/components/Layout/ProjectLayout";
import { Project } from "../../src/types/strapi/Project";
import { fetchStrapi } from "../../src/lib/strapi/fetchStrapi";

interface APICall {
  singleProject: Project;
}

const ProjectPage = ({ singleProject }: APICall) => {
  const { title } = singleProject.attributes;
  return (
    <MainLayout title={title}>
      <ProjectLayout singleProject={singleProject} />
    </MainLayout>
  );
};

interface IParams {
  params: { project: string };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projectRes = await fetchStrapi<{ data: Project[] }>("/projects", {
    fields: "slug",
  });
  const paths = projectRes.data.map(({ attributes }) => ({
    params: { project: attributes.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: IParams) => {
  const { project } = params;

  const singleProjectRes = await fetchStrapi<{ data: APICall[] }>("/projects", {
    filters: { slug: project },
    //You can populate either as a whole on the 1st level or
    //populate each field indiviually to populate deeper levels
    //cannot combine to do both
    populate: {
      stacks: { populate: "*", sort: ["order"] },
      links: { populate: "*" },
      thumbnail: { populate: "*" },
      preview: { populate: "*" },
    },
  });

  const singleProject = singleProjectRes.data[0];

  return { props: { singleProject }, revalidate: 1 };
};

export default ProjectPage;
