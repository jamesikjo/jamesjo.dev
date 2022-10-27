//convert color value received from notion block to notion's color hex values
//notion only provides basic color names e.g. green, red

const notionColors = (color: string) => {
  switch (color) {
    case "blue":
      return "#DDEBF1";

    case "green":
      return "#DDEDEA";

    case "orange":
      return "#FAEBDD";

    case "yellow":
      return "#FBF3DB";

    case "purple":
      return "#EAE4F2";

    case "pink":
      return "#F4DFEB";

    case "red":
      return "#FBE4E4";

    default:
      return "EBECED";
  }
};

export default notionColors;
