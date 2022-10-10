"use strict";
import Parts from "./Parts.js";
import MovementWheel from "./MovementWheel.js";
import Interaction from "./Interaction.js";
export default class {
  constructor(map) {
    this.map = map;
    this.parts = new Parts(this);
    this.interaction = new Interaction(this);
    this.movementWheel = new MovementWheel(this);
  }
  setup({ x, y, width, height, statistics }) {
    this.setTransform({ x, y, width, height });
    this.statistics = statistics;
    this.xMove = 0;
    this.yMove = 0;
    this.speed = 1;
    this.damage = 1;
    this.animation = "down";
    this.sprite = 0;
    this.rangeX = 5;
    this.rangeY = 5;
    this.canNextSprite = false;
    this.parts.setup();
    this.interaction.setup();
    this.movementWheel.setup();
    setInterval(() => {
      this.nextSprite();
    }, 200);
  }
  nextSprite() {
    if (!this.canNextSprite) {
      return;
    }
    let length;
    if (this.animation == "down" || this.animation == "up") {
      length = 5;
    } else if (this.animation == "left" || this.animation == "right") {
      length = 4;
    }
    if (this.sprite < length) {
      this.sprite++;
    } else {
      this.sprite = 0;
    }
  }
  afterY({ entity }) {
    let y = entity.y + entity.height;
    return y > this.y;
  }
  setTransform({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  newAnimation({ animation }) {
    if (animation != this.animation) {
      this.animation = animation;
      this.sprite = 0;
    }
  }
  animationMove() {
    if (this.yMove == 0 && this.xMove == 0) {
      this.canNextSprite = false;
    } else {
      this.canNextSprite = true;
      let animation = false;
      if (this.yMove == -1) {
        animation = "up";
      } else if (this.yMove == 1) {
        animation = "down";
      } else if (this.xMove == -1) {
        animation = "left";
      } else if (this.xMove == 1) {
        animation = "right";
      }
      if (animation != false) {
        this.newAnimation({ animation });
      }
    }
  }
  touchStarted() {
    this.touchMoved();
  }
  touchMoved() {
    if (touch.verify({
      xInit: 3,
      yInit: 73,
      xEnd: 8,
      yEnd: 82
    })) {
      this.xMove = -1;
      this.yMove = 0;
    } else if (touch.verify({
      xInit: 5,
      yInit: 64,
      xEnd: 10,
      yEnd: 73
    })) {
      this.xMove = -1;
      this.yMove = -1;
    } else if (touch.verify({
      xInit: 10,
      yInit: 61,
      xEnd: 15,
      yEnd: 70
    })) {
      this.xMove = 0;
      this.yMove = -1;
    } else if (touch.verify({
      xInit: 14,
      yInit: 63,
      xEnd: 19,
      yEnd: 72
    })) {
      this.xMove = 1;
      this.yMove = -1;
    } else if (touch.verify({
      xInit: 17,
      yInit: 73,
      xEnd: 22,
      yEnd: 82
    })) {
      this.xMove = 1;
      this.yMove = 0;
    } else if (touch.verify({
      xInit: 14,
      yInit: 83,
      xEnd: 19,
      yEnd: 92
    })) {
      this.xMove = 1;
      this.yMove = 1;
    } else if (touch.verify({
      xInit: 10,
      yInit: 85,
      xEnd: 15,
      yEnd: 94
    })) {
      this.xMove = 0;
      this.yMove = 1;
    } else if (touch.verify(5, 81, 10, 90)) {
      this.xMove = -1;
      this.yMove = 1;
    }
    this.animationMove();
  }
  touchEnded() {
    if (touch.verify(10, 73, 15, 82)) {
      this.xMove = 0;
      this.yMove = 0;
    }
    this.animationMove();
    this.interaction.touchEnded();
  }
  keyTyped() {
    if (key.key == "w") {
      this.yMove = -1;
    } else if (key.key == "s") {
      this.yMove = 1;
    } else if (key.key == "a") {
      this.xMove = -1;
    } else if (key.key == "d") {
      this.xMove = 1;
    }
    this.animationMove();
  }
  keyReleased() {
    if (key.key == "w" || key.key == "s") {
      this.yMove = 0;
    } else if (key.key == "a" || key.key == "d") {
      this.xMove = 0;
    }
    this.animationMove();
  }
  move() {
    let { x, y, width, height } = this;
    let xSpeed = this.xMove * this.speed;
    let ySpeed = this.yMove * this.speed;
    if (xSpeed != 0 || ySpeed != 0) {
      x += xSpeed;
      y += ySpeed;
      if (!page.map.collision(x, y)) {
        this.setTransform({
          x,
          y,
          width,
          height
        });
      }
    }
  }
  draw() {
    this.move();
    this.parts.draw();
    this.movementWheel.draw();
    this.interaction.draw();
  }
}
