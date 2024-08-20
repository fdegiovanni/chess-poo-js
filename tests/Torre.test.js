import { Torre } from '../piezas/Torre.js';

describe('Torre', () => {
  let torreBlanco;
  let torreNegro;

  beforeEach(() => {
    torreBlanco = new Torre('blanco', 4, 0);
    torreNegro = new Torre('negro', 4, 7);
  });

  test('debería devolver los movimientos correctos', () => {
    const movimientosEsperados = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    expect(torreBlanco.getMovimientos()).toEqual(movimientosEsperados);
    expect(torreNegro.getMovimientos()).toEqual(movimientosEsperados);
  });

  test('debería dibujar el símbolo correcto', () => {
    expect(torreBlanco.dibujar()).toBe('♖');
    expect(torreNegro.dibujar()).toBe('♜');
  });
});