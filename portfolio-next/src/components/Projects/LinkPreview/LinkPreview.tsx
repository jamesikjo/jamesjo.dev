import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import getStrapiMedia from "../../../lib/strapi/media";
import { Thumbnail } from "../../../types/strapi/Project";

interface LinkPreviewProps {
  url: Thumbnail;
  children: React.ReactNode;
}

const LinkPreview = ({ url, children }: LinkPreviewProps) => {
  const [show, setShow] = useState<Boolean | null>(null);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const animationProps = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translate3d(0,0,0)" : "translate3d(0,-10vh,0)",
  });
  return (
    <div>
      {show && isMd ? (
        <animated.div
          style={{
            ...animationProps,
            position: "absolute",
            top: "-320px",
            left: "-50px",
            right: "0px",
            zIndex: 100,
            backgroundColor: "transparent",
          }}
        >
          <animated.img
            className="image"
            style={{ borderRadius: "5px" }}
            src={getStrapiMedia(url)}
            width={350}
            height={197}
          />
        </animated.div>
      ) : null}
      <Box
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        display="inline"
      >
        {children}
      </Box>
    </div>
  );
};

export default LinkPreview;
