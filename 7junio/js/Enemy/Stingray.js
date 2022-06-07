import ApproachPlayer from "./ApproachPlayer.js";
import Attack from "./Attack.js";
export default class Stingray {
  constructor(Entity, Player, statistics) {
    this.statistics = statistics;
    this.ApproachPlayer = new ApproachPlayer(Entity, Player, 500, 80, 80);
    this.Attack = new Attack(Entity, Player, statistics, 2000);
  }
  update(ms, deltaTime) {
    this.ApproachPlayer.update(ms, deltaTime);
    this.Attack.update(ms, deltaTime);
    if (this.ApproachPlayer.range === true) {
      this.Attack.range();
    }
  }
}