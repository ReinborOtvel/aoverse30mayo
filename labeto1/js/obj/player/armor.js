export default class {
  constructor(x, y, width, height, index) {
    x -= width / 2;
    y -= height / 2;
    this.sprites(index, x, y, width, height);
    this.animation = "down";
    this.sprite = 0;
  }
  sprites(index, x, y, width, height) {
    let url = `./player/armor/${index}.png`;
    let animations = ["down", "up", "left", "right"];
    let lengths = [6, 6, 5, 5];
    this.animations = new window.data.obj.animationVertical(x, y, width, height, url, 25, 45, animations, lengths);
  }
  draw() {
    this.animations.draw(this.animation, this.sprite);
  }
}