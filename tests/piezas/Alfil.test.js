import { Alfil } from '../../piezas/Alfil.js';

describe('Alfil', () => {
    let alfilBlanco;
    let alfilNegro;
    
    beforeEach(() => {
        alfilBlanco = new Alfil('blanco', 2, 0);
        alfilNegro = new Alfil('negro', 2, 7);
    });

    test('debería devolver los movimientos correctos', () => {
        const movimientosEsperados = [
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
        expect(alfilBlanco.getMovimientos()).toEqual(movimientosEsperados);
        expect(alfilNegro.getMovimientos()).toEqual(movimientosEsperados);
      });
    
      test('debería dibujar el símbolo correcto', () => {
        expect(alfilBlanco.dibujar()).toBe('♗');
        expect(alfilNegro.dibujar()).toBe('♝');
      });
    });