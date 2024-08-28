import { Rey } from '../../src/piezas/Rey.js';

describe('Rey', () => {
  let reyBlanco;
  let reyNegro;

  beforeEach(() => {
    reyBlanco = new Rey('blanco', 4, 0);
    reyNegro = new Rey('negro', 4, 7);
  });

  test('debería devolver los movimientos correctos', () => {
    const movimientosEsperados = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [-1, -1],
      [1, -1],
      [-1, 1],
    ];
    expect(reyBlanco.getMovimientos()).toEqual(movimientosEsperados);
    expect(reyNegro.getMovimientos()).toEqual(movimientosEsperados);
  });

  test('debería dibujar el símbolo correcto', () => {
    expect(reyBlanco.dibujar()).toBe('♔');
    expect(reyNegro.dibujar()).toBe('♚');
  });
});