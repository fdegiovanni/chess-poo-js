import { Reina } from '../../src/piezas/Reina.js';

describe('Reina', () => {
  let reinaBlanco;
  let reinaNegro;

  beforeEach(() => {
    reinaBlanco = new Reina('blanco', 4, 0);
    reinaNegro = new Reina('negro', 4, 7);
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
    expect(reinaBlanco.getMovimientos()).toEqual(movimientosEsperados);
    expect(reinaNegro.getMovimientos()).toEqual(movimientosEsperados);
  });

  test('debería dibujar el símbolo correcto', () => {
    expect(reinaBlanco.dibujar()).toBe('♕');
    expect(reinaNegro.dibujar()).toBe('♛');
  });
});