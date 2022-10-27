import Head from "next/head";
import { Box } from "@mui/material";
import TopBar from "./TopBar/";
import Footer from "./Footer";

interface MainLayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const NAV_LINKS = [
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Contact", path: "mailto:jamesjodev@gmail.com" },
];

const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          scrollBehavior: "smooth",
        }}
      >
        <TopBar navLinks={NAV_LINKS} />
        {children}
        <Footer navLinks={NAV_LINKS} />
      </Box>
    </>
  );
};

export default MainLayout;
