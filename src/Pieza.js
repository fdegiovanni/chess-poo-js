import { getNombreFila, getNombreColumna } from "./utils.js";

class Pieza {
  constructor(color, fila, columna) {
    this.color = color;
    this.posicion = getNombreFila(fila).toLocaleUpperCase() + getNombreColumna(columna);
  }

  mover(posicion) {
    this.posicion = posicion;
  }

  getMovimientos() {
    return [];
  }

  getColor() {
    return this.color;
  }

  getPosicion() {
    return this.posicion;
  }

  dibujar() {
    return "";
  }

  destroy() {
    this.posicion = null;
  }

  toString() {
    return `${this.constructor.name} ${this.posicion} ${this.color}`;
  }

}

export { Pieza };
