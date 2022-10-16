"use strict";
export default function () {
  let name = "";
  for (i = 0; i <= 5; i++) {
    let characters = "aeiou";
    if (i % 2 == 0) characters = "qwrtypsdfghjklzxcvbnm";
    name += engine.random([...characters]);
  }
  return name;
}