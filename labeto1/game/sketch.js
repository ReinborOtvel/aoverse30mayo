"use strict";
let metamask = new Metamask();
let character = new Character(metamask);
function preload() {
    noLoop();
    metamask.start(() => {
        character.preload(() => {
            loop();
        });
    });
}
function setup() {
    createCanvas(640, 360);
    frameRate(30);
}
function draw() {
    noSmooth();
    character.draw();
}
function keyPressed() {
    console.log(keyCode);
    character.keyPressed();
}