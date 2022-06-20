import Burst from "../Effects/Burst.js";
export default class Attack {
  constructor(Enemy, Player, statistics, end) {
    this.Enemy = Enemy;
    this.Player = Player;
    this.statistics = statistics;
    this.can = false;
    this.timer = 0;
    this.end = end;
    this.Effects = [];
  }
  updateEffects() {
    for (let index = 0; index < this.Effects.length; index++) {
      if (this.Effects[index].destroy === false) {
        this.Effects[index].update();
      } else {
        this.Effects.splice(index, 1);
        this.updateEffects();
        break;
      }
    }
  }
  update() {
    if (this.timer <= 0) {
      this.can = true;
    } else {
      this.timer -= window.Main.ms;
    }
    this.updateEffects();
  }
  lookCharacter() {
    let xDifference = this.Enemy.Entity.x - this.Player.Entity.x;
    let yDifference = this.Enemy.Entity.y - this.Player.Entity.y;
    if (xDifference < yDifference) {
      if (xDifference < 0) {
        this.Enemy.Enemy.changeAnimation("right");
      } else if (xDifference > 0) {
        this.Enemy.Enemy.changeAnimation("left");
      }
    } else if (yDifference < xDifference) {
      if (yDifference < 0) {
        this.Enemy.Enemy.changeAnimation("down");
      } else if (yDifference > 0) {
        this.Enemy.Enemy.changeAnimation("up");
      }
    }
  }
  range() {
    this.lookCharacter();
    if (this.can === true) {
      this.can = false;
      this.timer = this.end;
      let transform = {
        x: this.Player.Entity.x, y: this.Player.Entity.y,
        width: this.Enemy.Entity.Boxes.boxWidth,
        height: this.Enemy.Entity.Boxes.boxHeight,
      };
      transform.x -= transform.width / 2;
      transform.y -= transform.height / 2;
      this.Effects.push(
        Burst(transform, 50)
      );
      if (this.Player.Entity.statistics.health > 0) {
        this.Player.Entity.statistics.health -= this.statistics.attack;
      }
    }
  }
}