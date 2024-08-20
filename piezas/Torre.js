import {Pieza} from '../Pieza.js';
class Torre extends Pieza {
    getMovimientos() {
    return [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    }

    dibujar() {
    return this.color === 'blanco' ? '♖' : '♜';
    }
}

export {Torre};