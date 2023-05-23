import React, { useState, useMemo } from "react";
import type { NextPage, GetStaticProps } from "next";
import {
  Container,
  Box,
  NoSsr,
  Grid,
  Typography,
  Grow,
  useTheme,
  useMediaQuery,
  Fade,
} from "@mui/material";
import { fetchStrapi } from "../src/lib/strapi/fetchStrapi";
import { Project as ProjectType } from "../src/types/strapi/Project";
import { Profile } from "../src/types/strapi/Profile";
import { generateRandomColors } from "../src/utils/colorUtils";
import {
  Welcome,
  CornerTopLeft,
  CornerBottomRight,
  Header,
  Projects,
  Project,
} from "../src/components";

interface APICall {
  profileData: Profile;
  projectData: ProjectType[];
}

const Home: NextPage<APICall> = ({ profileData, projectData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const colors = useMemo(() => generateRandomColors(), [selectedProject]);

  const selectedProjectData = useMemo(() => {
    if (!selectedProject) return [];
    return projectData.filter(
      (project) => project.attributes.title === selectedProject
    );
  }, [selectedProject, projectData]);

  return (
    <Box
      display="flex"
      alignItems="center"
      height={isMd ? "100vh" : "100%"}
      // maxHeight="100vh"
      maxWidth="100vw"
    >
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        position="relative"
        component={Container}
        maxWidth="lg"
        height="100%"
        maxHeight={{ xs: "100%", md: "800px" }}
        p={{ xs: 1, md: "22px" }}
      >
        <NoSsr>
          <CornerTopLeft isHovered={isHovered} colors={colors} />
          {isMd && <CornerBottomRight isHovered={isHovered} />}
        </NoSsr>
        <Box
          p={{ xs: 3, md: "30px" }}
          height={1}
          display="flex"
          flexDirection="column"
          position="relative"
          sx={{
            background: "#1D1D20",
            borderTopLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <Header
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
          <Grid
            container
            alignItems="center"
            spacing={isMd ? 0 : 6}
            sx={{ height: isMd ? 1 : "none" }}
          >
            <Grid item xs={12} md={8} pl={6}>
              <NoSsr>
                {!selectedProject ? (
                  <Fade in={true} timeout={500} mountOnEnter unmountOnExit>
                    <div>
                      <Welcome colors={colors} profileData={profileData} />
                    </div>
                  </Fade>
                ) : (
                  <React.Fragment key={selectedProject}>
                    <Fade in={true} timeout={1000} mountOnEnter unmountOnExit>
                      <div>
                        <Project
                          projectData={selectedProjectData}
                          colors={colors}
                        />
                      </div>
                    </Fade>
                  </React.Fragment>
                )}
              </NoSsr>
            </Grid>
            <Grid
              item
              xs={0}
              md={1}
              sx={{ display: isMd ? "block" : "none" }}
            />
            <Grid item xs={12} md={3}>
              <NoSsr>
                <Projects
                  colors={colors}
                  projectData={projectData}
                  setSelectedProject={setSelectedProject}
                />
              </NoSsr>
            </Grid>
          </Grid>
          <Box
            textAlign="end"
            pr={1}
            py={{ xs: 4, lg: 0 }}
            mt={{ xs: 0, lg: "auto" }}
          >
            <Typography component="footer" variant="caption" color="primary">
              ⚡2023 | jamesjo.dev
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const profileRes = await fetchStrapi<{ data: { attributes: APICall } }>(
    "/homepage",
    { populate: "*" }
  );

  const projectRes = await fetchStrapi<{ data: APICall }>("/projects", {
    sort: ["order"],
    populate: "*",
  });
  const profileData = profileRes.data.attributes;
  const projectData = projectRes.data;
  return {
    props: {
      profileData,
      projectData,
    },
    revalidate: 60,
  };
};
