export const pastelColors = [
  "#f7eddf",
  "#faa328", // pastel orange
  "#f0ea78", //pastel yellow
  "#FF6961", // pastel red
  "#62d162", // pastel green
  "#4489c9", // pastel blue
  "#F49AC2", // pastel pink
  "#CB99C9", // pastel purple
];

export function generateRandomColor() {
  return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}

export function generateRandomColors() {
  let color1, color2;

  do {
    color1 = generateRandomColor();
    color2 = generateRandomColor();
  } while (color1 === color2);

  return { color1, color2 };
}
