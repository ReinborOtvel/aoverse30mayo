export default class Laberinto {
    constructor() {
        console.log(JSON.parse(window.localStorage.getItem("information")));
    }
    update() {
        window.main.draw.text("#fff", "hola", 50, 50, "50px Arial");
    }
}