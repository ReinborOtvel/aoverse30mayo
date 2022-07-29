import Personaje from "./personaje.js";
import Estadisticas from "./estadisticas.js";
import Estructura from "../js/estructura.js";
let estructura = new Estructura("crearPersonaje", () => {
    new p5((graf) => {
        let estadisticas = new Estadisticas(graf);
        let personaje = new Personaje(graf);
        graf.setup = () => {
            estructura.setup(graf, (x, y) => {
                console.log(x, y);
                let verificar = (xIni, yIni, xFin, yFin) => {
                    return x > xIni && y > yIni
                        && x < xFin && y < yFin;
                }
                if (verificar(0, 0, 0, 0)) { }
            });
        }
        graf.preload = () => {
            estructura.preload();
            estadisticas.crear();
            personaje.preload(estadisticas);
        }
        graf.draw = () => {
            estructura.draw();
            personaje.draw();
            estadisticas.draw();
        }
    });
});