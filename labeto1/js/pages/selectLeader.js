"use strict";
export default {
  setup() {
    window.data.pages.selectLeader.transaction = false;
    window.data.pages.selectLeader.leaders = [];
    window.data.pages.selectLeader.membership = {};
    window.data.obj.metamask.database.allAccounts().then(accounts => {
      window.data.pages.selectLeader.countMembers(accounts);
      window.data.pages.selectLeader.available(accounts);
    });
  },
  countMembers(accounts) {
    for (let account of accounts) {
      let owner = account.owner.toUpperCase();
      window.data.pages.selectLeader.membership[owner] = 0;
    }
    for (let account of accounts) {
      let leader = account.leader.toUpperCase();
      window.data.pages.selectLeader.membership[leader]++;
    }
  },
  available(accounts) {
    let user = window.data.obj.metamask.account.toUpperCase();
    for (let account of accounts) {
      let owner = account.owner.toUpperCase();
      if (owner == user) continue;
      if (window.data.pages.selectLeader.membership[owner] > 4) continue;
      window.data.pages.selectLeader.leaders.push(account.owner);
    }
    window.data.pages.selectLeader.random();
  },
  random() {
    window.data.pages.selectLeader.leader = window.data.engine.random(window.data.pages.selectLeader.leaders);
    window.data.pages.selectLeader.verify();
  },
  verify() {
    window.data.obj.metamask.database.getAccount(window.data.pages.selectLeader.leader).then(account => {
      let owner = account.owner.toUpperCase();
      let leader = window.data.pages.selectLeader.leader.toUpperCase();
      if (owner == leader) {
        window.data.pages.selectLeader.player = new window.data.obj.player.image(60, 65, 25, 50, JSON.parse(account.statistics));
      } else {
        window.data.pages.selectLeader.random();
      }
    }).catch(error => {
      console.error(error);
      window.data.pages.selectLeader.random();
    });
  },
  write() {
    let leader = window.prompt("leader address");
    if (window.ethers.utils.isAddress(leader)) {
      window.data.pages.selectLeader.leader = leader;
      window.data.pages.selectLeader.verify();
    }
  },
  joinGroup() {
    if (window.data.pages.selectLeader.transaction) return;
    window.data.pages.selectLeader.transaction = true;
    let statistics = window.localStorage.getItem("statistics");
    if (statistics == null) return;
    window.data.obj.metamask.database.createAccount(window.data.pages.selectLeader.leader, statistics).then(() => {
      window.localStorage.removeItem("statistics");
      let interval = setInterval(() => {
        window.data.obj.metamask.database.getAccount(window.data.obj.metamask.account).then(account => {
          let owner = account.owner.toUpperCase();
          let user = window.data.obj.metamask.account.toUpperCase();
          if (owner == user) {
            clearInterval(interval);
            window.location.reload();
          }
        });
      }, 10000);
    });
  },
  touchEnded() {
    if (window.data.obj.touch.verify(55, 8, 87, 15)) {
      window.data.pages.selectLeader.random();
    } else if (window.data.obj.touch.verify(54, 18, 80, 25)) {
      window.data.pages.selectLeader.write();
    } else if (window.data.obj.touch.verify(4, 78, 26, 86)) {
      window.data.pages.selectLeader.joinGroup();
    }
  },
  draw() {
    window.data.fun.text(5, 15, 5, `total leaders ${window.data.pages.selectLeader.leaders.length}`, "#fff");
    window.data.fun.text(5, 25, 5, "leaders - members", "#fff");
    window.data.fun.text(55, 15, 5, "random leader", "#C548EE");
    window.data.fun.text(55, 25, 5, "write leader", "#C548EE");
    window.data.fun.text(5, 85, 5, "join group", "#C548EE");
    for (let i = 0; i <= 3; i++) {
      let leader = window.data.pages.selectLeader.leaders[i];
      if (leader == undefined) break;
      let top = 35;
      let y = top + (10 * i);
      let members = window.data.pages.selectLeader.membership[leader.toUpperCase()];
      window.data.fun.text(5, y, 5, `${leader.slice(0, 6)} - ${members}`, "#fff");
    }
    if (window.data.pages.selectLeader.leader) {
      window.data.fun.text(71, 60, 5, "leader", "#fff");
      window.data.fun.text(71, 70, 5, `${window.data.pages.selectLeader.leader.slice(0, 7)}`, "#fff");
    }
    if (window.data.pages.selectLeader.player) {
      window.data.pages.selectLeader.player.draw();
    }
  }
}