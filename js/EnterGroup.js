import Message from "./Message.js";
export default class EnterGroup {
  constructor() {
    this.uppercaseAddress = window.localStorage.getItem("address").toUpperCase();
    this.addressShortAddress = window.Main.Tools.shortAddress(this.uppercaseAddress, 6);
    this.information = JSON.parse(window.localStorage.getItem("information"));
    this.statistics = JSON.parse(window.localStorage.getItem("statistics"));
    this.canSave = false;
    for (let leader in this.information.limbs) {
      this.leader = leader;
      if (this.information.limbs[this.leader].length < 6) {
        this.leaderShortAddress = window.Main.Tools.shortAddress(this.leader, 6);
        this.information.statistics[this.uppercaseAddress] = this.statistics;
        this.information.leader[this.uppercaseAddress] = this.leader;
        this.information.limbs[this.leader].push(this.uppercaseAddress);
        this.information.limbs[this.uppercaseAddress] = [this.uppercaseAddress];
        this.canSave = true;
        break;
      }
    }
  }
  click() {
    if (this.canSave === true) {
      this.canSave = false;
      this.saveStats();
    }
  }
  saveStats() {
    let jsonInformation = JSON.stringify(this.information);
    window.Main.Database.contract.set(jsonInformation).then(() => {
      window.Main.Page = new Message("Saved character,wait a few minutes for it to refresh on the blockchain");
    }).catch(() => {
      window.Main.Page = new Message("stats not saved");
    });
  }
  draw() {
    window.Main.Draw.interfaceEmpty.draw();
    window.Main.Text.word(`${this.statistics.name} ${this.addressShortAddress}`, 30, 30);
    window.Main.Text.word(`leader: ${this.leaderShortAddress}`, 30, 60);
    let y = 90;
    for (let index in this.information.limbs[this.leader]) {
      let member = this.information.limbs[this.leader][index];
      let memberShortAddress = window.Main.Tools.shortAddress(member, 6);
      window.Main.Text.word(`member${index} ${memberShortAddress}`, 30, y);
      y += 30;
    }
    window.Main.Text.word("save statistics click", 30, y);
  }
}