export default class {
  collision(entity) {
    let h = parseInt(x / this.width);
    let v = parseInt(y / this.height);
    return this.h == h && this.v == v;
  }
  draw(entity) {
    utils.image(entity.image, entity.x, entity.y, entity.width, entity.height);
  }
}