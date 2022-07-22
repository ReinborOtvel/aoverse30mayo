import blockchain from "../ethers/blockchain.js";
import elegirPagina from "../ethers/elegirPagina.js";
import baseDatos from "../ethers/baseDatos.js";
let informacion;
let estadisticas;
let direccionMayuscula;
let principal = graf => {
    let interfazVacia;
    let lider;
    let cabeza;
    let armadura;
    let arma;
    let eligioGrupo = false;
    graf.setup = () => {
        graf.createCanvas(640, 360);
        graf.frameRate(30);
        lider = informacion.lider[direccionMayuscula];
        let canvas = window.document.querySelector("canvas");
        canvas.addEventListener("click", (evento) => {
            clickCanvas(evento.x, evento.y);
        });
    }
    graf.preload = () => {
        interfazVacia = graf.loadImage("../assets/interfazVacia.png");
        graf.loadImage(`../assets/personajeCabeza${estadisticas.cabeza}.png`, (imagen) => {
            cabeza = imagen.get(0, 0, 17, 17);
        });
        graf.loadImage(`../assets/personajeArmadura${estadisticas.armadura}.png`, (imagen) => {
            armadura = imagen.get(0, 0, 25, 45);
        });
        graf.loadImage(`../assets/personajeArma${estadisticas.arma}.png`, (imagen) => {
            arma = imagen.get(0, 0, 25, 45);
        });
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
        graf.image(interfazVacia, 0, 0, graf.width, graf.height);
        graf.textAlign(graf.CENTER);
        graf.textWrap(graf.WORD);
        graf.fill("#fff");
        graf.textSize(30);
        graf.text("Entrar a un Grupo", 20, 30, 350, 100);
        graf.text(`Nombre ${estadisticas.nombre}`, 10, 60, 350, 100);
        graf.text(`Lider ${lider.slice(0, 5)}`, 10, 110, 350, 100);
        for (let i in informacion.grupo[lider]) {
            let miembro = informacion.grupo[lider][i];
            let espacio = 30 * i;
            let y = 140 + espacio;
            graf.text(`miembro${i} ${miembro.slice(0, 6)}`, 10, y, 350, 100);
        }
        graf.image(armadura, 390, 110, 150, 150);
        graf.image(cabeza, 390, 50, 150, 150);
        graf.image(arma, 390, 110, 150, 150);
        graf.text("Elegir grupo", 290, 280, 350, 100);
    }
    let elegirGrupo = () => {
        if (eligioGrupo == false) {
            eligioGrupo = true;
            blockchain(({ provedor, direccion, signer, chainId }) => {
                baseDatos(signer).set(JSON.stringify(informacion)).then(() => {
                    alert("No cierres la pagina, guardando base de datos");
                    setTimeout(() => {
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
elegirPagina((pagina) => {
    if (pagina == "entrarGrupo") {
        blockchain(({ provedor, direccion, signer, chainId }) => {
            direccionMayuscula = direccion.toUpperCase();
            informacion = JSON.parse(window.localStorage.getItem("informacion"));
            informacion.estadisticas[direccionMayuscula] = estadisticas;
            for (let lider in informacion.grupo) {
                if (informacion.lider[direccionMayuscula] == undefined) {
                    let grupo = informacion.grupo[lider];
                    if (grupo.length < 4) {
                        grupo.push(direccionMayuscula);
                        informacion.lider[direccionMayuscula] = lider;
                        new p5(principal);
                    }
                } else {
                    break;
                }
            }
        });
    } else {
        window.location.href = window.location.href.replace("entrarGrupo", pagina);
    }
});