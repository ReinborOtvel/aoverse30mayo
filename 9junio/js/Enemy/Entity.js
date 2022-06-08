import Enemy from "./Enemy.js";
import Entity from "../Entity/Entity.js";
import Stingray from "./Stingray.js";
export default class EntityEnemy {
  constructor(Transform, index, Boxes, statistics, Player) {
    this.Enemy = new Enemy(Transform, index);
    this.Entity = new Entity(Boxes, this.Enemy.Parts, statistics);
    this.Entity.setTransform(Transform.x, Transform.y);
    switch (index) {
      case 0:
      default:
        this.Behaviour = new Stingray(this, Player, statistics);
        break;
    }
  }
  animation() {
    let nameAnimation = undefined;
    if (this.Entity.yMove === -1) {
      nameAnimation = "up";
    } else if (this.Entity.yMove === 1) {
      nameAnimation = "down";
    } else if (this.Entity.xMove === -1) {
      nameAnimation = "left";
    } else if (this.Entity.xMove === 1) {
      nameAnimation = "right";
    }
    if (this.Entity.yMove === 0 && this.Entity.xMove === 0) {
      this.Enemy.stopAnimation(true);
    } else {
      this.Enemy.stopAnimation(false);
      this.Enemy.changeAnimation(nameAnimation);
    }
  }
  update() {
    this.Behaviour.update();
    this.Entity.move();
    this.animation();
    this.Enemy.nextSprite();
    this.Enemy.update();
  }
}