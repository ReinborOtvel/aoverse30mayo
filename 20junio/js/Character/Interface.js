class StatisticsBar {
  constructor(Character) {
    this.Character = Character;
  }
  update() {
    let keys = ["name", "attack", "defense", "health", "magic"];
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = this.Character.statistics[key];
      let text = `${key} ${value}`;
      let y = 30 * i;
      window.Main.Text.word(text, 10, y, 30);
    }
  }
}
class WheelMove {
  constructor(Character) {
    this.Character = Character;
    this.xInitial = 70;
    this.yInitial = 280;
    this.x = this.xInitial;
    this.y = this.yInitial;
    this.size = 25;
    window.addEventListener("keydown", event => {
      let key = event.key;
      if (key === "w") {
        this.Character.yMove = -1;
        this.y = this.yInitial - this.size;
      } else if (key === "s") {
        this.Character.yMove = 1;
        this.y = this.yInitial + this.size;
      } else if (key === "a") {
        this.Character.xMove = -1;
        this.x = this.xInitial - this.size;
      } else if (key === "d") {
        this.Character.xMove = 1;
        this.x = this.xInitial + this.size;
      }
    });
    window.addEventListener("keyup", event => {
      let key = event.key;
      if (key === "w") {
        this.Character.yMove = 0;
        this.y = this.yInitial;
      } else if (key === "s") {
        this.Character.yMove = 0;
        this.y = this.yInitial;
      } else if (key === "a") {
        this.Character.xMove = 0;
        this.x = this.xInitial;
      } else if (key === "d") {
        this.Character.xMove = 0;
        this.x = this.xInitial;
      }
    });
  }
  update() {
    window.Main.Ctx.beginPath();
    window.Main.Ctx.strokeStyle = "#ffffff";
    window.Main.Ctx.arc(this.xInitial, this.yInitial, this.size + 25, 0, 360);
    window.Main.Ctx.stroke();
    window.Main.Ctx.beginPath();
    window.Main.Ctx.arc(this.x, this.y, 20, 0, 360);
    window.Main.Ctx.stroke();
  }
}
export default class Interface {
  constructor(Character) {
    this.Character = Character;
    this.StatisticsBar = new StatisticsBar(this.Character);
    this.WheelMove = new WheelMove(this.Character);
  }
  update() {
    this.StatisticsBar.update();
    this.WheelMove.update();
  }
}