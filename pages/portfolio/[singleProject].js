import React from "react";
import projectData from "../../src/lib/projectData";
import { MainLayout, ProjectDetailLayout } from "../../src/components/Layout";

const SingleProject = ({ projectDetails }) => {
  const { title } = projectDetails;

  return (
    <MainLayout title={title}>
      <ProjectDetailLayout projectDetails={projectDetails} />
    </MainLayout>
  );
};

export const getStaticPaths = async () => {
  const paths = projectData.map((p) => ({
    params: { singleProject: p.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { singleProject } = params;
  const projectDetails = projectData.find((p) => p.slug === singleProject);

  return { props: { projectDetails } };
};

export default SingleProject;
