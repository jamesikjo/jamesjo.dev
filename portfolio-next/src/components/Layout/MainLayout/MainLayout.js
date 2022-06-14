import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const NAV_LINKS = [
  { title: "About", route: "/about" },
  { title: "Portfolio", route: "/portfolio" },
  { title: "Contact", route: "mailto:jamesjodev@gmail.com" },
];

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>James Jo | {title}</title>
      </Head>
      {/* add div style for sticky footer */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          scrollBehavior: "smooth",
        }}
      >
        <NavBar navLinks={NAV_LINKS} />
        {children}
        <Footer navLinks={NAV_LINKS} />
      </Box>
    </>
  );
};

export default MainLayout;
