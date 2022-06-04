import Message from "./Message.js";
import Button from "./Button.js";
import ChangeCharacter from "./ChangeCharacter.js";
export default class EnterGroup {
  constructor() {
    this.uppercaseAddress = window.localStorage.getItem("address").toUpperCase();
    this.addressShortAddress = window.Main.Tools.shortAddress(this.uppercaseAddress, 3);
    this.information = JSON.parse(window.localStorage.getItem("information"));
    this.statistics = JSON.parse(window.localStorage.getItem("statistics"));
    this.canSave = false;
    for (let leader in this.information.limbs) {
      this.leader = leader;
      if (this.information.limbs[this.leader].length < 6) {
        this.leaderShortAddress = window.Main.Tools.shortAddress(this.leader, 3);
        this.information.statistics[this.uppercaseAddress] = this.statistics;
        this.information.leader[this.uppercaseAddress] = this.leader;
        this.information.limbs[this.leader].push(this.uppercaseAddress);
        this.information.limbs[this.uppercaseAddress] = [this.uppercaseAddress];
        this.canSave = true;
        break;
      }
    }
    this.Buttons = [
      new Button("save statistics", { x: 30, y: 40, width: 390, height: 40 }, () => {
        if (this.canSave === true) {
          this.canSave = false;
          this.saveStats();
        }
      }),
      new Button("change character", { x: 30, y: 90, width: 405, height: 40 }, () => {
        if (this.canSave === true) {
          window.Main.Page = new ChangeCharacter();
        }
      }),
    ];
  }
  click() {
    for (let index in this.Buttons) {
      this.Buttons[index].click();
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
  draw() {
    window.Main.Draw.interfaceEmpty.draw();
    let texts = [];
    for (let index in this.information.limbs[this.leader]) {
      let member = this.information.limbs[this.leader][index];
      let memberShortAddress = window.Main.Tools.shortAddress(member, 3);
      if (index == 0) {
        texts.push(`leader ${memberShortAddress}`);
      } else if (this.addressShortAddress === memberShortAddress) {
        texts.push(`you ${memberShortAddress}`);
      } else {
        texts.push(`member${index} ${memberShortAddress}`);
      }
    }
    window.Main.Text.words(texts, 50, 140, 40);
    for (let index in this.Buttons) {
      this.Buttons[index].draw();
    }
  }
}