export default function (x, y, diameter) {
  let transform = new window.data.obj.transform(x, y, diameter);
  transform = transform.percentage;
  window.data.engine.circle(transform.x, transform.y, transform.width);
}