import {Pieza} from '../Pieza.js';
class Peon extends Pieza {
    getMovimientos() {
    return this.color === 'blanco' ? [[1, 0]] : [[-1, 0]];
    }

    dibujar() {
    return this.color === 'blanco' ? '♙' : '♟';
    }
}

export {Peon};