import AnimationCharacter from "./Animation.js";
class WheelMove {
  constructor(GameCharacter) {
    this.GameCharacter = GameCharacter;
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
      this.GameCharacter.yMove = -1;
      this.y = this.yInitial - this.size;
    } else if (key === "s") {
      this.GameCharacter.yMove = 1;
      this.y = this.yInitial + this.size;
    } else if (key === "a") {
      this.GameCharacter.xMove = -1;
      this.x = this.xInitial - this.size;
    } else if (key === "d") {
      this.GameCharacter.xMove = 1;
      this.x = this.xInitial + this.size;
    }
  }
  keyup(event) {
    let key = event.key;
    if (key === "w" || key === "s") {
      this.GameCharacter.yMove = 0;
      this.y = this.yInitial;
    } else if (key === "a" || key === "d") {
      this.GameCharacter.xMove = 0;
      this.x = this.xInitial;
    }
  }
  update() {
    window.Main.Ctx.beginPath();
    window.Main.Ctx.strokeStyle = "#ffffff";
    window.Main.Ctx.arc(this.xInitial, this.yInitial, this.size + 25, 0, 360);
    window.Main.Ctx.stroke();
    window.Main.Ctx.beginPath();
    window.Main.Ctx.arc(this.x, this.y, 20, 0, 360);
    window.Main.Ctx.stroke();
  }
}
class ControlAnimation {
  constructor(GameCharacter, transform, statistics) {
    this.GameCharacter = GameCharacter;
    this.AnimationCharacter = new AnimationCharacter(transform, statistics);
    this.sprite = 0;
    this.maximum = 6;
    this.name = "down";
    this.timer = 0;
    this.timerEnd = 200;
    this.stop = false;
  }
  animation() {
    if (this.GameCharacter.yMove === -1) {
      this.name = "up";
      this.maximum = 6;
    } else if (this.GameCharacter.yMove === 1) {
      this.name = "down";
      this.maximum = 6;
    } else if (this.GameCharacter.xMove === -1) {
      this.name = "left";
      this.maximum = 5;
    } else if (this.GameCharacter.xMove === 1) {
      this.name = "right";
      this.maximum = 5;
    }
    if (this.GameCharacter.xMove !== 0 || this.GameCharacter.yMove !== 0) {
      this.sprite++;
      if (this.sprite >= this.maximum) {
        this.sprite = 0;
      }
    }
    this.AnimationCharacter.animation(this.name, this.sprite);
  }
  update() {
    this.AnimationCharacter.update();
    if (this.stop === false) {
      if (this.timer <= 0) {
        this.timer = this.timerEnd;
        this.animation();
      } else {
        this.timer -= window.Main.ms;
      }
    }
  }
}
export default class GameCharacter {
  constructor(transform, statistics) {
    this.statistics = statistics;
    this.ControlAnimation = new ControlAnimation(this, transform, statistics);
    this.WheelMove = new WheelMove(this);
    this.x = 0;
    this.y = 0;
    this.xMove = 0;
    this.yMove = 0;
  }
  move() {

  }
  statisticsBar() {
    let keys = ["name", "attack", "defense", "health", "magic"];
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = this.statistics[key];
      let text = `${key} ${value}`;
      let y = 30 * i;
      window.Main.Text.word(text, 10, y, 30);
    }
  }
  update() {
    this.statisticsBar();
    this.WheelMove.update();
    this.ControlAnimation.update();
  }
}