import PantallaCarga from "./pantallaCarga.js";
let iniciar = (main) => {
    main.setup = function () {
        main.createCanvas(640, 360);
        main.frameRate(30);
        main.pagina = new PantallaCarga(main);
        main.pagina.preload();
    }
    let ms = 1000 / 30;
    main.draw = function () {
        main.pagina.draw(ms);
    }
}
new p5(iniciar);