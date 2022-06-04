export default class Entity {
	constructor(Boxes, Parts, speed) {
		this.Boxes = Boxes;
		this.Parts = Parts;
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
		for (let index in this.Parts) {
			this.Parts[index].Image.transform.x = x;
			this.Parts[index].Image.transform.y = y;
			this.Parts[index].center();
		}
	}
	freeBox() {
		let { xBox, yBox } = this.Boxes.freeBox();
		let x = xBox * this.Boxes.boxWidth;
		let y = yBox * this.Boxes.boxHeight;
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
			this.collision = this.Boxes.collision(xNew, yNew);
			if (this.collision === false) {
				this.setTransform(xNew, yNew);
			}
		}
	}
}