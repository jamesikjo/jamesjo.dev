import React from "react";
import { Container } from "@mui/material";
import { Intro, Latest, Contact } from "../src/components/Landing";
import { MainLayout } from "../src/components/Layout";

export default function Home() {
  return (
    <MainLayout title="Dev Portfolio">
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Intro />
      </Container>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Latest />
      </Container>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Contact />
      </Container>
    </MainLayout>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       latestProjData,
//     },
//   };
// }
