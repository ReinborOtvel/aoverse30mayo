import blockchain from "../ethers/blockchain.js";
import elegirPagina from "../ethers/elegirPagina.js";
import Personaje from "./personaje.js";
import Mapa from "./mapa.js";
let direccionMayuscula;
let informacion;
let estadisticas;
let principal = graf => {
    let interfazVacia;
    let personaje = new Personaje(graf, estadisticas, 50, 50);
    let mapa = new Mapa(graf, personaje);
    graf.setup = () => {
        graf.createCanvas(640, 360);
        graf.frameRate(30);
        let canvas = window.document.querySelector("canvas");
        canvas.addEventListener("click", evento => {
            clickCanvas(evento.x, evento.y);
        });
    }
    graf.preload = () => {
        interfazVacia = graf.loadImage("../assets/interfazVacia.png");
        personaje.preload();
        mapa.preload();
    }
    graf.draw = () => {
        graf.noSmooth();
        graf.image(interfazVacia, 0, 0, graf.width, graf.height);
        graf.textAlign(graf.CENTER);
        graf.textWrap(graf.WORD);
        graf.fill("#fff");
        graf.textSize(30);
        mapa.draw();
        personaje.draw();
    }
    let clickCanvas = (x, y) => {
        console.log(x, y);
        let verificar = (x1, y1, x2, y2) => {
            return x > x1 && y > y1 && x < x2 && y < y2;
        }
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