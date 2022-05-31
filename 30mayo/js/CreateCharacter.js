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
      window.Main.Page = new Message("The character was not created");
    });
  }
  click() {
    if (window.Main.Click.verify(48, 239, 327, 277) === true) {
      this.newCharacter();
    } else if (window.Main.Click.verify(48, 285, 419, 322) === true) {
      this.create();
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
      "new click",
      "create click",
    ], 50, 10);
    this.Character.draw();
  }
}