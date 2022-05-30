import entity from "../entity/entity.js";
export default class enemy {
  constructor(transformJSON, body, boxes, speed) {
    this.transform = JSON.parse(JSON.stringify(transformJSON));
    this.body = body;
    this.boxes = boxes;
    this.speed = speed;
    this.parts = [this.body];
    this.entity = new entity(this.boxes, this.parts, this.speed);
    this.key = "w";
  }
  freeBox() {
    this.entity.freeBox();
  }
  nextSprite(ms) {
    this.body.nextSprite(ms);
  }
  newKey() {
    this.entity.stopKey(this.key);
    this.key = window.main.tools.random.array(["w", "a", "s", "d"]);
    this.body.stop(false);
    if (this.key === "a") {
      this.body.change("left");
    } else if (this.key === "d") {
      this.body.change("right");
    } else if (this.key === "w") {
      this.body.change("up");
    } else if (this.key === "s") {
      this.body.change("down");
    }
    if (this.entity.collision === true) {
      this.body.stop(true);
    }
  }
  moveKey() {
    this.entity.moveKey(this.key);
    if (this.entity.collision === true) {
      this.entity.collision = false;
      this.newKey();
    }
  }
  draw(percentage) {
    this.body.draw(percentage);
  }
  move(deltaTime) {
    this.entity.move(deltaTime);
  }
}