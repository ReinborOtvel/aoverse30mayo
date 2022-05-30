export default class entity {
	constructor(boxes, images, speed) {
		this.boxes = boxes;
		this.images = images;
		this.speed = speed;
		this.xMove = 0;
		this.yMove = 0;
		this.collision = false;
		this.x = 0;
		this.y = 0;
	}
	setTransform(x, y) {
		this.x = x;
		this.y = y;
		for (let index in this.images) {
			this.images[index].setTransform(x, y);
		}
	}
	freeBox() {
		let { xBox, yBox } = this.boxes.freeBox();
		let x = xBox * this.boxes.boxWidth;
		let y = yBox * this.boxes.boxHeight;
		this.setTransform(x, y);
	}
	moveKey(key) {
		if (key === "a") {
			this.xMove = -1;
		} else if (key === "d") {
			this.xMove = 1;
		} else if (key === "w") {
			this.yMove = -1;
		} else if (key === "s") {
			this.yMove = 1;
		}
	}
	stopKey(key) {
		if (key === "a" || key === "d") {
			this.xMove = 0;
		} else if (key === "w" || key === "s") {
			this.yMove = 0;
		}
	}
	move(deltaTime) {
		if (this.xMove !== 0 || this.yMove !== 0) {
			let speed = this.speed * deltaTime;
			let xSpeed = this.xMove * speed;
			let ySpeed = this.yMove * speed;
			let xNew = this.x + xSpeed;
			let yNew = this.y + ySpeed;
			this.collision = this.boxes.collision(xNew, yNew, true);
			if (this.collision === false) {
				this.setTransform(xNew, yNew);
			} else {
				this.collision = true;
			}
		}
	}
}