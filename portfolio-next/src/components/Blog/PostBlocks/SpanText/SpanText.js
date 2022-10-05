import Typography from "@mui/material/Typography";

const annotationStyles = (value, props) => {
  const {
    annotations: { bold, code, color, italic, strikethrough, underline },
  } = value;

  return {
    ...(bold && { fontWeight: 500 }),
    ...(props.component.includes("h") && { fontWeight: 600 }),
    color: color === "default" ? `${props.muiColor}.main` : color,
    fontStyle: italic && "italic",
    textDecoration: `${underline ? "underline" : ""} ${
      strikethrough ? "line-through" : ""
    }`,
  };
};

const SpanText = (props) => {
  const { text, variant, component, id } = props;
  if (!text) return null;

  return text.map((value, i) => {
    return (
      <Typography
        key={id + i}
        variant={variant}
        component={component}
        sx={annotationStyles(value, props)}
      >
        {value.text.link ? (
          <a href={value.text.link.url} target="_blank">
            {value.text.content}
          </a>
        ) : (
          value.text.content
        )}
      </Typography>
    );
  });
};
export default SpanText;
