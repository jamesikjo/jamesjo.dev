import { Typography, Box, Avatar, Chip } from "@mui/material";
import notionColors from "../../../lib/notionColors";

//Default title layout for blog posts (Title, Author, Date, and Tags)
const Title = ({ properties }) => {
  const { Title, Author, Tags, FormatDate } = properties;
  return (
    <Box mb={4}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
        {Title.title[0].plain_text}
      </Typography>
      <Box display="flex" alignItems="center" mt={2}>
        <Avatar
          src={Author.people[0].avatar_url}
          sx={{ height: 30, width: 30, border: "0.5px solid #c9cfd6" }}
        />
        <Typography variant="body2" ml={1} color="primary">
          {Author.people[0].name} / {FormatDate.formula.string}
        </Typography>
        {Tags.multi_select.map(({ name, color }) => (
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
