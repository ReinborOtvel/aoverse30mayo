"use strict";
export default {
  setup() {
    window.data.page.transaction = false;
    window.data.page.leaders = [];
    window.data.page.membership = {};
    window.data.metamask.database.allAccounts().then(accounts => {
      window.data.page.countMembers(accounts);
      window.data.page.leadersAvailable(accounts);
    });
  },
  countMembers(accounts) {
    for (let account of accounts) {
      let owner = account.owner.toUpperCase();
      window.data.page.membership[owner] = 0;
    }
    for (let account of accounts) {
      let leader = account.leader.toUpperCase();
      window.data.page.membership[leader]++;
    }
  },
  leadersAvailable(accounts) {
    let user = window.data.metamask.account.toUpperCase();
    for (let account of accounts) {
      let owner = account.owner.toUpperCase();
      if (owner != user) {
        if (window.data.page.membership[owner] <= 4) {
          window.data.page.leaders.push(account.owner);
        }
      }
    }
    window.data.page.random();
  },
  random() {
    window.data.page.leader = window.data.engine.random(window.data.page.leaders);
    window.data.page.assignLeaderPlayer();
  },
  verifyLeader() {
    window.data.metamask.database.getAccount(window.data.page.leader).then(account => {
      let owner = account.owner.toUpperCase();
      let leader = window.data.page.leader.toUpperCase();
      if (owner == leader) {
        window.data.page.player = new Player(60, 65, 25, 50, JSON.parse(account.statistics));
      } else {
        window.data.page.random();
      }
    }).catch(() => {
      window.data.page.randomLeader();
    });
  },
  writeLeader() {
    let leader = window.prompt("leader address");
    if (window.ethers.utils.isAddress(leader)) {
      window.data.page.leader = leader;
      window.data.page.player();
    }
  },
  joinGroup() {
    if (window.data.page.joinGroupTransaction == true) {
      return;
    }
    window.data.page.joinGroupTransaction = true;
    let statistics = window.localStorage.getItem("statistics");
    if (statistics != null) {
      window.data.metamask.database.createAccount(this.leaderAccount, statistics).then(() => {
        localStorage.removeItem("statistics");
        let interval = setInterval(() => {
          metamask.database.getAccount(metamask.account).then(_account => {
            let owner = _account.owner.toUpperCase();
            let account = metamask.account.toUpperCase();
            if (owner == account) {
              clearInterval(interval);
              location.reload();
            }
          });
        }, 10000);
      });
    }
  },
  touchEnded() {
    if (touch.verify({
      xInit: 55,
      yInit: 8,
      xEnd: 87,
      yEnd: 15
    })) {
      this.randomLeader();
    } else if (touch.verify({
      xInit: 54,
      yInit: 18,
      xEnd: 80,
      yEnd: 25
    })) {
      this.writeLeader();
    } else if (touch.verify({
      xInit: 4,
      yInit: 78,
      xEnd: 26,
      yEnd: 86
    })) {
      this.joinGroup();
    }
  },
  draw() {
    utils.text({
      text: `total leaders ${this.leaders.length}`,
      x: 5,
      y: 15,
      size: 5,
      color: "#fff"
    });
    utils.text({
      text: "leaders - members",
      x: 5,
      y: 25,
      size: 5,
      color: "#fff"
    });
    for (let i = 0; i <= 3; i++) {
      let leader = this.leaders[i];
      if (leader == undefined) {
        break;
      }
      let top = 35;
      let y = top + (10 * i);
      let members = this.membership[leader.toUpperCase()];
      let _text = `${leader.slice(0, 6)} - ${members}`;
      utils.text(_text, 5, y, 5, "#fff");
    }
    utils.text("random leader", 55, 15, 5, "#C548EE");
    utils.text("write leader", 55, 25, 5, "#C548EE");
    if (this.leaderAccount != undefined) {
      utils.text("leader", 71, 60, 5, "#fff");
      utils.text(`${this.leaderAccount.slice(0, 7)}`, 71, 70, 5, "#fff");
    }
    if (this.leaderPlayer != undefined) {
      this.leaderPlayer.draw();
    }
    utils.text("join group", 5, 85, 5, "#C548EE");
  }
}