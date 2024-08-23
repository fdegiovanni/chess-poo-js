import { Peon } from '../../piezas/Peon.js';

describe('Peon', () => {
  let peonBlanco;
  let peonNegro;

  beforeEach(() => {
    peonBlanco = new Peon('blanco', 4, 0);
    peonNegro = new Peon('negro', 4, 7);
  });

  test('debería devolver los movimientos correctos', () => {
    const movimientosEsperadosBlanco = [[1, 0]];
    const movimientosEsperadosNegro = [[-1, 0]];
    expect(peonBlanco.getMovimientos()).toEqual(movimientosEsperadosBlanco);
    expect(peonNegro.getMovimientos()).toEqual(movimientosEsperadosNegro);
  });

  test('debería dibujar el símbolo correcto', () => {
    expect(peonBlanco.dibujar()).toBe('♙');
    expect(peonNegro.dibujar()).toBe('♟');
  });
});