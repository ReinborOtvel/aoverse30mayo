"use strict";
import leader from "../leader/leader.js";
import membership from "../membership/membership.js";
import leaders from "../leaders/leaders.js";
import metamask from "../metamask/metamask.js";
export default function () {
  window.engine.createCanvas(852, 480);
  window.engine.frameRate(15);
  leader();
  leaders();
  membership();
  metamask();
}