"use strict";
let metamask = new Metamask();
let character = new Character(metamask);
let scene = new Scene(metamask);
let uploadedImages = false;
function preload() {
    metamask.preload(() => {
        character.preload(() => {
            scene.preload(() => {
                uploadedImages = true;
            });
        });
    });
}
function setup() {
    createCanvas(640, 360);
    frameRate(1);
}
function draw() {
    if (uploadedImages == false) {
        return;
    }
    noSmooth();
    textAlign(LEFT);
    textWrap(WORD);
    fill("#fff");
    textSize(30);
    scene.draw();
    character.draw();
}