import { Typography, Box, Avatar, Chip } from "@mui/material";
import notionColors from "../../../lib/notionColors";

const PostBlocks = ({ postContent, author, propertyValues }) => {
  const { results: postBlocks } = postContent;

  return postBlocks.map((block) => {
    const { type, id } = block;
    const value = block[type];

    switch (type) {
      case "paragraph":
        return <Text text={value.rich_text} key={id} id={id} />;

      case "heading_1":
        //heading_1 = post title
        return (
          <Heading
            text={value.rich_text}
            level={type}
            key={id}
            id={id}
            author={author}
            propertyValues={propertyValues}
          />
        );

      case "heading_2":
        return <Heading text={value.rich_text} level={type} key={id} id={id} />;

      case "heading_3":
        return <Heading text={value.rich_text} level={type} key={id} id={id} />;

      case "image":
        const imageSrc =
          value.type === "external" ? value.external.url : value.file.url;
        const caption = value.caption.length ? value.caption[0].plain_text : "";
        return (
          <Box key={id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Box component="img" alt={caption} src={imageSrc} width={1} />
            {caption && <Typography mt={2}>{caption}</Typography>}
          </Box>
        );

      default:
        return `Unsupported block (${
          type === "unsupported" ? "unsupported by Notion API" : type
        })`;
    }
  });
};
const SpanText = ({ text, id, variant, muiColor, component }) => {
  if (!text) return;
  return text.map((value, i) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;

    const annotationStyles = {
      ...(bold && { fontWeight: 500 }),
      ...(component.includes("h") && { fontWeight: 600 }),
      textDecoration: `${underline ? "underline" : ""} ${
        strikethrough ? "line-through" : ""
      }`,
      fontStyle: italic && "italic",
      color: color === "default" ? `${muiColor}.main` : color,
    };
    return (
      <Typography
        key={id + i}
        variant={variant}
        component={component}
        sx={annotationStyles}
      >
        {text.link ? (
          <a href={text.link.url} target="_blank">
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </Typography>
    );
  });
};

const Heading = ({ text, level, author, propertyValues, id }) => {
  const { FormatDate, Tags } = propertyValues;

  switch (level) {
    case "heading_1":
      return (
        <Box mb={2}>
          <SpanText
            text={text}
            muiColor="primary"
            variant="h4"
            component="h1"
            id={id}
          />
          <Box display="flex" alignItems="center" mt={2}>
            <Avatar
              src={author.avatar_url}
              sx={{ height: 30, width: 30, border: "0.5px solid #c9cfd6" }}
            />
            <Typography variant="body2" ml={1} color="primary">
              {author.name} / {FormatDate.formula.string}
            </Typography>
            {Tags.multi_select.map((tag, i) => (
              <Chip
                key={i}
                label={tag.name}
                size="small"
                sx={{ bgcolor: notionColors(tag.color), ml: 1 }}
              />
            ))}
          </Box>
        </Box>
      );
    case "heading_2":
      return (
        <SpanText text={text} muiColor="primary" variant="h5" component="h2" />
      );
    case "heading_3":
      return (
        <SpanText text={text} muiColor="primary" variant="h6" omponent="h3" />
      );
    default:
      return null;
  }
};
const Text = ({ text, id }) => {
  return (
    <Box compnent="p" mb={4}>
      <SpanText
        text={text}
        id={id}
        muiColor="secondary"
        variant="subtitle1"
        component="span"
      />
    </Box>
  );
};

export default PostBlocks;
