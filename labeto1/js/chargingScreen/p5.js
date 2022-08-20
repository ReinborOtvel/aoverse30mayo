import StartMetamask from "../metamask/start.js";
export default {
  preload() {
    gameData.chargingScreens = [];
    for (let index = 1; index <= 14; index++) {
      let src = `./Graficos/chargingScreens/${index}.jpg`;
      gameData.p5.loadImage(src, chargingScreen => {
        gameData.chargingScreens[index] = chargingScreen;
        if (index == 14) {
          gameData.canDraw = true;
        }
      });
    }
  },
  setup() {
    gameData.index = 1;
    setInterval(() => {
      if (gameData.index < 14) {
        gameData.index++;
      }
      if (gameData.index == 2) {
        StartMetamask();
      }
    }, 2000);
  },
  draw() {
    let chargingScreen = gameData.chargingScreens[gameData.index];
    gameData.p5.image(chargingScreen, 0, 0, 640, 360);
  }
};