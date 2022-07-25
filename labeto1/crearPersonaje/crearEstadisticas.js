export default function crearEstadisticas(graf) {
    let nombre = "";
    for (let i = 0; i < 5; i++) {
        let array = "qwrtypsdfghjklzxcvbnm";
        if (i % 2 == 0) {
            array = "aeiou";
        }
        nombre += graf.random([...array]);
    }
    return {
        nombre,
        cabeza: Math.round(graf.random(235)),
        armadura: Math.round(graf.random(10)),
        arma: Math.round(graf.random(6)),
        ataque: Math.round(graf.random(10, 20)),
        magia: Math.round(graf.random(10, 20)),
        salud: Math.round(graf.random(10, 20)),
        inteligencia: Math.round(graf.random(10, 20)),
    }
}