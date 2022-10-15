export default function (x, y, size, text, color) {
  let transform = new window.data.obj.transform(x, y, size);
  transform = transform.percentage;
  window.data.engine.textSize(transform.width);
  window.data.engine.fill(color);
  window.data.engine.text(text, transform.x, transform.y);
}