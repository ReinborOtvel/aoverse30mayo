"use strict";
import _text from "../utils/text.js";
export default function () {
  window.leaders = {};
  leaders.available = _accounts => {
    const _user = metamask.account.toUpperCase();
    for (const _account of _accounts) {
      const _owner = _account.owner.toUpperCase();
      if (_owner == _user) continue;
      if (membership.membership[_owner] > 4) continue;
      leaders.leaders.push(_account.owner);
    };
    leader.random();
  };
  leaders.draw = () => {
    _text(5, 15, 5, `total leaders ${leaders.leaders.length}`, "#fff");
    _text(5, 25, 5, "leaders - members", "#fff");
    _text(55, 15, 5, "random leader", "#C548EE");
    _text(55, 25, 5, "write leader", "#C548EE");
    _text(5, 85, 5, "join group", "#C548EE");
    let _y = 35;
    for (const _index in leaders.leaders) {
      if (_index >= 3) break;
      const _address = leaders.leaders[_index];
      const _space = 10 * _index;
      _y += _space;
      const _members = membership.membership[_address.toUpperCase()];
      text(5, _y, 5, `${_address.slice(0, 6)} - ${_members}`, "#fff");
    };
  };
  leaders.leaders = [];
};