export default class ApproachPlayer {
  constructor(Enemy, Player, end, xDistance, yDistance) {
    this.range = false;
    this.Enemy = Enemy;
    this.Player = Player;
    this.end = end;
    this.timer = 0;
    this.xDistance = xDistance;
    this.yDistance = yDistance;
  }
  update() {
    if (this.timer <= 0) {
      this.timer = this.end;
      let xDifference = this.Enemy.Entity.x - this.Player.Entity.x;
      let yDifference = this.Enemy.Entity.y - this.Player.Entity.y;
      let xRange = xDifference >= -this.xDistance && xDifference <= this.xDistance;
      let yRange = yDifference >= -this.yDistance && yDifference <= this.yDistance;
      if (xRange === true) {
        this.Enemy.Entity.xMove = 0;
      } else if (xDifference < 0) {
        this.Enemy.Entity.xMove = 1;
      } else if (xDifference > 0) {
        this.Enemy.Entity.xMove = -1;
      }
      if (yRange === true) {
        this.Enemy.Entity.yMove = 0;
      } else if (yDifference < 0) {
        this.Enemy.Entity.yMove = 1;
      } else if (yDifference > 0) {
        this.Enemy.Entity.yMove = -1;
      }
      this.range = xRange && yRange;
    } else {
      this.timer -= window.Main.ms;
    }
  }
}