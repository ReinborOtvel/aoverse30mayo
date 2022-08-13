"use strict";
let metamask;
let character;
let uploadedImages = false;
function preload() {
    metamask = new Metamask(() => {
        character = new Character(() => {
            uploadedImages = true;
        });
    });
}
function setup() {
    createCanvas(640, 360);
    frameRate(30);
}
function draw() {
    if (uploadedImages == false) {
        return;
    }
    noSmooth();
    character.graphics.draw();
}
function keyPressed() {
    character.map.keyPressed();
}
function keyReleased() {
    character.map.keyReleased();
}