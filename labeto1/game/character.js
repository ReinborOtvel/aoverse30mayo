"use strict";
class Character {
    constructor(metamask) {
        this.metamask = metamask;
        this.animation = "down";
        this.x = 640 / 2;
        this.y = 360 / 2;
        this.xMap = 0;
        this.yMap = 0;
        this.yMove = 0;
        this.xMove = 0;
        this.speedY = 1;
        this.speedX = 1;
        this.width = 100;
        this.height = 100;
        this.head = new Head(metamask, this);
        this.armor = new Armor(metamask, this);
        this.weapon = new Weapon(metamask, this);
    }
    keyPressed() {
        print(keyCode);
        switch (keyCode) {
            case 87:
                this.yMove = -1;
                break;
            case 83:
                this.yMove = 1;
                break;
            case 65:
                this.xMove = -1;
                break;
            case 68:
                this.xMove = 1;
                break;
        }
    }
    move() {
        let newX = this.xMap;
        let newY = this.yMap;
        newY += this.yMove * this.speedY;
        newX += this.xMove * this.speedX;
        this.xMap = newX;
        this.yMap = newY;
    }
    preload(callback) {
        this.head.preload(() => {
            this.armor.preload(() => {
                this.weapon.preload(() => {
                    callback();
                });
            });
        });
    };
    draw() {
        this.armor.draw();
        this.head.draw();
        this.weapon.draw();
        this.move();
    }
};