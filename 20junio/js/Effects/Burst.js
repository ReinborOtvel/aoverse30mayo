import Effect from "./Effect.js";
export default function Burst(transform, timeEnd) {
  return new Effect(transform, {
    x: 0, y: 0, width: 150, height: 150,
  }, {
    index: 0,
    maximum: 16,
    timeEnd: timeEnd,
  });
}