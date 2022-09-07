"use strict";
import ChargingScreens from "./ChargingScreens.js";
import CreateCharacter from "./CreateCharacter.js";
import SelectLeader from "./SelectLeader.js";
import Game from "./Game.js";
import Metamask from "./Metamask.js";
import text from "./text.js";
class Data {
    constructor() {
        new p5(engine => {
            window.engine = engine;
            this.metamask = new Metamask();
            engine.setup = () => this.setup();
            engine.draw = () => this.draw();
        });
    }
    setup() {
        this.interfaceEmpty = engine.loadImage("./Graficos/chargingScreens/empty.png");
        this.canvas = document.querySelector("canvas");
        this.clickEvent();
        this.keydownEvent();
        this.keyupEvent();
        this.page("chargingScreens", 1);
    }
    draw() {
        engine.image(this.interfaceEmpty, 0, 0, 640, 360);
        if (this.canDraw == true) {
            engine.noSmooth();
            if (page.draw != undefined) {
                page.draw();
            }
        } else {
            text("loading", 140, 200, 100, "#fff");
        }
    }
    page(namePage, fps) {
        this.canDraw = false;
        engine.createCanvas(640, 360);
        engine.frameRate(fps);
        switch (namePage) {
            case "chargingScreens": window.page = new ChargingScreens(); break;
            case "createCharacter": window.page = new CreateCharacter(); break;
            case "selectLeader": window.page = new SelectLeader(); break;
            case "game": window.page = new Game(); break;
        }
        if (page.setup != undefined) {
            page.setup();
        }
    }
    clickEvent() {
        this.canvas.addEventListener("click", ({ pageX, pageY }) => {
            if (this.canDraw == true) {
                data.click = { x: pageX, y: pageY };
                console.log(data.click);
                if (page.click != undefined) {
                    page.click();
                }
            }
        });
    }
    keydownEvent() {
        document.addEventListener("keydown", ({ key }) => {
            if (this.canDraw == true) {
                data.keydown = key;
                if (page.keydown != undefined) {
                    page.keydown();
                }
            }
        });
    }
    keyupEvent() {
        document.addEventListener("keyup", ({ key }) => {
            if (this.canDraw == true) {
                data.keyup = key;
                if (page.keyup != undefined) {
                    page.keyup();
                }
            }
        });
    }
}
window.data = new Data();