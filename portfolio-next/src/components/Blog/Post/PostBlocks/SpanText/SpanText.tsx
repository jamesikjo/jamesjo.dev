import React from "react";
import { Typography } from "@mui/material/";
import { Variant } from "@mui/material/styles/createTypography";
import { RichText } from "../../../../../types/notion/Block";

interface Props {
  text: RichText[];
  variant: Variant;
  component: string;
  id: string;
  muiColor: string;
}

const annotationStyles = (
  value: RichText,
  component: string,
  muiColor: string
) => {
  const {
    annotations: { bold, color, italic, strikethrough, underline },
  } = value;

  return {
    ...(bold && { fontWeight: 500 }),
    ...(component.includes("h") && { fontWeight: 600 }),
    color: color === "default" ? `${muiColor}.main` : color,
    fontStyle: italic ? "italic" : null,
    textDecoration: `${underline ? "underline" : ""} ${
      strikethrough ? "line-through" : ""
    }`,
  };
};

//text -> RichTextItemResponse
const SpanText = ({ text, variant, component, id, muiColor }: Props) => {
  const renderContent = text.map((textData, id) => (
    <React.Fragment key={id}>
      <Typography
        variant={variant}
        component={component as React.ElementType}
        sx={annotationStyles(textData, component, muiColor)}
      >
        {textData.href ? (
          <a href={textData.href} target="_blank" rel="noreferrer">
            {textData.plain_text}
          </a>
        ) : (
          textData.plain_text
        )}
      </Typography>
    </React.Fragment>
  ));

  return <>{renderContent}</>;
};

export default SpanText;
