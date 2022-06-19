export default function Parameters(index) {
  let parameters = [
    {
      image: { x: 0, y: 0, width: 150, height: 140, },
      nameAnimations: ["down", "up", "left", "right"],
      maximumSprites: [6, 6, 6, 6],
    },
    {
      image: { x: 0, y: 0, width: 184, height: 166, },
      nameAnimations: ["left", "down", "right", "up"],
      maximumSprites: [4, 4, 4, 4],
    },
    {
      image: { x: 0, y: 0, width: 57, height: 100, },
      nameAnimations: ["down", "up", "left", "right"],
      maximumSprites: [6, 6, 5, 5],
    },
    {
      image: { x: 0, y: 0, width: 56, height: 99, },
      nameAnimations: ["down", "up", "left", "right"],
      maximumSprites: [6, 6, 5, 5],
    },
    {
      image: { x: 0, y: 0, width: 134, height: 169 },
      nameAnimations: ["down", "right", "left", "up"],
      maximumSprites: [4, 4, 4, 4],
    },
    {
      image: { x: 0, y: 0, width: 53, height: 35, },
      nameAnimations: ["down", "up", "left", "right"],
      maximumSprites: [4, 4, 4, 4],
    },
    {
      image: { x: 0, y: 0, width: 57, height: 102, },
      nameAnimations: ["down", "up", "left", "right"],
      maximumSprites: [6, 6, 5, 5],
    },
    {
      image: { x: 0, y: 0, width: 30, height: 27, },
      nameAnimations: ["down", "up", "left", "right"],
      maximumSprites: [3, 3, 3, 3],
    },
    {
      image: { x: 0, y: 0, width: 51, height: 78, },
      nameAnimations: ["down", "up", "left", "right"],
      maximumSprites: [8, 8, 5, 5],
    },
    {
      image: { x: 0, y: 0, width: 25, height: 46, },
      nameAnimations: ["down", "up", "left", "right"],
      maximumSprites: [6, 6, 5, 5],
    },
  ];
  return parameters[index];
}