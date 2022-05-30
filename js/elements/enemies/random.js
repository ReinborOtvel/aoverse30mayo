import createBody from "./createBody.js";
import enemy from "./enemy.js";
export default function enemiesRandom(numberEnemies, _transformJSON, boxes, speeds) {
  let enemies = [];
  for (let i = 0; i < numberEnemies; i++) {
    let _index = window.main.tools.random.range(9);
    let _transform = JSON.parse(JSON.stringify(_transformJSON));
    let speed = window.main.tools.random.array(speeds);
    let body = createBody(_index, _transform);
    let _enemy = new enemy(_transform, body, boxes, speed);
    enemies.push(_enemy);
  }
  return enemies;
}