import {Pieza} from '../Pieza.js';

class Alfil extends Pieza {
    getMovimientos() {
        return [
            [1, 1],
            [-1, -1],
            [1, -1],
            [-1, 1],
        ];
    }

    dibujar() {
        return this.color === 'blanco' ? '♗' : '♝';
    }
}
export {Alfil};