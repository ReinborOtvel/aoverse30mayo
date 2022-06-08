export default class MoveClickCharacter {
  constructor(Entity, Character) {
    this.Entity = Entity;
    this.Character = Character;
  }
  click() {
    if (window.Main.Click.use() === true) {
      this.xEnd = window.Main.Click.x;
      this.yEnd = window.Main.Click.y;
      let nameAnimation = undefined;
      if (this.Entity.x > this.xEnd) {
        this.Entity.xMove = -1;
        nameAnimation = "left";
      } else {
        this.Entity.xMove = 1;
        nameAnimation = "right";
      }
      if (this.Entity.y > this.yEnd) {
        this.Entity.yMove = -1;
        nameAnimation = "up";
      } else {
        this.Entity.yMove = 1;
        nameAnimation = "down";
      }
      this.xMove = this.Entity.xMove;
      this.yMove = this.Entity.yMove;
      this.xMoving = true;
      this.yMoving = true;
      this.Character.stopAnimation(false);
      this.Character.changeAnimation(nameAnimation);
    }
  }
  verify() {
    let nameAnimation = undefined;
    if (this.xMoving === true) {
      if (this.xMove === -1) {
        if (this.Entity.x <= this.xEnd) {
          this.Entity.xMove = 0;
          this.xMoving = false;
        }
      } else if (this.xMove === 1) {
        if (this.Entity.x >= this.xEnd) {
          this.Entity.xMove = 0;
          this.xMoving = false;
        }
      }
      if (this.xMove === -1) {
        nameAnimation = "left";
      } else if (this.xMove === 1) {
        nameAnimation = "right";
      }
    }
    if (this.yMoving === true) {
      if (this.yMove === -1) {
        if (this.Entity.y <= this.yEnd) {
          this.Entity.yMove = 0;
          this.yMoving = false;
        }
      } else if (this.yMove === 1) {
        if (this.Entity.y >= this.yEnd) {
          this.Entity.yMove = 0;
          this.yMoving = false;
        }
      }
      if (this.yMove === -1) {
        nameAnimation = "up";
      } else if (this.yMove === 1) {
        nameAnimation = "down";
      }
    }
    if (this.xMoving === false && this.yMoving === false) {
      this.Character.stopAnimation(true);
    } else {
      this.Character.stopAnimation(false);
      this.Character.changeAnimation(nameAnimation);
    }
  }
  update() {
    this.click();
    this.verify();
  }
}