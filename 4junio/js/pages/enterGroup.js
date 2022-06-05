import message from "./message.js";
export default class enterGroup {
  constructor() {
    window.main.remove();
    this.uppercaseAddress = window.localStorage.getItem("address").toUpperCase();
    this.addressShortAddress = window.main.tools.shortAddress(this.uppercaseAddress, 6);
    this.information = JSON.parse(window.localStorage.getItem("information"));
    this.statistics = JSON.parse(window.localStorage.getItem("statistics"));
    this.name = this.statistics.name;
    this.canSave = false;
    this.loadingInformation = false;
    for (let leader in this.information.limbs) {
      this.leader = leader;
      if (this.information.limbs[this.leader].length < 6) {
        this.information.statistics[this.uppercaseAddress] = this.statistics;
        this.information.leader[this.uppercaseAddress] = this.leader;
        this.information.limbs[this.leader].push(this.uppercaseAddress);
        this.limbsLeader = this.information.limbs[this.leader];
        this.information.limbs[this.uppercaseAddress] = [this.uppercaseAddress];
        this.canSave = true;
        break;
      }
    }
    window.main.buttons.add({
      transformJSON: { x: 10, y: 10, xEnd: 100, yEnd: 100 },
      functio: () => {
        if (this.canSave === true) {
          if (this.loadingInformation === false) {
            this.saveStats();
          }
        }
      },
      text: "save stats click",
    });
  }
  saveStats() {
    this.canSave = false;
    let jsonInformation = JSON.stringify(this.information);
    window.main.database.contract.set(jsonInformation).then(() => {
      window.main.intervals.add(() => {
        this.loadingInformation = true;
        window.main.database.getInformation(() => {
          this.information = JSON.parse(window.localStorage.getItem("information"));
          this.statistics = this.information.statistics[this.uppercaseAddress];
          if (Boolean(this.statistics) === true) {
            window.main.remove();
            window.localStorage.clear();
            window.location.reload();
          }
        });
      }, 5000);
    }).catch(error => {
      console.error(error);
      window.main.page = new message("stats not saved");
    });
  }
  draw() {
    window.main.draw.emptyInterface.draw(true);
    if (this.loadingInformation === true) {
      window.main.text.word("loading information", { x: 10, y: 20 });
    } else {
      window.main.text.word(`${this.name} ${this.addressShortAddress}`, { x: 10, y: 20 });
      let leaderShortAddress = window.main.tools.shortAddress(this.leader, 6);
      window.main.text.word(`leader: ${leaderShortAddress}`, { x: 10, y: 30 });
      let y = 40;
      for (let index in this.limbsLeader) {
        let member = this.limbsLeader[index];
        let memberShortAddress = window.main.tools.shortAddress(member, 6);
        window.main.text.word(`member${index} ${memberShortAddress}`, { x: 10, y });
        y += 10;
      }
    }
  }
}