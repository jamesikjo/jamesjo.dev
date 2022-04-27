import React from "react";
import Image from "next/image";
import { useTheme, useMediaQuery, CardContent, Box } from "@mui/material";
import MainLayout from "../../src/components/Layout/main";
import SingleProjectLayout from "../../src/components/Layout/SingleProjectLayout";

import projectData from "../../src/lib/projectData";

const SingleProject = ({ projectDetails }) => {
  const { title } = projectDetails;

  return (
    <MainLayout title={title}>
      <SingleProjectLayout projectDetails={projectDetails} />
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
