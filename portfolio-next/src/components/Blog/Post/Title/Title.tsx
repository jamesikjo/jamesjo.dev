import { Typography, Box, Avatar, Chip } from "@mui/material";
import { BlogProperties } from "../../../../types/notion/Interface";
import notionColors from "../../../../utils/notionColors";

interface TitleProps {
  blogPost: BlogProperties;
}

//Default title/heading layout for blog post (Title, Author, Date, and Tags)
const Title = ({ blogPost }: TitleProps) => {
  const { title, author, tags, formatDate } = blogPost;
  return (
    <Box mb={4}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 600 }}
        color="primary"
      >
        {title}
      </Typography>
      <Box display="flex" alignItems="center" mt={2}>
        <Avatar
          src={author[0].avatar_url as string}
          sx={{ height: 30, width: 30, border: "0.5px solid #c9cfd6" }}
        />
        <Typography variant="body2" ml={1} color="primary">
          {author[0].name} / {formatDate.formula.string}
        </Typography>
        {tags.map(({ name, color }) => (
          <Chip
            key={name}
            label={name}
            size="small"
            sx={{ bgcolor: notionColors(color), ml: 1 }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Title;
