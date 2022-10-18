"use strict";
export default function () {
  window.membership = {};
  membership.count = _accounts => {
    for (const _account of _accounts) {
      const _owner = _account.owner.toUpperCase();
      membership.membership[_owner] = 0;
    };
    for (const _account of _accounts) {
      const _leader = _account.leader.toUpperCase();
      membership.membership[_leader]++;
    };
  };
  membership.membership = {};
};