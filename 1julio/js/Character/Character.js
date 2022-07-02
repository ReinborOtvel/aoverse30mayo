import AnimationCharacter from "./Animation.js";
class WheelMove {
  constructor(gameCharacter) {
    this.gameCharacter = gameCharacter;
    this.xInitial = 70;
    this.yInitial = 280;
    this.x = this.xInitial;
    this.y = this.yInitial;
    this.size = 25;
    window.addEventListener("keydown", event => {
      this.keydown(event);
    });
    window.addEventListener("keyup", event => {
      this.keyup(event);
    });
  }
  keydown(event) {
    let key = event.key;
    if (key === "w") {
      this.gameCharacter.yMove = -1;
      this.y = this.yInitial - this.size;
    } else if (key === "s") {
      this.gameCharacter.yMove = 1;
      this.y = this.yInitial + this.size;
    } else if (key === "a") {
      this.gameCharacter.xMove = -1;
      this.x = this.xInitial - this.size;
    } else if (key === "d") {
      this.gameCharacter.xMove = 1;
      this.x = this.xInitial + this.size;
    }
  }
  keyup(event) {
    let key = event.key;
    if (key === "w" || key === "s") {
      this.gameCharacter.yMove = 0;
      this.y = this.yInitial;
    } else if (key === "a" || key === "d") {
      this.gameCharacter.xMove = 0;
      this.x = this.xInitial;
    }
  }
  update() {
    window.main.ctx.beginPath();
    window.main.ctx.strokeStyle = "#ffffff";
    window.main.ctx.arc(this.xInitial, this.yInitial, this.size + 25, 0, 360);
    window.main.ctx.stroke();
    window.main.ctx.beginPath();
    window.main.ctx.arc(this.x, this.y, 20, 0, 360);
    window.main.ctx.stroke();
  }
}
class ControlAnimation {
  constructor(gameCharacter) {
    this.gameCharacter = gameCharacter;
    this.animationCharacter = new AnimationCharacter(this.gameCharacter.transform, this.gameCharacter.statistics);
    this.sprite = 0;
    this.maximum = 6;
    this.name = "down";
    this.timer = 0;
    this.timerEnd = 200;
    this.stop = false;
  }
  animation() {
    if (this.gameCharacter.yMove === -1) {
      this.name = "up";
      this.maximum = 6;
    } else if (this.gameCharacter.yMove === 1) {
      this.name = "down";
      this.maximum = 6;
    } else if (this.gameCharacter.xMove === -1) {
      this.name = "left";
      this.maximum = 5;
    } else if (this.gameCharacter.xMove === 1) {
      this.name = "right";
      this.maximum = 5;
    }
    if (this.gameCharacter.xMove !== 0 || this.gameCharacter.yMove !== 0) {
      this.sprite++;
      if (this.sprite >= this.maximum) {
        this.sprite = 0;
      }
    }
    this.animationCharacter.animation(this.name, this.sprite);
  }
  update() {
    this.animationCharacter.update();
    if (this.stop === false) {
      if (this.timer <= 0) {
        this.timer = this.timerEnd;
        this.animation();
      } else {
        this.timer -= window.main.ms;
      }
    }
  }
}
export default class GameCharacter {
  constructor(transform, statistics, boxes) {
    this.transform = transform;
    this.statistics = statistics;
    this.boxes = boxes;
    this.transform.x = 200 + this.boxes.map.width / 2;
    this.transform.y = this.boxes.map.height / 2;
    this.controlAnimation = new ControlAnimation(this);
    this.wheelMove = new WheelMove(this);
    this.x = 0;
    this.y = 0;
    this.xMove = 0;
    this.yMove = 0;
    this.xSteps = 50;
    this.ySteps = 50;
    this.spawn();
  }
  spawn() {
    let { xBox, yBox } = this.boxes.map.free();
    let { x, y } = this.boxes.map.pixel(xBox, yBox);
    this.x = x;
    this.y = y;
  }
  move() {
    let newX = this.x;
    let newY = this.y;
    if (this.xSteps <= 0) {
      this.xSteps = 100;
      newX--;
    } else if (this.xSteps >= 100) {
      this.xSteps = 0;
      newX++;
    } else {
      this.xSteps += this.xMove;
    }
    if (this.ySteps <= 0) {
      this.ySteps = 100;
      newY--;
    } else if (this.ySteps >= 100) {
      this.ySteps = 0;
      newY++;
    } else {
      this.ySteps += this.yMove;
    }
    if (this.boxes.map.collision(newX, newY) === true) {
      return;
    }
    this.x = newX;
    this.y = newY;
  }
  statisticsBar() {
    let keys = ["name", "attack", "defense", "health", "magic"];
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = this.statistics[key];
      let text = `${key} ${value}`;
      let y = 30 * i;
      window.main.draw.word(text, 10, y, 30);
    }
  }
  update() {
    this.statisticsBar();
    this.wheelMove.update();
    this.controlAnimation.update();
    this.move();
  }
}