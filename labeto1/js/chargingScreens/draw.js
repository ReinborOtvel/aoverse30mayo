import Button from "../utils/button.js";
export default function Draw() {
  let _this = gameData.chargingScreens;
  let chargingScreen = _this.chargingScreens[_this.index];
  if (chargingScreen != undefined) {
    gameData.graphicsEngine.image(chargingScreen, 0, 0, 640, 360);
  }
  if (_this.clickMetamask == false) {
    Button(50, 280, 430, 50, "click to connect with metamask");
  }
}