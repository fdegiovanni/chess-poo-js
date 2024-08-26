/**
 * @jest-environment jsdom
 */
import { Tablero } from '../Tablero.js';

describe('Tablero', () => {
  let tablero;

  beforeEach(() => {
    document.body.innerHTML = `
<div id="contenedor-tablero">
        <!-- Etiquetas de números -->
        <div class="numero" style="grid-row: 1;">8</div>
        <div class="numero" style="grid-row: 2;">7</div>
        <div class="numero" style="grid-row: 3;">6</div>
        <div class="numero" style="grid-row: 4;">5</div>
        <div class="numero" style="grid-row: 5;">4</div>
        <div class="numero" style="grid-row: 6;">3</div>
        <div class="numero" style="grid-row: 7;">2</div>
        <div class="numero" style="grid-row: 8;">1</div>

        <!-- Tablero -->
        <div id="tablero"></div>

        <!-- Etiquetas de letras -->
        <div class="letra" style="grid-column: 2;">A</div>
        <div class="letra" style="grid-column: 3;">B</div>
        <div class="letra" style="grid-column: 4;">C</div>
        <div class="letra" style="grid-column: 5;">D</div>
        <div class="letra" style="grid-column: 6;">E</div>
        <div class="letra" style="grid-column: 7;">F</div>
        <div class="letra" style="grid-column: 8;">G</div>
        <div class="letra" style="grid-column: 9;">H</div>
    </div>

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