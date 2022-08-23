export default function Draw(gameData) {
    gameData.graphicsEngine.noSmooth();
    gameData.graphicsEngine.textAlign(gameData.graphicsEngine.LEFT);
    gameData.graphicsEngine.textWrap(gameData.graphicsEngine.WORD);
    gameData.graphicsEngine.fill("#fff");
    gameData.graphicsEngine.textSize(30);
    switch (gameData.namePage) {
        case "chargingScreen": ChargingScreen.draw(); break;
        case "createCharacter": CreateCharacter.draw(); break;
        case "enterGroup": EnterGroup.draw(); break;
        case "game": Game.draw(); break;
    }
}