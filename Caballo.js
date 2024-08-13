import {Pieza} from './Pieza.js';
class Caballo extends Pieza {
    getMovimientos() {
    return [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ];
    }

    dibujar() {
    return this.color === 'blanco' ? '♘' : '♞';
    }
}

export {Caballo};