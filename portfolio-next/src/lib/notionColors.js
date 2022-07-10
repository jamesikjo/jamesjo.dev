//convert color values received from notion to notion color hex values
//notion only provides basic color names e.g. green, red

const notionColors = (color) => {
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
