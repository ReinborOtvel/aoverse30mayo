import ApproachPlayer from "./ApproachPlayer.js";
import Attack from "./Attack.js";
export default class Stingray {
  constructor(Enemy, Player, statistics) {
    this.statistics = statistics;
    this.ApproachPlayer = new ApproachPlayer(Enemy, Player, 500, 80, 80);
    this.Attack = new Attack(Enemy, Player, statistics, 2000);
  }
  update() {
    this.ApproachPlayer.update();
    this.Attack.update();
    if (this.ApproachPlayer.range === true) {
      this.Attack.range();
    }
  }
}