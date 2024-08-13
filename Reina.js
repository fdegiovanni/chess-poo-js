import {Pieza} from './Pieza.js';
class Reina extends Pieza {
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
        return this.color === 'blanco' ? '♕' : '♛';
    }
}

export {Reina};