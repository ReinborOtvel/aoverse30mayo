export default class {
  text({ text, x, y, size, color }) {
    x = utils.percentageWidth({ percentage: x });
    y = utils.percentageHeight({ percentage: y });
    size = utils.percentageWidth({ percentage: size });
    engine.textSize(size);
    engine.fill(color);
    engine.text(text, x, y);
  }
  rect({ transform, color }) {
    let { x, y, width, height } = utils.transformPercentage(transform);
    engine.fill(color);
    engine.rect(x, y, width, height);
  }
  transformPercentage({ x, y, width, height }) {
    x = utils.percentageWidth({ percentage: x });
    y = utils.percentageHeight({ percentage: y });
    width = utils.percentageWidth({ percentage: width });
    height = utils.percentageHeight({ percentage: height });
    return { x, y, width, height };
  }
  image({ image, transform }) {
    if (image == undefined) {
      return;
    }
    let { x, y, width, height } = utils.transformPercentage(transform);
    engine.noSmooth();
    engine.image(image, x, y, width, height);
  }
  circle({ x, y, diameter }) {
    x = utils.percentageWidth({ percentage: x });
    y = utils.percentageHeight({ percentage: y });
    diameter = utils.percentageWidth({ percentage: diameter });
    engine.circle(x, y, diameter);
  }
  percentageWidth({ percentage }) {
    let width = engine.width / 100;
    return width * percentage;
  }
  percentageHeight({ percentage }) {
    let height = engine.height / 100;
    return height * percentage;
  }
  percentagePixelsWidth({ pixels }) {
    let pixelsWidth = utils.percentageWidth({ percentage: 1 });
    return parseInt(pixels / pixelsWidth);
  }
  percentagePixelsHeight({ pixels }) {
    let pixelsHeight = utils.percentageHeight({ percentage: 1 });
    return parseInt(pixels / pixelsHeight);
  }
  range({ initial, end }) {
    return Math.round(engine.random(initial, end));
  }
} 