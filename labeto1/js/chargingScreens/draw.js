import Button from "../utils/button.js";
export default function (gameData) {
  let image = gameData.pageData.images[gameData.pageData.index];
  if (image != undefined) {
    gameData.graphicsEngine.image(image, 0, 0, 640, 360);
  }
  if (gameData.pageData.clickMetamask == false) {
    Button(gameData, 50, 280, 430, 50, "click to connect with metamask");
  }
}