export default class {
  constructor(x, y, width, height, statistics) {
    this.head = new window.data.obj.player.head(x, y, width, height, statistics.head);
    this.armor = new window.data.obj.player.armor(x, y, width, height, statistics.armor);
    this.weapon = new window.data.obj.player.weapon(x, y, width, height, statistics.weapon);
  }
  transform() {
    this.head.animations.transform.setTransform(x, y, width, height);
  }
  draw() {
    this.armor.draw();
    this.head.draw();
    this.weapon.draw();
  }
}