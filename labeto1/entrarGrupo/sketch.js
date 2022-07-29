import blockchain from "../ethers/blockchain.js";
import elegirPagina from "../ethers/elegirPagina.js";
import baseDatos from "../ethers/baseDatos.js";
import Personaje from "./personaje.js";
let datos = {};
let principal = graf => {
    let interfazVacia;
    let personaje = new Personaje(graf);
    graf.setup = () => {
        graf.createCanvas(640, 360);
        graf.frameRate(30);
        let canvas = window.document.querySelector("canvas");
        canvas.addEventListener("click", ({ x, y }) => {
        });
    }
    graf.preload = () => {
        graf.loadImage("../assets/interfazVacia.png", (img) => {
            interfazVacia = img;
        });
        personaje.preload();
    }
    let clickCanvas = (x, y) => {
        console.log(x, y);
        let verificar = (x1, y1, x2, y2) => {
            return x > x1 && y > y1 && x < x2 && y < y2;
        }
        if (verificar(374, 280, 559, 314)) {
            elegirGrupo();
        }
    }
    graf.draw = () => {
        graf.noSmooth();
        graf.textAlign(graf.CENTER);
        graf.textWrap(graf.WORD);
        graf.fill("#fff");
        graf.image(interfazVacia, 0, 0, ancho, alto);
        graf.textSize(30);
        interfaz.draw();
        personaje.draw();
    }
    let elegirGrupo = () => {
        if (eligioGrupo == false) {
            eligioGrupo = true;
            blockchain(({ provedor, direccion, signer, chainId }) => {
                baseDatos(signer).set(JSON.stringify(informacion)).then(() => {
                    alert("No cierres la pagina, guardando base de datos");
                    setTimeout(() => {
                        console.log("reload");
                        window.location.reload();
                    }, 10000);
                }).catch((error) => {
                    console.error(error);
                    eligioGrupo = false;
                    alert("Error, base de datos guardar");
                });
            });
        }
    }
}

import Personaje from "./personaje.js";
import Estadisticas from "./estadisticas.js";
import Estructura from "../js/estructura.js";
let dat = {};
let estructura = new Estructura("crearPersonaje", () => {
    blockchain(({ provedor, direccion, signer, chainId }) => {
        dat.direccion = direccion.toUpperCase();
        dat.info = JSON.parse(window.localStorage.getItem("info"));
        dat.estadisticas = JSON.parse(window.localStorage.getItem("estadisticas"));
        dat.informacion.estadisticas[datos.direccionUp] = datos.estadisticas;
        for (let lider in datos.informacion.grupo) {
            if (informacion.lider[datos.direccionUp] == undefined) {
                let grupo = datos.informacion.grupo[lider];
                if (grupo.length < 4) {
                    datos.lider = lider;
                    grupo.push(datos.direccionUp);
                    informacion.lider[datos.direccionUp] = lider;
                    new p5(principal);
                }
            } else {
                break;
            }
        }
    });
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