import {Pieza} from '../Pieza.js';

class Alfil extends Pieza {
    getMovimientos() {
        return [
            [1, 1],
            [-1, -1],
            [1, -1],
            [-1, 1],
            [2, 2],
            [-2, -2],
            [2, -2],
            [-2, 2],
            [3, 3],
            [-3, -3],
            [3, -3],
            [-3, 3],
            [4, 4],
            [-4, -4],
            [4, -4],
            [-4, 4],
            [5, 5],
            [-5, -5],
            [5, -5],
            [-5, 5],
            [6, 6],
            [-6, -6],
            [6, -6],
            [-6, 6],
            [7, 7],
            [-7, -7],
            [7, -7],
            [-7, 7],
        ];
    }

    dibujar() {
        return this.color === 'blanco' ? '♗' : '♝';
    }
}
export {Alfil};