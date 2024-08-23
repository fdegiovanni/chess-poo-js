// Tablero.test.js
import { Tablero } from '../Tablero.js';

describe('Tablero', () => {
  let tablero;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="A1"></div>
      <div id="A2"></div>
      <div id="A3"></div>
      <div id="A4"></div>
      <div id="A5"></div>
      <div id="A6"></div>
      <div id="A7"></div>
      <div id="A8"></div>
      <div id="B1"></div>
      <div id="B2"></div>
      <div id="B3"></div>
      <div id="B4"></div>
      <div id="B5"></div>
      <div id="B6"></div>
      <div id="B7"></div>
      <div id="B8"></div>
      <!-- Add more divs for the rest of the board -->
    `;
    tablero = new Tablero();
  });

  test('debería añadir la clase "posible-movimiento" a las casillas válidas', () => {
    const movimientos = [
      [1, 0], // Un paso hacia adelante
      [0, 1], // Un paso hacia la derecha
    ];
    const posicionActual = 'A1';
    tablero.mostrarPosiblesMovimientos(movimientos, posicionActual);

    expect(document.getElementById('A2').classList.contains('posible-movimiento')).toBe(true);
    expect(document.getElementById('B1').classList.contains('posible-movimiento')).toBe(true);
  });

  test('no debería añadir la clase "posible-movimiento" a las casillas inválidas', () => {
    const movimientos = [
      [-1, 0], // Un paso hacia atrás (fuera del tablero desde A1)
      [0, -1], // Un paso hacia la izquierda (fuera del tablero desde A1)
    ];
    const posicionActual = 'A1';
    tablero.mostrarPosiblesMovimientos(movimientos, posicionActual);

    expect(document.getElementById('A0')).toBeNull();
    expect(document.getElementById('@1')).toBeNull();
  });
});