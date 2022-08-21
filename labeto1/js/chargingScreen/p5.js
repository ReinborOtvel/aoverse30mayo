import StartMetamask from "../metamask/start.js";
import Button from "../utils/button.js";
export default {
  setup() {
    gameData.index = 1;
    gameData.clickMetamask = false;
    gameData.chargingScreens = [];
    for (let index = 1; index <= 14; index++) {
      let src = `./Graficos/chargingScreens/${index}.jpg`;
      gameData.chargingScreens[index] = gameData.p5.loadImage(src);
    }
    setInterval(() => {
      if (gameData.index < 14) {
        gameData.index++;
      }
    }, 2000);
  },
  click() {
    if (gameData.clickMetamask == false) {
      gameData.clickMetamask = true;
      StartMetamask();
    }
  },
  draw() {
    let chargingScreen = gameData.chargingScreens[gameData.index];
    if (chargingScreen != undefined) {
      gameData.p5.image(chargingScreen, 0, 0, 640, 360);
    }
    if (gameData.clickMetamask == false) {
      Button(50, 280, 430, 50, "click to connect with metamask");
    }
  }
};