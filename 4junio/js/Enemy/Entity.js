import Enemy from "./Enemy.js";
import Entity from "../Entity/Entity.js";
import Stingray from "./Stingray.js";
export default class EntityEnemy {
  constructor(Transform, index, Boxes, speed, Player) {
    this.Transform = Transform;
    this.Player = Player;
    this.index = index;
    this.Boxes = Boxes;
    this.speed = speed;
    this.Enemy = new Enemy(this.Transform, this.index);
    this.Entity = new Entity(this.Boxes, this.Enemy.Parts, this.speed);
    this.Entity.setTransform(this.Transform.x, this.Transform.y);
    switch (this.index) {
      case 0:
      default:
        this.Behaviour = new Stingray(this.Entity, this.Player);
        break;
    }
  }
  draw(ms, deltaTime) {
    this.Behaviour.chooseAction(ms, deltaTime);
    this.Entity.move(ms, deltaTime);
    this.Enemy.nextSprite(ms, deltaTime);
    this.Enemy.draw(ms, deltaTime);
  }
}