class Personaje {
    preload({ cabeza, arma, armadura }) {
        loadImage(`../assets/personajeCabeza${cabeza}.png`, (imagen) => {
            this.cabeza = imagen.get(0, 0, 17, 17);
        });
        loadImage(`../assets/personajeArmadura${armadura}.png`, (imagen) => {
            this.armadura = imagen.get(0, 0, 25, 45);
        });
        loadImage(`../assets/personajeArma${arma}.png`, (imagen) => {
            this.arma = imagen.get(0, 0, 25, 45);
        });
    }
    draw() {
        image(this.armadura, 370, 140, 150, 150);
        image(this.cabeza, 370, 60, 150, 150);
        image(this.arma, 370, 140, 150, 150);
    }
    crear({ nombre, armadura, arma, cabeza, ataque, magia, salud, inteligencia }) {
        if (metamask.chainId == 56) {
            let estadisticas = JSON.stringify({
                nombre,
                cabeza,
                armadura,
                arma,
                ataque,
                magia,
                inteligencia,
                salud,
            });
            let transaccion = {
                to: "0xa846fb7c4E50a1dbf23c9AEF49e3Fd7B9c7A9343",
                value: window.ethers.utils.parseEther("0.01"),
            };
            metamask.signer.sendTransaction(transaccion).then(() => {
                window.localStorage.setItem("estadisticas", estadisticas);
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