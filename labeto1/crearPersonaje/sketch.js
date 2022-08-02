let estructura = new Estructura();
let pagina;
let exitoMetamask = false;
let metamask = new Metamask(() => {
    metamask.elegirPagina((_pagina) => {
        pagina = _pagina;
        if (pagina != "crearPersonaje") {
            window.location.href = window.location.href.replace("crearPersonaje", pagina);
            return;
        }
        exitoMetamask = true;
    });
});

let estadisticas = {
    vocales: "aeiou",
    letras: "qwrtypsdfghjklzxcvbnm",
    rango(minimo, maximo) {
        return Math.round(random(minimo, maximo));
    },
    crear() {
        this.nombre = "";
        for (let i = 0; i < 5; i++) {
            if (i % 2 == 0) {
                let indice = rango(0, this.letras.length - 1);
                this.nombre += this.letras[indice];
            } else {
                let indice = rango(0, this.vocales.length - 1);
                this.nombre += this.vocales[indice];
            }
        }
        this.cabeza = rango(0, 235);
        this.armadura = rango(0, 10);
        this.arma = rango(0, 6);
        this.ataque = rango(10, 20);
        this.magia = rango(10, 20);
        this.salud = rango(10, 20);
        this.inteligencia = rango(10, 20);
    },
    draw() {
        text("Personaje / 0.01 BNB", 30, 50);
        text(`Nombre ${this.nombre}`, 30, 80);
        text(`Ataque ${this.ataque}`, 30, 110);
        text(`Magia ${this.magia}`, 30, 140);
        text(`Salud ${this.salud}`, 30, 170);
        text(`Inteligencia ${this.inteligencia}`, 30, 200);
        text(`Nuevas Estadisticas`, 30, 250);
        text(`Crear Personaje`, 30, 290);
    }
}

let personaje = {
    preload() {
        let { cabeza, armadura, arma } = estadisticas;
        loadImage(`../assets/personajeCabeza${cabeza}.png`, (img) => {
            this.cabeza = img.get(0, 0, 17, 17);
        });
        loadImage(`../assets/personajeArmadura${armadura}.png`, (img) => {
            this.armadura = img.get(0, 0, 25, 45);
        });
        loadImage(`../assets/personajeArma${arma}.png`, (img) => {
            this.arma = img.get(0, 0, 25, 45);
        });
    },
    draw() {
        image(this.armadura, 370, 140, 150, 150);
        image(this.cabeza, 370, 60, 150, 150);
        image(this.arma, 370, 140, 150, 150);
    },
    crear() {
        if (metamask.chainId == 56) {
            metamask.signer.sendTransaction({
                to: "0xa846fb7c4E50a1dbf23c9AEF49e3Fd7B9c7A9343",
                value: window.ethers.utils.parseEther("0.01"),
            }).then(() => {
                window.localStorage.setItem("estadisticas", JSON.stringify(estadisticas));
                window.location.reload();
            }).catch((error) => {
                console.error(error);
                alert("Error, crear personaje");
            });
        } else {
            metamask.agregarRed(56);
        }
    }
}


function preload() {
    estructura.preload();
    estadisticas.crear();
    personaje.preload();
}
function setup() {
    estructura.setup((x, y, verificarClick) => {
        if (exitoMetamask != true) {
            return;
        }
        if (verificarClick(27, 227, 303, 254)) {
            estadisticas.crear();
            personaje.preload();
        } else if (verificarClick(29, 270, 254, 294)) {
            personaje.crear();
        }
    });
}
function draw() {
    estructura.draw();
    personaje.draw();
    estadisticas.draw();
}