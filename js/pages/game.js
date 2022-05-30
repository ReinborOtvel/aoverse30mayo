import boxes from "../elements/boxes.js";
import character from "../elements/character/character.js";
import enemiesRandom from "../elements/enemies/random.js";
export default class game {
  constructor() {
    window.main.remove();
    this.uppercaseAddress = window.localStorage.getItem("address").toUpperCase();
    this.information = JSON.parse(window.localStorage.getItem("information"));
    this.statistics = this.information.statistics[this.uppercaseAddress];
    this.leader = this.information.leader[this.uppercaseAddress];
    this.limbsLeader = this.information.limbs[this.leader];
    this.limbs = this.information.limbs[this.uppercaseAddress];
    this.boxes = new boxes(10);
    this.character = {
      transform: {
        x: 0,
        y: 0,
        width: this.boxes.boxWidth / 2,
        height: this.boxes.boxHeight / 2,
      },
      speed: 10,
    };
    this.character = new character(this.character.transform, this.statistics, this.boxes, this.character.speed);
    this.character.freeBox();
    this.enemies = {
      numberEnemies: 2,
      transform: {
        x: 0,
        y: 0,
        width: this.boxes.boxWidth,
        height: this.boxes.boxHeight,
      },
      speeds: [6, 8, 10, 12],
    };
    this.enemies = enemiesRandom(this.enemies.numberEnemies, this.enemies.transform, this.boxes, this.enemies.speeds);
    for (let index in this.enemies) {
      this.enemies[index].freeBox();
    }
  }
  keydown(key) {
    this.character.keydown(key);
  }
  keyup(key) {
    this.character.keyup(key);
  }
  draw(ms, deltaTime) {
    this.character.move(deltaTime);
    this.character.nextSprite(ms);
    for (let index in this.enemies) {
      this.enemies[index].moveKey();
      this.enemies[index].move(deltaTime);
      this.enemies[index].nextSprite(ms);
    }
    this.boxes.draw();
    this.character.draw(false);
    for (let index in this.enemies) {
      this.enemies[index].draw(false);
    }
  }
}