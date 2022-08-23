export default function (gameData) {
    switch (gameData.namePage) {
        case "chargingScreen": ChargingScreen.click(); break;
        case "createCharacter": CreateCharacter.click(); break;
        case "enterGroup": EnterGroup.click(); break;
        case "game": Game.click(); break;
    }
}