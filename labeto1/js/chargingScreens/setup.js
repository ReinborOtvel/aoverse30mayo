export default function () {
  page.index = 1;
  page.images = [];
  page.metamask = false;
  for (let index = 1; index <= 14; index++) {
    let src = `./Graficos/chargingScreens/${index}.jpg`;
    page.images[index] = engine.loadImage(src);
  }
  setInterval(() => {
    if (page.index < 14) {
      page.index++;
    } else {
      page.index = 0;
    }
  }, 2000);
}