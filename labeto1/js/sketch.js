"use strict";
import ChargingScreens from "./ChargingScreens.js";
import CreateCharacter from "./CreateCharacter.js";
import SelectLeader from "./SelectLeader.js";
import Game from "./Game.js";
import DatabaseChanges from "./DatabaseChanges.js";
import Metamask from "./Metamask.js";
import text from "./text.js";
import rect from "./rect.js";
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
        this.canDraw = true;
    }
    draw() {
        if (this.canDraw == true) {
            engine.noSmooth();
            page.draw();
        } else {
            rect(0, 0, 640, 360, "#000");
            text("loading", 100, 200, 100);
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
            case "databaseChanges": window.page = new DatabaseChanges(); break;
        }
        page.setup();
    }
    clickEvent() {
        this.canvas.addEventListener("click", ({ pageX, pageY }) => {
            if (this.canDraw == true) {
                data.click = { x: pageX, y: pageY };
                console.log(data.click);
                page.click();
            }
        });
    }
}
window.data = new Data();