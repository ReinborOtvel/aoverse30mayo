import StartMetamask from "../metamask/start.js";
export default function Click(gameData) {
    if (gameData.chargingScreens.clickMetamask == false) {
        gameData.chargingScreens.clickMetamask = true;
        StartMetamask();
    }
}