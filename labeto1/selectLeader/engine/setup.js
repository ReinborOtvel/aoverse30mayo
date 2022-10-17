"use strict";
import leader from "../leader/leader.js";
import membership from "../membership/membership.js";
import metamask from "../metamask/metamask.js";
export default function () {
  window.createCanvas(852, 480);
  window.frameRate(15);
  leader();
  membership();
  metamask(); () => {
    metamask.database.allAccounts().then(accounts => {
      CountMembers(accounts);
      AvailableLeaders(accounts);
    });
  }
}