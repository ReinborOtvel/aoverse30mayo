export default class EntityGroup {
  constructor(Entities) {
    this.Entities = Entities;
    this.timerOrderInitial = 250;
    this.timerOrder = 0;
  }
  orderDrawing() {
    if (this.timerOrder <= 0) {
      this.timerOrder = this.timerOrderInitial;
      let newEntities = [];
      for (let index = this.Entities.length - 1; index >= 0; index--) {
        newEntities.push(this.Entities[index]);
      }
      this.Entities = newEntities;
    } else {
      this.timerOrder -= window.Main.ms;
    }
  }
  update() {
    this.orderDrawing();
    for (let index = 0; index < this.Entities.length; index++) {
      this.Entities[index].update();
    }
  }
}