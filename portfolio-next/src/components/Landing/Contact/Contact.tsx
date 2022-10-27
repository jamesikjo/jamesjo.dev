import { useRouter } from "next/router";
import { Stack, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { Contact } from "../../../types/strapi/Profile";

interface ContactProps {
  contact: Contact;
}

const Contact = ({ contact }: ContactProps) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const router = useRouter();

  const { description, email } = contact;

  const highLight = router.asPath === "/#contact";

  return (
    <Box component="section">
      <Stack
        alignItems={{ xs: "center", sm: "flex-start" }}
        sx={{ textAlign: { xs: "center", sm: "left" } }}
        mb={1}
      >
        <Typography
          variant="body1"
          color="secondary"
          sx={{ letterSpacing: ".15rem" }}
        >
          {"Contact".toUpperCase()}
        </Typography>
        <Typography
          variant="h4"
          color={highLight ? "info.dark" : "primary"}
          fontWeight="600"
          gutterBottom
          sx={{ letterSpacing: "-.10rem" }}
        >
          {"Get in touch"}
        </Typography>
        <Typography
          variant={isSm ? "subtitle1" : "subtitle2"}
          component="div"
          color="secondary"
          gutterBottom
          fontWeight="400"
          className="markdown"
        >
          <ReactMarkdown>{description}</ReactMarkdown>
        </Typography>

        <Typography
          component="a"
          href={`mailto:${email}`}
          color="info.main"
          variant="subtitle1"
          fontWeight="500"
          sx={{
            textDecoration: "underline",
          }}
        >
          {email}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Contact;
