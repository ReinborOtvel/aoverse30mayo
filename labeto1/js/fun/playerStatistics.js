export default function () {
  let name = "";
  for (let i = 0; i <= 5; i++) {
    let characters = "aeiou";
    if (i % 2 == 0) {
      characters = "qwrtypsdfghjklzxcvbnm";
    }
    name += window.data.engine.random([...characters]);
  }
  return {
    name,
    head: window.data.utils.range(1, 236),
    armor: window.data.utils.range(1, 350),
    weapon: window.data.utils.range(1, 89),
    strength: window.data.utils.range(20, 100),
    endurance: window.data.utils.range(20, 100),
    health: window.data.utils.range(20, 100),
    speed: window.data.utils.range(20, 100),
  };
}