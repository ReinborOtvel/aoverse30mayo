"use strict";
import head from "./head.js";
import armor from "./armor.js";
import weapon from "./weapon.js";
export default function () {
  player.parts = {};
  const _parts = player.parts;
  _parts.draw = () => {
    _parts.armor.draw();
    _parts.head.draw();
    _parts.weapon.draw();
  };
  _parts.loadImage = _callback => {
    _parts.head.loadImage(() => {
      _parts.armor.loadImage(() => {
        _parts.weapon.loadImage(() => {
          _callback();
        });
      });
    });
  };
  _parts.transform = () => {
    _parts.head.transform();
    _parts.armor.transform();
    _parts.weapon.transform();
  };
  _parts.keyTyped = () => _parts.updateAnimation();
  _parts.keyReleased = () => _parts.updateAnimation();
  _parts.touchStarted = () => _parts.updateAnimation();
  _parts.touchMoved = () => _parts.updateAnimation();
  _parts.touchEnded = () => _parts.updateAnimation();
  _parts.setAnimation = _newAnimation => {
    if (_parts.animation == _newAnimation) return;
    _parts.canNextSprite = true;
    _parts.animation = _newAnimation;
    _parts.sprite = 0;
  };
  _parts.updateAnimation = () => {
    switch (player.move.x) {
      case 0:
        switch (player.move.y) {
          case 0: _parts.canNextSprite = false; break;
          case 1: _parts.setAnimation("down"); break;
          case -1: _parts.setAnimation("up"); break;
        }
        break;
      case 1: _parts.setAnimation("right"); break;
      case -1: _parts.setAnimation("left"); break;
    };
  };
  _parts.nextSprite = () => {
    if (!_parts.canNextSprite) return;
    if (_parts.sprite >= _parts.armor.images[_parts.animation].length - 1) {
      _parts.sprite = 0;
    } else {
      _parts.sprite++;
    };
  };
  _parts.animation = "down";
  _parts.sprite = 0;
  _parts.canNextSprite = false;
  head();
  armor();
  weapon();
  setInterval(() => {
    _parts.nextSprite();
  }, 200);
};