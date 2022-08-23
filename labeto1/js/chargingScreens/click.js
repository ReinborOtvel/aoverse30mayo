import StartMetamask from "../metamask/start.js";
export default function (gameData) {
    if (gameData.chargingScreens.clickMetamask == false) {
        gameData.chargingScreens.clickMetamask = true;
        StartMetamask();
    }
}