import React from "react";
import { Intro, Featured, Contact } from "../src/components/Landing";
import { MainLayout } from "../src/components/Layout";
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
