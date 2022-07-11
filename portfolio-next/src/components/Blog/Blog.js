import { Typography, Box, Grid, Chip } from "@mui/material";
import BreadNavCrumbs from "../BreadNavCrumbs";
import Link from "next/link";
import notionColors from "../../lib/notionColors";

const CATEGORIES = [
  { title: "Javascript", path: "/" },
  { title: "React", path: "/" },
  { title: "CSS", path: "/" },
  { title: "Design", path: "/" },
  { title: "Guides", path: "/" },
  { title: "Other", path: "/" },
];

const Blog = ({ allPropertyValues }) => {
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
          Resource Blog
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          Here is a list of web development resources that I found helpful when
          I started learning web development from scratch. I have also included
          a few developer tools that I've used on my projects.
        </Typography>
      </Box>

      {/* <Box mb={6}>
        <Typography
          variant="h4"
          color="primary"
          fontWeight="600"
          mb={2}
          sx={{ letterSpacing: "-.10rem" }}
        >
          Featured
        </Typography>
        <Grid container spacing={2} mb={6}>
          {CATEGORIES.map(({ title, path }) => (
            <Grid item xs={6} sm={4} key={title}>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  border: `0.5px solid #c9cfd6`,
                  borderRadius: 1,
                  bgcolor: "background.paper",
                  px: 2.5,
                  py: 1.5,
                  width: 1,
                }}
              > */}
      {/* <Avatar
                src={getStrapiMedia(title.icon)}
                sx={{
                  width: { xs: 30, sm: 30 },
                  height: { xs: 30, sm: 30 },
                }}
                variant="square"
              /> */}
      {/* <Typography
                  variant="body2"
                  color="primary"
                  ml={2}
                  component="a"
                  href={path}
                  target="_blank"
                >
                  {title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid> */}
      {/* </Box> */}
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
                mb={1}
              >
                <Link
                  href={`/blog/${Slug.results[0].rich_text.plain_text}`}
                  passHref
                >
                  <Typography component="a" variant="h6" color="primary">
                    {Title.results[0].title.plain_text}
                    {Tags.multi_select.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag.name}
                        size="small"
                        sx={{
                          bgcolor: notionColors(tag.color),
                          mx: 1,
                          fontWeight: 400,
                        }}
                      />
                    ))}
                  </Typography>
                </Link>

                <Typography variant="caption" color="secondary">
                  {FormatDate.formula.string}
                </Typography>
              </Box>

              <Typography variant="body1" color="secondary">
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
