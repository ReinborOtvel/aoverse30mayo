import Button from "./Button.js";
import Character from "./Character/Character.js";
import informationDatabase from "./informationDatabase.js";
import Message from "./Message.js";
export default class CreateCharacter {
  constructor() {
    let name = prompt("character's name");
    if (name === null || name.length === 0) {
      name = "noname";
    }
    this.newCharacter(name);
    this.Buttons = [
      new Button("New character", {
        x: 48, y: 239, width: 240, height: 27
      }, () => {
        this.newCharacter(this.Character.statistics.name);
      }),
      new Button("Create character", {
        x: 48, y: 285, width: 280, height: 27
      }, () => {
        this.create();
      }),
    ];
  }
  newCharacter(name) {
    let statistics = window.Main.Tools.randomStatistics(name);
    this.Character = new Character({
      x: 445, y: 180, width: 120, height: 150
    }, statistics);
  }
  save() {
    window.localStorage.setItem("statistics", JSON.stringify(this.Character.statistics));
    window.Main.Database.changeNetwork(97);
  }
  create() {
    let { ticketValue, creator, } = informationDatabase;
    let transaction = {
      to: creator,
      value: ethers.utils.parseEther(ticketValue),
    };
    window.Main.Database.signer.sendTransaction(transaction).then(() => {
      this.save();
    }).catch(() => {
      let text = `Ticket value&${ticketValue} BNB`;
      text += "&The character was not created";
      window.Main.Page = new Message(text);
    });
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