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
  image(image, { x, y, width, height }) {
    if (image == undefined) return;
    engine.noSmooth();
    engine.image(image, x, y, width, height);
  }
  circle({ x, y }, diameter) {
    engine.circle(x, y, diameter);
  }
  range(initial, end) {
    return Math.round(engine.random(initial, end));
  }
} 