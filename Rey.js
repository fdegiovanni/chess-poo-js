import { Pieza } from "./Pieza.js";
class Rey extends Pieza {

  getMovimientos() {
    return [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [-1, -1],
      [1, -1],
      [-1, 1],
    ];
  }

  dibujar() {
    return this.color === "blanco" ? "♔" : "♚";
  }
}

export { Rey };
