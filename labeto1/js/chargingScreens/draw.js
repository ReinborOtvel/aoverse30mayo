import TextBackground from "../utils/textBackground.js";
export default function () {
  let image = page.images[page.index];
  if (image != undefined) {
    engine.image(image, 0, 0, 640, 360);
  }
  if (page.metamask == false) {
    TextBackground(50, 280, " click to connect with metamask ");
  }
}