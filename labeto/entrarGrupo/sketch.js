let principal = herramienta => {
    herramienta.setup = () => {
        herramienta.createCanvas(640, 360);
        herramienta.frameRate(30);
    }
    herramienta.preload = () => {
    }
    herramienta.draw = () => {
    }
}
new p5(principal);