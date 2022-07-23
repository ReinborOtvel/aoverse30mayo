import agregarRed from "./agregarRed.js";
import baseDatos from "./baseDatos.js";
import blockchain from "./blockchain.js";
export default function elegirPagina(callback) {
    blockchain(({ provedor, signer, direccion, chainId }) => {
        let verificarInformacion = () => {
            let informacion = window.localStorage.getItem("informacion");
            if (informacion == null) {
                agregarRed(97);
            } else {
                informacion = JSON.parse(informacion);
                let estadisticas = informacion.estadisticas[direccion.toUpperCase()];
                if (estadisticas == undefined) {
                    estadisticas = window.localStorage.getItem("estadisticas");
                    if (estadisticas == null) {
                        callback("crearPersonaje");
                    } else {
                        callback("entrarGrupo");
                    }
                } else {
                    callback("juego");
                }
            }
        }
        if (chainId == 97) {
            baseDatos(signer).information().then(text => {
                window.localStorage.setItem("informacion", text);
                verificarInformacion();
            }).catch(error => {
                console.error(error);
                alert("Error, informacion base de datos");
            });
        } else if (chainId == 56) {
            verificarInformacion();
        } else {
            agregarRed(97);
        }
    });
}