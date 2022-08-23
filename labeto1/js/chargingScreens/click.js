import Metamask from "../metamask/start.js";
export default function (gameData) {
    if (gameData.pageData.clickMetamask == false) {
        gameData.pageData.clickMetamask = true;
        Metamask(gameData);
    }
}