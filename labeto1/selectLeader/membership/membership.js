"use strict";
export default function () {
  window.membership = {};
  window.membership.count = accounts => {
    for (let account of accounts) {
      let owner = account.owner.toUpperCase();
      window.membership.membership[owner] = 0;
    }
    for (let account of accounts) {
      let leader = account.leader.toUpperCase();
      window.membership.membership[leader]++;
    }
  };
  window.membership.membership = {};
};