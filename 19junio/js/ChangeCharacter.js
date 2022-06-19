import Button from "./Button.js";
import Message from "./Message.js";
import AnimationCharacter from "./Character/Animation.js";
export default class ChangeCharacter {
  constructor() {
    this.statistics = window.localStorage.getItem("statistics");
    if (this.statistics === null) {
      window.Main.Page = new Message("You haven't created a character");
    } else {
      this.statistics = JSON.parse(this.statistics);
      this.AnimationCharacter = new AnimationCharacter({
        x: 440, y: 160, width: 200, height: 230
      }, this.statistics);
      this.Buttons = [
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
    this.statistics = window.Main.Tools.randomStatistics(this.statistics.name);
    this.AnimationCharacter = new AnimationCharacter({
      x: 440, y: 160, width: 200, height: 230
    }, this.statistics);
  }
  save() {
    window.localStorage.setItem("statistics", JSON.stringify(this.statistics));
    window.Main.Database.changeNetwork(97);
  }
  update() {
    window.Main.Draw.interfaceEmpty.update();
    if (this.statistics === null) {
      return;
    }
    window.Main.Text.words([
      this.statistics.name,
      `attack ${this.statistics.attack}`,
      `magic ${this.statistics.magic}`,
      `defense ${this.statistics.defense}`,
      `health ${this.statistics.health}`,
    ], 50, 20, 50);
    for (let index in this.Buttons) {
      this.Buttons[index].update();
    }
    this.AnimationCharacter.update();
  }
}