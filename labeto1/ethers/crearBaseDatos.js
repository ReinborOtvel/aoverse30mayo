import { creador, abi, bytecode } from "./baseDatosInformacion.js";
export default function crearBaseDatos(signer) {
    let info = {
        estadisticas: {},
        grupo: {},
        lider: {},
    };
    info.estadisticas[creador.toUpperCase()] = {
        nombre: "sebas",
        cabeza: 0,
        armadura: 0,
        arma: 0,
        ataque: 20,
        magia: 20,
        inteligencia: 20,
        salud: 20,
    };
    info.grupo[creador.toUpperCase()] = [];
    info.lider[creador.toUpperCase()] = "0";
    info = JSON.stringify(info);
    let factory = new ethers.ContractFactory(abi, bytecode, signer);
    factory.deploy(info).then((contrato) => {
        console.log(contrato);
    });
}