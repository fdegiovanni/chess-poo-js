import { Caballo } from '../../src/piezas/Caballo.js';

describe('Caballo', () => {
    let caballoBlanco;
    let caballoNegro;

    beforeEach(() => {
        caballoBlanco = new Caballo('blanco', 3, 0);
        caballoNegro = new Caballo('negro', 4, 7);
    })

    test('debería devolver los movimientos correctos', () => {
        const movimientosEsperados = [
            [2, 1],
            [2, -1],
            [-2, 1],
            [-2, -1],
            [1, 2],
            [1, -2],
            [-1, 2],
            [-1, -2],
        ];
        expect(caballoBlanco.getMovimientos()).toEqual(movimientosEsperados);
        expect(caballoNegro.getMovimientos()).toEqual(movimientosEsperados);
      });
    
      test('debería dibujar el símbolo correcto', () => {
        expect(caballoBlanco.dibujar()).toBe('♘');
        expect(caballoNegro.dibujar()).toBe('♞');
      });
});