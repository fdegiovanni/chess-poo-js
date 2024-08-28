import { Pieza } from '../src/Pieza.js';

describe('Pieza', () => {
  let pieza;

  beforeEach(() => {
    pieza = new Pieza('blanco', 0, 0);
  });

  test('debería inicializarse con el color y la posición correctos', () => {
    expect(pieza.getColor()).toBe('blanco');
    expect(pieza.getPosicion()).toBe('A1'); // Asumiendo que getNombreFila(0) es 'A' y getNombreColumna(0) es '1'
  });

  test('debería moverse a una nueva posición', () => {
    pieza.mover('B2');
    expect(pieza.getPosicion()).toBe('B2');
  });

  test('debería devolver un array vacío de movimientos', () => {
    expect(pieza.getMovimientos()).toEqual([]);
  });

  test('debería dibujar el símbolo correcto', () => {
    expect(pieza.dibujar()).toBe('');
  });

  test('debería destruir la pieza', () => {
    pieza.destroy();
    expect(pieza.getPosicion()).toBeNull();
  });

  test('debería devolver la representación en string correcta', () => {
    expect(pieza.toString()).toBe('Pieza A1 blanco');
  });
});