import { SVGProps } from "react";
import { animated } from "@react-spring/web";
import { Box } from "@mui/material";

const AnimatedPath = animated("path");

type CornerBottomRightProps = SVGProps<SVGSVGElement> & {
  isHovered: boolean;
};

const CornerBottomRight = ({ isHovered, ...props }: CornerBottomRightProps) => {
  return (
    <Box position="absolute" bottom={0} right={0} width={300} height={300}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
        {...props}
      >
        <AnimatedPath
          fill="url(#gradient)"
          d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
        />
      </svg>
    </Box>
  );
};

export default CornerBottomRight;
