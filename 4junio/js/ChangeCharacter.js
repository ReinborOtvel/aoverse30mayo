import Message from "./Message.js";
import Button from "./Button.js";
import Character from "./Character/Character.js";
export default class ChangeCharacter {
  constructor() {
    this.statistics = window.localStorage.getItem("statistics");
    if (this.statistics === null) {
      window.Main.Page = new Message("You haven't created a character");
    } else {
      this.statistics = JSON.parse(this.statistics);
      this.Character = new Character({ x: 445, y: 180, width: 120, height: 150 }, this.statistics);
      this.Buttons = [
        new Button("New character", { x: 48, y: 239, width: 240, height: 27 }, () => {
          this.newCharacter();
        }),
        new Button("Create character", { x: 48, y: 285, width: 280, height: 27 }, () => {
          this.save();
        }),
      ];
    }
  }
  newCharacter() {
    this.statistics = window.Main.Tools.randomStatistics(this.statistics.name);
    this.Character = new Character({ x: 445, y: 180, width: 120, height: 150 }, this.statistics);
  }
  save() {
    window.localStorage.setItem("statistics", JSON.stringify(this.statistics));
    window.Main.Database.changeNetwork(97);
  }
  click() {
    for (let index in this.Buttons) {
      this.Buttons[index].click();
    }
  }
  draw() {
    window.Main.Draw.interfaceEmpty.draw();
    window.Main.Text.words([
      this.statistics.name,
      `attack ${this.statistics.attack}`,
      `magic ${this.statistics.magic}`,
      `defense ${this.statistics.defense}`,
      `health ${this.statistics.health}`,
    ], 50, 20, 50);
    for (let index in this.Buttons) {
      this.Buttons[index].draw();
    }
    this.Character.draw();
  }
}