export default function (x, y, width, height, color) {
  let transform = new window.data.obj.transform(x, y, width, height);
  transform = transform.percentage;
  window.data.engine.fill(color);
  window.data.engine.rect(transform.x, transform.y, transform.width, transform.height);
}