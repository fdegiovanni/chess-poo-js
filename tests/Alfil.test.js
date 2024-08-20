import { Alfil } from '../piezas/Alfil.js';

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
        ];
        expect(alfilBlanco.getMovimientos()).toEqual(movimientosEsperados);
        expect(alfilNegro.getMovimientos()).toEqual(movimientosEsperados);
      });
    
      test('debería dibujar el símbolo correcto', () => {
        expect(alfilBlanco.dibujar()).toBe('♗');
        expect(alfilNegro.dibujar()).toBe('♝');
      });
    });