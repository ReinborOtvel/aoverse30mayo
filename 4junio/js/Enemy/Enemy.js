import Body from "./Body.js";
import Parameters from "./Parameters.js";
export default class Enemy {
  constructor(Transform, index) {
    this.Transform = Transform;
    this.index = index;
    this.parameters = Parameters(this.index);
    this.parameters.src = `img/enemy/${this.index}.png`;
    this.Parts = [
      new Body(
        this.parameters,
        this.Transform
      ),
    ];
  }
  draw() {
    for (let index in this.Parts) {
      this.Parts[index].Image.draw();
    }
  }
}