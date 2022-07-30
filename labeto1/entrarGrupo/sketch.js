let estructura = new Estructura();
let metamask = new Metamask(() => {
    metamask.elegirPagina((pagina) => {
        estructura.pagina = pagina;
        if (estructura.pagina != "entrarGrupo") {
            window.location.href = window.location.href.replace("entrarGrupo", estructura.pagina);
            return;
        }
        estructura.informacion = JSON.parse(window.localStorage.getItem("informacion"));
        let direccionMayuscula = metamask.direccion.toUpperCase();
        for (let lider in estructura.informacion.grupo) {
            estructura.lider = lider;
            if (estructura.informacion.lider[direccionMayuscula] == undefined) {
                if (estructura.informacion.grupo[estructura.lider].length <= 5) {
                    estructura.informacion.estadisticas[direccionMayuscula] = JSON.parse(window.localStorage.getItem("estadisticas"));
                    estructura.informacion.grupo[direccionMayuscula] = [];
                    estructura.informacion.grupo[estructura.lider].push(direccionMayuscula);
                    estructura.informacion.grupo[estructura.lider].push(direccionMayuscula);

                    estructura.informacion.grupo[estructura.lider].push(direccionMayuscula);
                    estructura.informacion.grupo[estructura.lider].push(direccionMayuscula);
                    estructura.informacion.grupo[estructura.lider].push(direccionMayuscula);

                    estructura.grupo = estructura.informacion.grupo[estructura.lider];
                    estructura.informacion.lider[direccionMayuscula] = estructura.lider;
                }
            } else {
                break;
            }
        }
        if (estructura.informacion.lider[direccionMayuscula] == undefined) {
            alert("No hay grupos disponibles");
            return;
        }
        estructura.metamask = true;
    });
});
function preload() {
    estructura.preload();
}
function setup() {
    estructura.setup((x, y, verificarClick) => {
        if (estructura.metamask != true) {
            return;
        }
        console.log(x, y);
        let text = JSON.stringify(estructura.informacion);
        metamask.baseDatosContrato.set(text).then(() => {
            alert("Actualizando base de datos espera");
            setTimeout(() => {
                window.location.realod();
            }, 10000);
        });
    });
}
function draw() {
    estructura.draw();
    text("Grupo", 30, 50);
    if (estructura.metamask != true) {
        return;
    }
    text(`Lider ${estructura.lider.slice(0, 5)}`, 30, 80);
    for (let i = 0; i < estructura.grupo.length; i++) {
        let miembro = estructura.grupo[i];
        let y = 120 + (i * 30);
        text(`Miembro${i} ${miembro.slice(0, 5)}`, 30, y);
    }
    text("Entrar al grupo", 30, 250)
}