"use strict";
let metamask = new Metamask();
let character = new Character(metamask);
let uploadedImages = false;
function preload() {
    metamask.preload(() => {
        character.preload(() => {
            uploadedImages = true;
        });
    });
}
function setup() {
    createCanvas(640, 360);
    frameRate(30);
    character.setup();
}
function draw() {
    if (uploadedImages == false) {
        return;
    }
    noSmooth();
    character.draw();
}
function keyPressed() {
    character.keyPressed();
}
function keyReleased() {
    character.keyReleased();
}