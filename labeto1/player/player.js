import PlayerParts from "./playerParts.js";
import DrawImage from "./drawImage.js";
export default class Player {
  constructor(transform, callback) {
    this.transform = transform;
    this.animation = "down";
    PlayerParts({ head: 2000, armor: 3, weapon: 16001, }, ({ head, armor, weapon }) => {
      this.head = head;
      this.armor = armor;
      this.weapon = weapon;
      callback();
    });
  }
  draw() {
    DrawImage(this.head[this.animation][0], this.transform);
    DrawImage(this.armor[this.animation][0], this.transform);
    DrawImage(this.weapon[this.animation][0], this.transform);
  }
}