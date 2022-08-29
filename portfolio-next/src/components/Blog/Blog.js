import { Typography, Box, Chip, useTheme, useMediaQuery } from "@mui/material";
import BreadNavCrumbs from "../BreadNavCrumbs";
import Link from "next/link";
import notionColors from "../../lib/notionColors";

const Blog = ({ allPropertyValues }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box>
      <BreadNavCrumbs current="Blog" />
      <Box mb={6}>
        <Typography
          variant="h4"
          color="primary"
          fontWeight="600"
          gutterBottom
          sx={{ letterSpacing: "-.10rem" }}
        >
          Blog
        </Typography>
        <Typography
          variant={isSm ? "subtitle1" : "subtitle2"}
          color="secondary"
          fontWeight="400"
        >
          My collection of useful web developer resources, tools, and
          productivity tips along with my day-to-day experiences on becoming a
          self-taught web developer.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography
          variant="h4"
          color="primary"
          fontWeight="600"
          mb={2}
          sx={{ letterSpacing: "-.10rem" }}
        >
          All Posts
        </Typography>
        {allPropertyValues.map(
          ({ Description, Slug, Title, FormatDate, Tags }) => (
            <Box key={Title.results[0].title.plain_text} mb={4}>
              <Box
                display="flex"
                alignItems={{ xs: "flex-start", md: "center" }}
                flexDirection={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                mb={1}
              >
                <Link
                  href={`/blog/${Slug.results[0].rich_text.plain_text}`}
                  passHref
                >
                  <Typography component="a" variant="h6" color="primary" mr={1}>
                    {Title.results[0].title.plain_text}
                  </Typography>
                </Link>
                <Box display="flex" alignItems="center">
                  {Tags.multi_select.map((tag, i) => (
                    <Chip
                      key={i}
                      label={tag.name}
                      size="small"
                      sx={{
                        bgcolor: notionColors(tag.color),
                        fontWeight: 400,
                      }}
                    />
                  ))}
                  <Typography variant="caption" color="text.primary" ml={0.75}>
                    {FormatDate.formula.string}
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant={isSm ? "subtitle1" : "subtitle2"}
                color="secondary"
                fontWeight="400"
              >
                {Description.results[0]?.rich_text.plain_text}
              </Typography>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default Blog;
