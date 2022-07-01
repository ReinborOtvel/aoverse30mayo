import Image from "../Image.js";
class Head {
  constructor(transform, index) {
    this.image = new Image(`./img/head/${index}.png`, {
      x: 0, y: 0, width: 17, height: 17,
    }, transform);
    this.setTransform(transform);
  }
  setTransform({ x, y, width, height }) {
    this.image.transform.x = x + this.image.transform.width / 2;
    this.image.transform.y = y;
    this.image.transform.width = width / 2;
    this.image.transform.height = height / 2;
  }
  animation(name) {
    if (name === "up") {
      this.image.x = this.image.width * 3;
    } else if (name === "down") {
      this.image.x = 0;
    } else if (name === "right") {
      this.image.x = this.image.width;
    } else if (name === "left") {
      this.image.x = this.image.width * 2;
    }
  }
  update() {
    this.image.update();
  }
}
class Armor {
  constructor(transform, index) {
    this.image = new Image(`./img/armor/${index}.png`, {
      x: 0, y: 0, width: 25, height: 45,
    }, transform);
  }
  setTransform(transform) {
    this.image.transform = transform;
  }
  sprite(sprite) {
    this.image.x = this.image.width * sprite;
  }
  animation(name) {
    if (name === "up") {
      this.image.y = this.image.height;
    } else if (name === "down") {
      this.image.y = 0;
    } else if (name === "right") {
      this.image.y = this.image.height * 3;
    } else if (name === "left") {
      this.image.y = this.image.height * 2;
    }
  }
  update() {
    this.image.update();
  }
}
class Weapon {
  constructor(transform, index) {
    this.image = new Image(`./img/weapon/${index}.png`, {
      x: 0, y: 0, width: 25, height: 45
    }, transform);
  }
  setTransform(transform) {
    this.image.transform = transform;
  }
  sprite(sprite) {
    this.image.x = this.image.width * sprite;
  }
  animation(name) {
    if (name === "up") {
      this.image.y = this.image.height;
    } else if (name === "down") {
      this.image.y = 0;
    } else if (name === "right") {
      this.image.y = this.image.height * 3;
    } else if (name === "left") {
      this.image.y = this.image.height * 2;
    }
  }
  update() {
    this.image.update();
  }
}
export default class AnimationCharacter {
  constructor(transform, statistics) {
    this.statistics = statistics;
    this.head = new Head(transform, statistics.head);
    this.armor = new Armor(transform, statistics.armor);
    this.weapon = new Weapon(transform, statistics.weapon);
    this.setTransform(transform);
  }
  setTransform(transform) {
    transform.x -= transform.width / 2;
    transform.y -= transform.height / 2;
    this.head.setTransform(transform);
    this.armor.setTransform(transform);
    this.weapon.setTransform(transform);
  }
  animation(name, sprite) {
    this.head.animation(name);
    this.armor.animation(name);
    this.weapon.animation(name);
    this.armor.sprite(sprite);
    this.weapon.sprite(sprite);
  }
  update() {
    this.armor.update();
    this.head.update();
    this.weapon.update();
  }
}