import blockchain from "../ethers/blockchain.js";
import elegirPagina from "../ethers/elegirPagina.js";
import Personaje from "./personaje.js";
import Mapa from "./mapa.js";
import Configuracion from "./configuracion.js";
let direccionMayuscula;
let informacion;
let estadisticas;
let principal = graf => {
    let configuracion = new Configuracion(graf);
    let personaje = new Personaje(configuracion, estadisticas);
    let mapa = new Mapa(personaje);
    graf.setup = () => {
        configuracion.setup();
    }
    graf.preload = () => {
        configuracion.preload();
        personaje.preload();
        mapa.preload();
    }
    graf.draw = () => {
        graf.noSmooth();
        graf.textAlign(graf.CENTER);
        graf.textWrap(graf.WORD);
        graf.fill("#fff");
        graf.textSize(30);
        configuracion.draw();
        mapa.draw();
        personaje.draw();
    }
}
elegirPagina((pagina) => {
    if (pagina == "juego") {
        blockchain(({ direccion }) => {
            direccionMayuscula = direccion.toUpperCase();
            informacion = JSON.parse(window.localStorage.getItem("informacion"));
            estadisticas = informacion.estadisticas[direccionMayuscula];
            new p5(principal);
        });
    } else {
        window.location.href = window.location.href.replace("juego", pagina);
    }
});