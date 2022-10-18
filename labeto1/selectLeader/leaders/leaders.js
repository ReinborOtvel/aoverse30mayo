"use strict";
import text from "../utils/text.js";
export default function () {
  window.leaders = {};
  window.leaders.available = accounts => {
    let user = window.metamask.account.toUpperCase();
    for (let account of accounts) {
      let owner = account.owner.toUpperCase();
      if (owner == user) continue;
      if (window.membership.membership[owner] > 4) continue;
      window.leaders.leaders.push(account.owner);
    }
    window.leader.random();
  };
  window.leaders.draw = () => {
    text(5, 15, 5, `total leaders ${window.leaders.leaders.length}`, "#fff");
    text(5, 25, 5, "leaders - members", "#fff");
    text(55, 15, 5, "random leader", "#C548EE");
    text(55, 25, 5, "write leader", "#C548EE");
    text(5, 85, 5, "join group", "#C548EE");
    let top = 35;
    for (let i in window.leaders.leaders) {
      if (i >= 3) break;
      let address = window.leaders.leaders[i];
      let space = 10 * i;
      let y = top + space;
      let members = window.membership.membership[address.toUpperCase()];
      text(5, y, 5, `${address.slice(0, 6)} - ${members}`, "#fff");
    }
  };
  window.leaders.leaders = [];
}