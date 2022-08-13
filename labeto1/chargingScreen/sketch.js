"use strict";
let metamask = new Metamask();
let loadingScreens = [];
let element = 1;
function preload() {
    for (let i = 0; i <= 7; i++) {
        let url = sourceImages.loadingScreens.replace("${index}", i + 1);
        loadImage(url, img => {
            loadingScreens[i] = img;
        });
    }
}
function setup() {
    createCanvas(640, 360);
    frameRate(1);
    setInterval(() => {
        if (element >= loadingScreens.length) {
            return;
        }
        element++;
        if (element == 3) {
            metamask.preload();
        }
    }, 1500);
}
function draw() {
    noSmooth();
    image(loadingScreens[element - 1], 0, 0, 640, 360);
}