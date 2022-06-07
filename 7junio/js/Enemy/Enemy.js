import Body from "./Body.js";
import Parameters from "./Parameters.js";
export default class Enemy {
  constructor(Transform, index) {
    this.parameters = Parameters(index);
    this.parameters.src = `img/enemy/${index}.png`;
    this.Parts = [
      new Body(
        this.parameters,
        Transform
      ),
    ];
  }
  stopAnimation(value) {
    for (let index = 0; index < this.Parts.length; index++) {
      this.Parts[index].Animation.Sprite.stop = value;
    }
  }
  changeAnimation(nameAnimation) {
    if (nameAnimation !== undefined) {
      for (let index = 0; index < this.Parts.length; index++) {
        this.Parts[index].Animation.change(nameAnimation);
      }
    }
  }
  nextSprite(ms, deltaTime) {
    for (let index = 0; index < this.Parts.length; index++) {
      this.Parts[index].Animation.Sprite.next(ms, deltaTime);
    }
  }
  update(ms, deltaTime) {
    for (let index = 0; index < this.Parts.length; index++) {
      this.Parts[index].Image.update(ms, deltaTime);
    }
  }
}