import { Reina } from '../piezas/Reina.js';

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
    ];
    expect(reinaBlanco.getMovimientos()).toEqual(movimientosEsperados);
    expect(reinaNegro.getMovimientos()).toEqual(movimientosEsperados);
  });

  test('debería dibujar el símbolo correcto', () => {
    expect(reinaBlanco.dibujar()).toBe('♕');
    expect(reinaNegro.dibujar()).toBe('♛');
  });
});