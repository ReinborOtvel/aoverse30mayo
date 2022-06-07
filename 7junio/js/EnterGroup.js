import Message from "./Message.js";
import Button from "./Button.js";
import ChangeCharacter from "./ChangeCharacter.js";
import Character from "./Character/Character.js";
export default class EnterGroup {
  constructor() {
    this.canSave = false;
    let statistics = JSON.parse(window.localStorage.getItem("statistics"));
    this.Character = new Character({
      x: 470, y: 260, width: 110, height: 130,
    }, statistics);
    this.enter();
    this.Buttons = [
      new Button("save statistics", {
        x: 30, y: 40, width: 390, height: 40
      }, () => {
        if (this.canSave === true) {
          this.canSave = false;
          this.saveStats();
        }
      }),
      new Button("change character", {
        x: 30, y: 90, width: 405, height: 40
      }, () => {
        if (this.canSave === true) {
          window.Main.Page = new ChangeCharacter();
        }
      }),
    ];
  }
  enter() {
    let uppercaseAddress = window.localStorage.getItem("address").toUpperCase();
    let information = JSON.parse(window.localStorage.getItem("information"));
    for (let leader in information.limbs) {
      if (information.limbs[leader].length < 6) {
        information.statistics[uppercaseAddress] = this.Character.statistics;
        information.leader[uppercaseAddress] = leader;
        information.limbs[leader].push(uppercaseAddress);
        information.limbs[uppercaseAddress] = [uppercaseAddress];
        this.canSave = true;
        this.information = information;
        break;
      }
    }
  }
  saveStats() {
    let jsonInformation = JSON.stringify(this.information);
    window.Main.Database.contract.set(jsonInformation).then(() => {
      window.Main.Page = new Message("Saved character,&wait a few minutesfor it to refresh&on the blockchain");
    }).catch(() => {
      window.Main.Page = new Message("stats not saved");
    });
  }
  update(ms, deltaTime) {
    window.Main.Draw.interfaceEmpty.update();
    let texts = [];
    let uppercaseAddress = window.localStorage.getItem("address").toUpperCase();
    let addressShort = window.Main.Tools.shortAddress(uppercaseAddress, 3);
    let leader = this.information.leader[uppercaseAddress];
    for (let index = 0; index < this.information.limbs[leader].length; index++) {
      let member = this.information.limbs[leader][index];
      let memberShort = window.Main.Tools.shortAddress(member, 3);
      if (index == 0) {
        texts.push(`leader ${memberShort}`);
      } else if (addressShort === memberShort) {
        texts.push(`you ${memberShort}`);
      } else {
        texts.push(`member${index} ${memberShort}`);
      }
    }
    window.Main.Text.words(texts, 50, 140, 40);
    for (let index = 0; index < this.Buttons.length; index++) {
      this.Buttons[index].update();
    }
    this.Character.update();
  }
}