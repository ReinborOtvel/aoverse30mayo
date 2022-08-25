"use strict";
import Page from "./page.js";
export default function () {
    Page("chargingScreens", 1);
    let canvas = document.querySelector("canvas");
    canvas.addEventListener("click", ({ pageX, pageY }) => {
        data.click = { x: pageX, y: pageY };
        page.click();
    });
}