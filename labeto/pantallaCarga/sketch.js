import blockchain from "../ethers/blockchain.js";
let principal = herramienta => {
    let imgs = [];
    let indice = 0;
    herramienta.setup = () => {
        createCanvas(640, 360);
        frameRate(30);
    }
    herramienta.preload = () => {
        for (let i = 0; i < 8; i++)
            imgs[i] = loadImage(`../assets/pantallaCarga${i}.png`);
        setInterval(() => {
            if (indice < imgs.length - 1) {
                indice++;
                if (indice == 3) blockchain();
            }
        }, 1500);
    }
    herramienta.draw = () => {
        image(imgs[indice], 0, 0, 640, 360);
    }
}
new p5(principal);