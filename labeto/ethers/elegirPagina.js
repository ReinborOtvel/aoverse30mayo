import agregarRed from "./agregarRed.js";
export default function elegirPagina({ provedor, signer, direccion, chainId }) {
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
                    window.location.href = window.location.href.replace("pantallaCarga", "crearPersonaje");
                } else {
                    window.location.href = window.location.href.replace("pantallaCarga", "entrarGrupo");
                }
            } else {
                window.location.href = window.location.href.replace("pantallaCarga", "juego");
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
}