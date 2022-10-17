"use strict";
export default function (size, percentage) {
  let one = size / 100;
  return parseInt(percentage / one);
};