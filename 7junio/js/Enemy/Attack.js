export default class Attack {
  constructor(Entity, Player, statistics, end) {
    this.Entity = Entity;
    this.Player = Player;
    this.statistics = statistics;
    this.can = false;
    this.timer = 0;
    this.end = end;
  }
  update(ms, deltaTime) {
    if (this.timer <= 0) {
      this.can = true;
    } else {
      this.timer -= ms;
    }
  }
  range() {
    if (this.can === true) {
      this.can = false;
      this.timer = this.end;
      this.Player.Entity.statistics.life -= this.statistics.damage;
    }
  }
}