"use strict";
import image from "../utils/image.js";
export default function (index, h, v, width, height) {
	let i = window.map.lands.length;
	window.map.lands.push({});
	window.map.lands[i].loadImage = callback => {
		window.loadImage(`../graphics/nature/land/${this.index}.png`, image => {
			window.map.lands[i].image = image;
			callback();
		});
	}
	window.map.lands[i].draw = () => {
		let { image, x, y, width, height } = window.map.lands[i];
		image(image, x, y, width, height);
	}
	window.map.lands[i].width = width;
	window.map.lands[i].height = height;
	window.map.lands[i].x = h * window.map.lands[i].width;
	window.map.lands[i].y = v * window.map.lands[i].height;
}