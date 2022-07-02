import Button from "./Button.js";
import Message from "./Message.js";
import AnimationCharacter from "./Character/Animation.js";
export default class ChangeCharacter {
  constructor() {
    this.statistics = window.localStorage.getItem("statistics");
    if (this.statistics === null) {
      window.main.page = new Message(["You haven't created a character"]);
    } else {
      this.statistics = JSON.parse(this.statistics);
      this.animationCharacter = new AnimationCharacter({
        x: 440, y: 160, width: 200, height: 230
      }, this.statistics);
      this.buttons = [
        new Button("New character", {
          x: 48, y: 239, width: 240, height: 27
        }, () => {
          this.newCharacter();
        }),
        new Button("Create character", {
          x: 48, y: 285, width: 280, height: 27
        }, () => {
          this.save();
        }),
      ];
    }
  }
  newCharacter() {
    this.statistics = window.main.tools.randomStatistics(this.statistics.name);
    this.animationCharacter = new AnimationCharacter({
      x: 440, y: 160, width: 200, height: 230
    }, this.statistics);
  }
  save() {
    window.localStorage.setItem("statistics", JSON.stringify(this.statistics));
    window.main.database.changeNetwork(97);
  }
  update() {
    window.main.draw.interfaceEmpty.update();
    if (this.statistics === null) {
      return;
    }
    window.main.draw.paragraph([
      this.statistics.name,
      `attack ${this.statistics.attack}`,
      `magic ${this.statistics.magic}`,
      `defense ${this.statistics.defense}`,
      `health ${this.statistics.health}`,
    ], 50, 50, 30);
    for (let i in this.buttons) {
      this.buttons[i].update();
    }
    this.animationCharacter.update();
  }
}