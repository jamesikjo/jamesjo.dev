import React from "react";
import Image from "next/image";
import {
  Stack,
  Divider,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

export const STACKS = [
  {
    logo: "https://res.cloudinary.com/jjo/image/upload/v1649375080/Portfolio/Stack/Javascript_ra9ivb.svg",
    name: "Javascript",
  },
  {
    logo: "https://res.cloudinary.com/jjo/image/upload/v1649366041/Portfolio/Stack/React_rpjiw5.svg",
    name: "React",
  },
  {
    logo: "https://res.cloudinary.com/jjo/image/upload/v1649366562/Portfolio/Stack/MUI_wqakpb.svg",
    name: "MUI",
  },
  {
    logo: "https://res.cloudinary.com/jjo/image/upload/v1649366494/Portfolio/Stack/next_cxgxpb.svg",
    name: "Next.js",
  },
  {
    logo: "https://res.cloudinary.com/jjo/image/upload/v1649366617/Portfolio/Stack/Nodejs_kqlqm5.svg",
    name: "Node.js",
  },
  {
    logo: "https://res.cloudinary.com/jjo/image/upload/v1649366766/Portfolio/Stack/Strapi_vlgtxu.svg",
    name: "Strapi",
  },
  {
    logo: "https://res.cloudinary.com/jjo/image/upload/v1649366766/Portfolio/Stack/Mongodb_pqduyn.svg",
    name: "MongoDB",
  },
  {
    logo: "https://res.cloudinary.com/jjo/image/upload/v1649366766/Portfolio/Stack/Vercel_bcpqyd.svg",
    name: "Vercel",
  },
  {
    logo: "https://res.cloudinary.com/jjo/image/upload/v1649366766/Portfolio/Stack/Netlify_qq0vst.svg",
    name: "Netlify",
  },
];

const TechList = () => {
  const theme = useTheme();

  return STACKS.map((item, i) => (
    <Grid item xs={4} key={i}>
      <Box
        width={1}
        height={1}
        sx={{
          transition: "all .2s ease-in-out",
          "&:hover": {
            transform: `translateY(-${theme.spacing(1 / 2)})`,
          },
        }}
      >
        <Card sx={{ boxShadow: `0 3px 6px 0 ${alpha("#8c98a4", 0.25)}` }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 3,
            }}
          >
            <Image height={35} width={35} src={item.logo} alt={item.name} />
            <Typography
              component="div"
              variant="caption"
              color="primary"
              fontWeight="500"
              mt={1}
            >
              {item.name}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  ));
};

export default TechList;
