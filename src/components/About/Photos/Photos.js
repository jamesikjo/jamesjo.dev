import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Grid,
  Box,
  Container,
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const myPhotos = [
  {
    src: "/images/about/hawaii.jpg",
    rows: 1,
    cols: 2,
  },
  {
    src: "/images/about/main-profile.jpg",
    rows: 1,
    cols: 1,
  },
  {
    src: "/images/about/obi-2.jpg",
    rows: 1,
    cols: 1,
  },
  {
    src: "/images/about/horseshoe.jpg",
    rows: 1,
    cols: 2,
  },
];

const Photos = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Container maxWidth="md">
      <ImageList
        variant="quilted"
        cols={3}
        rowHeight={matches ? 300 : 220}
        gap={matches ? 16 : 8}
      >
        {myPhotos.map((item, i) => (
          <ImageListItem key={i} cols={item.cols || 2} rows={item.rows || 1}>
            <LazyLoadImage
              height={"100%"}
              width={"100%"}
              src={item.src}
              alt="..."
              effect="blur"
              style={{
                objectFit: "cover",
                cursor: "poiner",
                borderRadius: 8,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default Photos;
