import Button from "./Button.js";
import Character from "./Character/Character.js";
import informationDatabase from "./informationDatabase.js";
import Message from "./Message.js";
export default class CreateCharacter {
  constructor() {
    this.name = prompt("character's name");
    if (this.name === null || this.name.length === 0) {
      this.name = "noname";
    }
    this.newCharacter();
    this.Buttons = [
      new Button("New character", { x: 48, y: 239, width: 240, height: 27 }, () => {
        this.newCharacter();
      }),
      new Button("Create character", { x: 48, y: 285, width: 280, height: 27 }, () => {
        this.create();
      }),
    ];
  }
  newCharacter() {
    this.statistics = window.Main.Tools.randomStatistics(this.name);
    this.Character = new Character({ x: 445, y: 180, width: 120, height: 150 }, this.statistics);
  }
  save() {
    window.localStorage.setItem("statistics", JSON.stringify(this.statistics));
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
  click() {
    for (let index in this.Buttons) {
      this.Buttons[index].click();
    }
  }
  draw() {
    window.Main.Draw.interfaceEmpty.draw();
    window.Main.Text.words([
      this.name,
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