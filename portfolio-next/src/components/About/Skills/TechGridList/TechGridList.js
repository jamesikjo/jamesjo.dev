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
import getStrapiMedia from "../../../../lib/media";

const TechList = ({ stacks }) => {
  const theme = useTheme();

  return stacks.slice(0, 9).map(({ attributes: item }, i) => (
    <Grid item xs={4} key={i}>
      <Box width={1} height={1}>
        <Card
          elevation={0}
          sx={{ border: `0.5px solid #c9cfd6`, borderRadius: 1 }}
        >
          <CardContent
            component="a"
            href={item.url}
            target="_blank"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 3,
            }}
          >
            <Image
              height={35}
              width={35}
              src={getStrapiMedia(item.icon)}
              alt={item.stack}
            />
            <Typography
              component="div"
              variant="caption"
              color="primary"
              fontWeight="500"
              mt={1}
            >
              {item.stack}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  ));
};

export default TechList;
