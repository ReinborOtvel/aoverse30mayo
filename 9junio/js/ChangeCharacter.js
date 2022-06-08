import Message from "./Message.js";
import Button from "./Button.js";
import Character from "./Character/Character.js";
export default class ChangeCharacter {
  constructor() {
    let statistics = window.localStorage.getItem("statistics");
    if (statistics === null) {
      window.Main.Page = new Message("You haven't created a character");
    } else {
      statistics = JSON.parse(statistics);
      this.Character = new Character({
        x: 445, y: 180, width: 120, height: 150
      }, statistics);
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
    let statistics = window.Main.Tools.randomStatistics(this.Character.statistics.name);
    this.Character = new Character({
      x: 445, y: 180, width: 120, height: 150
    }, statistics);
  }
  save() {
    window.localStorage.setItem("statistics", JSON.stringify(this.Character.statistics));
    window.Main.Database.changeNetwork(97);
  }
  update() {
    window.Main.Draw.interfaceEmpty.update();
    window.Main.Text.words([
      this.Character.statistics.name,
      `attack ${this.Character.statistics.attack}`,
      `magic ${this.Character.statistics.magic}`,
      `defense ${this.Character.statistics.defense}`,
      `health ${this.Character.statistics.health}`,
    ], 50, 20, 50);
    for (let index in this.Buttons) {
      this.Buttons[index].update();
    }
    this.Character.update();
  }
}