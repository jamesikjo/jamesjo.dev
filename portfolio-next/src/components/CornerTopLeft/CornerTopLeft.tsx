import { SVGProps, useMemo } from "react";
import { animated, useSpring } from "@react-spring/web";
import { generateRandomColors } from "../../utils/colorUtils";
import { Box, useTheme, useMediaQuery } from "@mui/material";

const AnimatedPath = animated("path");

type CornerTopLeftProps = SVGProps<SVGSVGElement> & {
  isHovered: boolean;
  colors: { color1: string; color2: string };
};

const CornerTopLeft = ({ isHovered, colors, ...props }: CornerTopLeftProps) => {
  const { color1, color2 } = colors;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const { stopColorOffset0, stopColorOffset50, stopColorOffset100 } = useSpring(
    {
      stopColorOffset0: isHovered ? color2 : color1,
      stopColorOffset50: isHovered ? color1 : color2,
      stopColorOffset100: isHovered ? color2 : color1,
      config: {
        tension: 250,
      },
    }
  );

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      width={{ xs: 125, md: 300 }}
      height={{ xs: 125, md: 300 }}
      sx={{ zIndex: 0 }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
        {...props}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <animated.stop
              offset="0"
              style={{ stopColor: stopColorOffset0.to((val) => val as any) }}
            />
            <animated.stop
              offset=".5"
              style={{ stopColor: stopColorOffset50.to((val) => val as any) }}
            />
            <animated.stop
              offset="1"
              style={{ stopColor: stopColorOffset100.to((val) => val as any) }}
            />
          </linearGradient>
        </defs>
        <AnimatedPath
          fill="url(#gradient)"
          d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
        />
      </svg>
    </Box>
  );
};

export default CornerTopLeft;
