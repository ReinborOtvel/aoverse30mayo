export default function NewPage(gameData) {
    gameData.graphicsEngine.createCanvas(640, 360);
    gameData.graphicsEngine.frameRate(30);
    switch (gameData.namePage) {
        case "chargingScreen": ChargingScreen.setup(); break;
        case "createCharacter": CreateCharacter.setup(); break;
        case "enterGroup": EnterGroup.setup(); break;
        case "game": Game.setup(); break;
    }
}