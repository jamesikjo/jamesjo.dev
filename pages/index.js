import React from "react";
import { Intro, Featured, Contact } from "../src/components/Landing";
import { Main } from "../src/components/Layout";
import featuredData from "../src/lib/featuredData";

export default function Home({ featuredData }) {
  console.log(featuredData);
  return (
    <Main title="Dev Portfolio">
      <Intro />
      <Featured featuredData={featuredData} />
      <Contact />
    </Main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      featuredData,
    },
  };
}
