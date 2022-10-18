"use strict";
export default function () {
  window.membership = {};
  window.membership.membership = [];
  window.membership.countMembers = accounts => {
    for (let account of accounts) {
      let owner = account.owner.toUpperCase();
      window.membership.membership[owner] = 0;
    }
    for (let account of accounts) {
      let leader = account.leader.toUpperCase();
      window.membership.membership[leader]++;
    }
  };
  window.membership.availableLeaders = accounts => {
    let user = metamask.account.toUpperCase();
    for (let account of accounts) {
      let owner = account.owner.toUpperCase();
      if (owner == user) continue;
      if (membership[owner] > 4) continue;
      leaders.push(account.owner);
    }
    RandomLeader();
  };
};