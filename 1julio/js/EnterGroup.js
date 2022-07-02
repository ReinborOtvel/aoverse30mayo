import Message from "./Message.js";
import Button from "./Button.js";
import ChangeCharacter from "./ChangeCharacter.js";
import AnimationCharacter from "./Character/Animation.js";
export default class EnterGroup {
  constructor() {
    this.canSave = false;
    this.statistics = JSON.parse(window.localStorage.getItem("statistics"));
    this.animationCharacter = new AnimationCharacter({
      x: 470, y: 230, width: 130, height: 160,
    }, this.statistics);
    this.enter();
    this.buttons = [
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
          window.main.page = new ChangeCharacter();
        }
      }),
    ];
  }
  enter() {
    let uppercaseAddress = window.main.database.address.toUpperCase();
    let information = JSON.parse(window.localStorage.getItem("information"));
    for (let leader in information.limbs) {
      if (information.limbs[leader].length < 6) {
        information.statistics[uppercaseAddress] = this.statistics;
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
    window.main.database.contract.set(jsonInformation).then(() => {
      window.main.page = new Message(["Saved character", "wait a few minutes", "for it to refresh", "on the blockchain"]);
    }).catch(() => {
      window.main.page = new Message(["stats not saved"]);
    });
  }
  update() {
    window.main.draw.interfaceEmpty.update();
    let texts = [];
    let uppercaseAddress = window.main.database.address.toUpperCase();
    let addressShort = window.main.tools.shortAddress(uppercaseAddress, 3);
    let leader = this.information.leader[uppercaseAddress];
    for (let i = 0; i < this.information.limbs[leader].length; i++) {
      let member = this.information.limbs[leader][i];
      let memberShort = window.main.tools.shortAddress(member, 3);
      if (i == 0) {
        texts.push(`leader ${memberShort}`);
      } else if (addressShort === memberShort) {
        texts.push(`you ${memberShort}`);
      } else {
        texts.push(`member${i} ${memberShort}`);
      }
    }
    window.main.draw.paragraph(texts, 50, 140, 30);
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].update();
    }
    this.animationCharacter.update();
  }
}