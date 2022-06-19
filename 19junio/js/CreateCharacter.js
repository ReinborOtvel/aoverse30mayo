import Button from "./Button.js";
import informationDatabase from "./informationDatabase.js";
import Message from "./Message.js";
import AnimationCharacter from "./Character/Animation.js";
export default class CreateCharacter {
  constructor() {
    this.Buttons = [
      new Button("New character", {
        x: 48, y: 239, width: 240, height: 27
      }, () => {
        this.newCharacter();
      }),
      new Button("Create character", {
        x: 48, y: 285, width: 280, height: 27
      }, () => {
        this.create();
      }),
    ];
  }
  newCharacter() {
    let name = window.localStorage.getItem("name");
    this.statistics = window.Main.Tools.randomStatistics(name);
    this.AnimationCharacter = new AnimationCharacter({
      x: 440, y: 160, width: 200, height: 230
    }, this.statistics);
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
  update() {
    window.Main.Draw.interfaceEmpty.update();
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