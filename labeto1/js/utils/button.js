export default function (gameData, x, y, width, height, text) {
    gameData.graphicsEngine.fill("#000");
    gameData.graphicsEngine.rect(x, y, width, height, 10);
    gameData.graphicsEngine.fill("#fff");
    gameData.graphicsEngine.text(text, x + 10, y + 30);
}