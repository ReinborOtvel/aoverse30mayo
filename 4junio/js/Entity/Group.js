export default class EntityGroup {
  constructor(Entities) {
    this.Entities = Entities;
    this.timerOrderInitial = 1000;
    this.timerOrder = 0;
  }
  orderDrawing(ms, deltaTime) {
    if (this.timerOrder <= 0) {
      this.timerOrder = this.timerOrderInitial;
      let newEntities = [];
      for (let index = 0; index < this.Entities.length; index++) {
        let EntityIndex = this.Entities[index];
        newEntities.push(EntityIndex);
        let { x: xIndex, y: yIndex } = EntityIndex.Entity;
        comparePosition: for (let index1 = 0; index1 < newEntities.length; index1++) {
          let EntityIndex1 = newEntities[index1];
          let { x: xIndex1, y: yIndex1 } = EntityIndex1.Entity;
          if (xIndex < xIndex1 || yIndex < yIndex1) {
            newEntities[index1] = EntityIndex;
            newEntities[index] = EntityIndex1;
            break comparePosition;
          }
        }
      }
      this.Entities = newEntities;
    } else {
      this.timerOrder -= ms;
    }
  }
  draw(ms, deltaTime) {
    this.orderDrawing(ms, deltaTime);
    for (let index = 0; index < this.Entities.length; index++) {
      this.Entities[index].draw(ms, deltaTime);
    }
  }
}