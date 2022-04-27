import React from "react";
import Intro from "../src/components/Intro";
import Contact from "../src/components/Contact/index";
import MainLayout from "./../src/components/Layout/main/index";
import Featured from "./../src/components/Featured/index";
import featuredData from "../src/lib/featuredData";

export default function Home({ featuredData }) {
  console.log(featuredData);
  return (
    <MainLayout title="Dev Portfolio">
      <Intro />
      <Featured featuredData={featuredData} />
      <Contact />
    </MainLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      featuredData,
    },
  };
}
