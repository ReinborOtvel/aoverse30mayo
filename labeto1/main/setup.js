import NewPage from "./newPage.js";
import Click from "./click.js";
export default function (gameData) {
    gameData.namePage = "chargingScreen";
    NewPage(gameData);
    gameData.canvas = document.querySelector("canvas");
    gameData.canvas.addEventListener("click", ({ pageX, pageY }) => {
        gameData.click = { x: pageX, y: pageY };
        Click(gameData);
    });
}