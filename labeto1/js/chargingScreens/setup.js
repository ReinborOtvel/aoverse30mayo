export default function (gameData) {
  gameData.chargingScreens = {
    index: 1,
    chargingScreens: [],
    clickMetamask: false
  };
  for (let index = 1; index <= 14; index++) {
    let src = `./Graficos/chargingScreens/${index}.jpg`;
    gameData.chargingScreens.chargingScreens[index] = gameData.graphicsEngine.loadImage(src);
  }
  setInterval(() => {
    if (gameData.chargingScreens.index < 14) {
      gameData.chargingScreens.index++;
    }
  }, 2000);
}