import React from "react";
import { Box, Container } from "@mui/material";
import { MainLayout } from "../src/components/Layout";
import About from "../src/components/About";
import { fetchData } from "../src/lib/fetchData";

const AboutPage = ({ about }) => {
  const { attributes: aboutData } = about;
  return (
    <Box>
      <MainLayout title="About Me">
        <Container maxWidth="md">
          <About aboutData={aboutData} />
        </Container>
      </MainLayout>
    </Box>
  );
};
export const getStaticProps = async () => {
  const aboutRes = await fetchData("/about", { populate: "*" });
  return {
    props: {
      about: aboutRes.data,
    },
  };
};

export default AboutPage;
