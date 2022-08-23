export default function (gameData) {
  gameData.pageData = {
    index: 1,
    images: [],
    clickMetamask: false
  };
  for (let index = 1; index <= 14; index++) {
    let src = `./Graficos/chargingScreens/${index}.jpg`;
    gameData.pageData.images[index] = gameData.graphicsEngine.loadImage(src);
  }
  setInterval(() => {
    if (gameData.pageData.index < 14) {
      gameData.pageData.index++;
    } else {
      gameData.pageData.index = 0;
    }
  }, 2000);
}