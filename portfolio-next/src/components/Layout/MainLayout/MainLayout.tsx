import Head from "next/head";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import TopBar from "./TopBar/";
import Footer from "./Footer";

const NAV_LINKS = [
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Contact", path: "mailto:jamesjodev@gmail.com" },
];

const meta = {
  title: "James Jo | Web Developer",
  description: "My work portfolio and blog",
  image: "/meta-image.png",
  type: "website",
};

interface MainLayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title || meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://jamesjo.dev${router.asPath}`} />
        <meta
          property="og:url"
          content={`https://jamesjo.dev${router.asPath}`}
        />
        <meta property="og:title" content={title || meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content="jamesjo.dev" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:image" content={meta.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://jamesjo.dev${router.asPath}`}
        />
        <meta property="twitter:title" content={title || meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
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
