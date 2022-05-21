import React from "react";
import { MainLayout, ProjectDetailLayout } from "../../src/components/Layout";
import { fetchData } from "../../src/lib/fetchData";

const ProjectPage = ({ singleProject }) => {
  return (
    <MainLayout title={"title"}>
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
  //from getStaticPaths
  const { project } = params;

  const res = await fetchData("/projects", {
    filters: { slug: project },
    populate: "*",
  });

  const singleProject = res.data[0].attributes;

  return { props: { singleProject } };
};

export default ProjectPage;
