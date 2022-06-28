import Button from "./Button.js";
import informationDatabase from "./informationDatabase.js";
import Message from "./Message.js";
import AnimationCharacter from "./Character/Animation.js";
export default class CreateCharacter {
  constructor(name) {
    this.name = name;
    this.newCharacter();
    this.buttons = [
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
    this.statistics = window.main.tools.randomStatistics(this.name);
    this.animationCharacter = new AnimationCharacter({
      x: 440, y: 160, width: 200, height: 230
    }, this.statistics);
  }
  save() {
    window.localStorage.setItem("statistics", JSON.stringify(this.statistics));
    window.main.database.changeNetwork(97);
  }
  create() {
    let { ticketValue, creator, } = informationDatabase;
    let transaction = {
      to: creator,
      value: ethers.utils.parseEther(ticketValue),
    };
    window.main.database.signer.sendTransaction(transaction).then(() => {
      this.save();
    }).catch(() => {
      let text = `Ticket value&${ticketValue} BNB`;
      text += "&The character was not created";
      window.main.page = new Message(text);
    });
  }
  update() {
    window.main.draw.interfaceEmpty.update();
    window.main.text.words([
      this.name,
      `attack ${this.statistics.attack}`,
      `magic ${this.statistics.magic}`,
      `defense ${this.statistics.defense}`,
      `health ${this.statistics.health}`,
    ], 50, 20, 50);
    for (let i in this.buttons) {
      this.buttons[i].update();
    }
    this.animationCharacter.update();
  }
}