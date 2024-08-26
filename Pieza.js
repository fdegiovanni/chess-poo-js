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

  dibujar() {
    return "🧐";
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

}

export { Pieza };
