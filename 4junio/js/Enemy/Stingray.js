export default class Stingray {
  constructor(Entity, Player) {
    this.Entity = Entity;
    this.Boxes = this.Entity.Boxes;
    this.Player = Player;
    this.timerEndChooseAction = 10000;
    this.timerChooseAction = 0;
  }
  chooseAction(ms, deltaTime) {
    if (this.timerChooseAction <= 0) {
      this.timerChooseAction = this.timerEndChooseAction;
      let { x: xPlayer, y: yPlayer } = this.Player.Entity;
      let { x, y } = this.Entity;
      let { xBox: xBoxPlayer, yBox: yBoxPlayer } = this.Boxes.boxesPosition(xPlayer, yPlayer);
      let { xBox, yBox } = this.Boxes.boxesPosition(x, y);
      let xDifference = xBox - xBoxPlayer;
      let yDifference = yBox - yBoxPlayer;
      if (xDifference >= -2 && xDifference <= 2 && yDifference >= -2 && yDifference <= 2) {
        this.attack();
        this.Entity.yMove = 0;
        this.Entity.xMove = 0;
      } else {
        if (xDifference < 0) {
          this.Entity.xMove = -1;
        } else if (xDifference > 0) {
          this.Entity.xMove = 1;
        }
        if (yDifference < 0) {
          this.Entity.yMove = -1;
        } else if (yDifference > 0) {
          this.Entity.yMove = 1;
        }
      }
    } else {
      this.timerChooseAction -= ms;
    }
  }
  attack() { }
}