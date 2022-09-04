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
        this.interfaceEmpty = engine.loadImage("./Graficos/chargingScreens/empty.png");
        this.canvas = document.querySelector("canvas");
        this.clickEvent();
        this.keydownEvent();
        this.keyupEvent();
        this.page("selectLeader", 1);
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
            case "databaseChanges": window.page = new DatabaseChanges(); break;
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
        this.canvas.addEventListener("keydown", (event) => {
            if (this.canDraw == true) {
                data.keydown = event;
                console.log(data.keydown);
                if (page.keydown != undefined) {
                    page.keydown();
                }
            }
        });
    }
    keyupEvent() {
        this.canvas.addEventListener("keyup", (event) => {
            if (this.canDraw == true) {
                data.keyup = event;
                console.log(data.keyup);
                if (page.keyup != undefined) {
                    page.keyup();
                }
            }
        });
    }
}
window.data = new Data();