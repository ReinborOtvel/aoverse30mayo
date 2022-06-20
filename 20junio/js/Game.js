import Boxes from "./Boxes/Boxes.js";
import GameCharacter from "./Character/Character.js";
import EntityEnemy from "./Enemy/Entity.js";
import EntityGroup from "./Entity/Group.js";
export default class Game {
  constructor() {
    this.Boxes = new Boxes(0);
    let statistics = JSON.parse(window.localStorage.getItem("statistics"));
    this.Player = new GameCharacter({
      x: 0, y: 0,
      width: this.Boxes.boxWidth / 2,
      height: this.Boxes.boxHeight / 2,
    }, statistics, this.Boxes);
    this.Entities = [this.Player,];
    this.spawnEnemies();
    this.EntityGroup = new EntityGroup(this.Entities);
    window.localStorage.setItem("gameOffline", "true");
  }
  spawnEnemies() {
    let Transform = {
      x: 0, y: 0,
      width: this.Boxes.boxWidth,
      height: this.Boxes.boxHeight,
    };
    for (let y = 0; y < this.Boxes.numberBoxesVertical; y++) {
      for (let x = 0; x < this.Boxes.numberBoxesHorizontal; x++) {
        let box = this.Boxes.boxes[y][x];
        switch (box) {
          case 4:
            Transform.x = x * this.Boxes.boxWidth;
            Transform.y = y * this.Boxes.boxHeight;
            // let index = window.Main.Tools.randomRange(9);
            let index = 0;
            let enemy = new EntityEnemy(Transform, index, this.Boxes, {
              attack: 5,
            }, this.Player);
            this.Entities.push(enemy);
            break;
        }
      }
    }
  }
  update() {
    this.Boxes.update();
    this.EntityGroup.update();
  }
}