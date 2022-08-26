"use strict";
import ChargingScreens from "./ChargingScreens.js";
import CreateCharacter from "./CreateCharacter.js";
import EnterGroup from "./EnterGroup.js";
import Game from "./Game.js";
import Metamask from "./Metamask.js";
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
        this.page("chargingScreens", 1);
        this.canvas = document.querySelector("canvas");
        this.clickEvent();
    }
    draw() {
        engine.noSmooth();
        engine.textAlign(engine.LEFT);
        engine.textWrap(engine.WORD);
        engine.fill("#fff");
        engine.textSize(30);
        page.draw();
    }
    page(namePage, fps) {
        engine.createCanvas(640, 360);
        engine.frameRate(fps);
        switch (namePage) {
            case "chargingScreens": window.page = new ChargingScreens(); break;
            case "createCharacter": window.page = new CreateCharacter(); break;
            case "enterGroup": window.page = new EnterGroup(); break;
            case "game": window.page = new Game(); break;
        }
        page.setup();
    }
    clickEvent() {
        this.canvas.addEventListener("click", ({ pageX, pageY }) => {
            data.click = { x: pageX, y: pageY };
            page.click();
        });
    }
}
window.data = new Data();