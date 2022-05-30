import Character from "./Character/Character.js";
import informationDatabase from "./informationDatabase.js";
import Message from "./Message.js";
export default class CreateCharacter {
  constructor() {
    this.name = prompt("character's name");
    if (this.name !== null) {
      this.newCharacter();
    } else {
      window.location.reload();
    }
  }
  newCharacter() {
    this.statistics = window.Main.Tools.randomStatistics(this.name);
    this.Character = new Character({ x: 300, y: 180, width: 120, height: 150 }, this.statistics);
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
    if (window.Main.Click.verify(10, 190, 182, 248) === true) {
      this.newCharacter();
    } else if (window.Main.Click.verify(10, 257, 249, 283) === true) {
      this.create();
    }
  }
  draw() {
    window.Main.Draw.interfaceEmpty.draw();
    window.Main.Text.word(this.name, 10, 10);
    window.Main.Text.word(`attack ${this.statistics.attack}`, 10, 40);
    window.Main.Text.word(`magic ${this.statistics.magic}`, 10, 70);
    window.Main.Text.word(`defense ${this.statistics.defense}`, 10, 100);
    window.Main.Text.word(`health ${this.statistics.health}`, 10, 130);
    this.Character.draw();
    window.Main.Text.word("new click", 10, 190);
    window.Main.Text.word("create click", 10, 220);
  }
}