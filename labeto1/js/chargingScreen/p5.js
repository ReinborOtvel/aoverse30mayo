export default {
  preload() {
    gameData.chargingScreen = [];
    for (let i = 1; i <= 14; i++) {
      let src = `./Graficos/chargingScreen/${i}.jpg`;
      gameData.p5.loadImage(src, img => {
        gameData.chargingScreen[i] = img;
      });
    }
  },
  draw() {
    for (let i = 1; i <= 14; i++) {
      gameData.loadImage(gameData.chargingScreen[i], 0, 0, 640, 360);
    }
  }
};