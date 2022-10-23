"use strict";
import image from "../../utils/image.js";
export default function (index, h, v, width, height) {
	let i = window.map.lands.lands.length;
	window.map.lands.lands.push({});
	let land = window.map.lands.lands[i];
	land.loadImage = callback => {
		window.engine.loadImage(`../graphics/nature/land/${land.index}.png`, image => {
			land.image = image;
			callback();
		});
	}
	land.draw = () => {
		image(land.image, land.x, land.y, land.width, land.height);
	}
	land.collision = (x, y) => {
		let xEnd = land.x + land.width;
		let yEnd = land.y + land.height;
		return x >= land.x && y >= land.y && x <= xEnd && y <= yEnd;
	}
	land.width = width;
	land.height = height;
	land.x = h * land.width;
	land.y = v * land.height;
	land.index = index;
}