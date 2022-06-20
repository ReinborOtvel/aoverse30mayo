export default function Maps(index) {
  // 0 floor, 1 wall, 2 player, 3 end, 4 enemy, 5 key
  let maps = [
    [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 5, 0, 0],
      [1, 0, 0, 0, 0, 4, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    ],
  ];
  return maps[index];
}