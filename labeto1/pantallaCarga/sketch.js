import elegirPagina from "../ethers/elegirPagina.js";
let principal = herramienta => {
    let imgs = [];
    let indice = 0;
    herramienta.setup = () => {
        herramienta.createCanvas(640, 360);
        herramienta.frameRate(30);
    }
    herramienta.preload = () => {
        for (let i = 0; i < 8; i++)
            imgs[i] = herramienta.loadImage(`../assets/pantallaCarga${i}.png`);
        setInterval(() => {
            if (indice < imgs.length - 1) indice++;
            if (indice == imgs.length / 2) {
                elegirPagina((pagina) => {
                    window.location.href = window.location.href.replace("pantallaCarga", pagina);
                });
            }
        }, 1500);
    }
    herramienta.draw = () => {
        herramienta.image(imgs[indice], 0, 0, 640, 360);
    }
}
new p5(principal);