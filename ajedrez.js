// Importamos las clases
import { Tablero } from './Tablero.js';
import { Rey } from './Rey.js';
import { Reina } from './Reina.js';
import { Torre } from './Torre.js';
import { Alfil } from './Alfil.js';
import { Caballo } from './Caballo.js';
import { Peon } from './Peon.js';

const tablero = new Tablero();

const reyBlanco = new Rey('blanco', 4, 0);
const reinaBlanca = new Reina('blanco', 3, 0);
const torreBlanca1 = new Torre('blanco', 0, 0);
const torreBlanca2 = new Torre('blanco', 7, 0);
const alfilBlanco1 = new Alfil('blanco', 2, 0);
const alfilBlanco2 = new Alfil('blanco', 5, 0);
const caballoBlanco1 = new Caballo('blanco', 1, 0);
const caballoBlanco2 = new Caballo('blanco', 6, 0);
const peonBlanco1 = new Peon('blanco', 0, 1);
const peonBlanco2 = new Peon('blanco', 1, 1);
const peonBlanco3 = new Peon('blanco', 2, 1);
const peonBlanco4 = new Peon('blanco', 3, 1);
const peonBlanco5 = new Peon('blanco', 4, 1);
const peonBlanco6 = new Peon('blanco', 5, 1);
const peonBlanco7 = new Peon('blanco', 6, 1);
const peonBlanco8 = new Peon('blanco', 7, 1);

const blancas = [
    reyBlanco,
    reinaBlanca,
    torreBlanca1,
    torreBlanca2,
    alfilBlanco1,
    alfilBlanco2,
    caballoBlanco1,
    caballoBlanco2,
    peonBlanco1,
    peonBlanco2,
    peonBlanco3,
    peonBlanco4,
    peonBlanco5,
    peonBlanco6,
    peonBlanco7,
    peonBlanco8,
];

blancas.forEach((pieza) => tablero.agregarPieza(pieza));

const reyNegro = new Rey('negro', 4, 7);
const reinaNegra = new Reina('negro', 3, 7);
const torreNegra1 = new Torre('negro', 0, 7);
const torreNegra2 = new Torre('negro', 7, 7);
const alfilNegro1 = new Alfil('negro', 2, 7);
const alfilNegro2 = new Alfil('negro', 5, 7);
const caballoNegro1 = new Caballo('negro', 1, 7);
const caballoNegro2 = new Caballo('negro', 6, 7);
const peonNegro1 = new Peon('negro', 0, 6);
const peonNegro2 = new Peon('negro', 1, 6);
const peonNegro3 = new Peon('negro', 2, 6);
const peonNegro4 = new Peon('negro', 3, 6);
const peonNegro5 = new Peon('negro', 4, 6);
const peonNegro6 = new Peon('negro', 5, 6);
const peonNegro7 = new Peon('negro', 6, 6);
const peonNegro8 = new Peon('negro', 7, 6);

const negras = [
    reyNegro,
    reinaNegra,
    torreNegra1,
    torreNegra2,
    alfilNegro1,
    alfilNegro2,
    caballoNegro1,
    caballoNegro2,
    peonNegro1,
    peonNegro2,
    peonNegro3,
    peonNegro4,
    peonNegro5,
    peonNegro6,
    peonNegro7,
    peonNegro8,
]

negras.forEach(pieza => tablero.agregarPieza(pieza))


