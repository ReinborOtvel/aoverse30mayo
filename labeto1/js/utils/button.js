export default function Button(x, y, width, height, text) {
    gameData.p5.fill("#000");
    gameData.p5.rect(x, y, width, height, 10);
    gameData.p5.fill("#fff");
    gameData.p5.text(text, x + 10, y + 30);
}