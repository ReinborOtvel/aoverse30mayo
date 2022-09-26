export default class {
  text(text, x, y, size, color) {
    x = utils.percentageWidth(x);
    y = utils.percentageHeight(y);
    size = utils.percentageWidth(size);
    engine.textSize(size);
    engine.fill(color);
    engine.text(text, x, y);
  }
  rect(x, y, width, height, color) {
    x = utils.percentageWidth(x);
    y = utils.percentageHeight(y);
    width = utils.percentageWidth(width);
    height = utils.percentageHeight(height);
    engine.fill(color);
    engine.rect(x, y, width, height);
  }
  image(image, x, y, width, height) {
    if (image == undefined) {
      return;
    }
    x = utils.percentageWidth(x);
    y = utils.percentageHeight(y);
    width = utils.percentageWidth(width);
    height = utils.percentageHeight(height);
    engine.noSmooth();
    engine.image(image, x, y, width, height);
  }
  circle(x, y, diameter) {
    x = utils.percentageWidth(x);
    y = utils.percentageHeight(y);
    diameter = utils.percentageWidth(diameter);
    engine.circle(x, y, diameter);
  }
  percentageWidth(percentage) {
    let width = engine.width / 100;
    return width * percentage;
  }
  percentageHeight(percentage) {
    let height = engine.height / 100;
    return height * percentage;
  }
  percentagePixelsWidth(pixels) {
    let pixelsWidth = utils.percentageWidth(1);
    return parseInt(pixels / pixelsWidth);
  }
  percentagePixelsHeight(pixels) {
    let pixelsHeight = utils.percentageHeight(1);
    return parseInt(pixels / pixelsHeight);
  }
  range(initial, end) {
    return Math.round(engine.random(initial, end));
  }
} 