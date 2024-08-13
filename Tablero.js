class Tablero {
    constructor() {
      this.piezas = new Map();
      this.crearTablero();
    }
  
    crearTablero() {
      const contenedorTablero = document.getElementById('tablero');
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          const casilla = document.createElement('div');
          casilla.classList.add('casilla');
          casilla.classList.add((i + j) % 2 === 0 ? 'blanco' : 'negro');
          casilla.id = `${String.fromCharCode(65 + j)}${8 - i}`;
          casilla.addEventListener('click', (e) => this.seleccionarCasilla(e));
          contenedorTablero.appendChild(casilla);
        }
      }
    }
  
    agregarPieza(pieza) {
      pieza.mover(pieza.posicion);
      this.piezas.set(pieza.posicion, pieza);
      this.actualizarTablero();
    }
  
    moverPieza(posicionActual, nuevaPosicion) {
      const pieza = this.piezas.get(posicionActual);
      if (pieza) {
        pieza.mover(nuevaPosicion);
        this.piezas.delete(posicionActual);
        this.piezas.set(nuevaPosicion, pieza);
        this.actualizarTablero();
      }
    }
  
    actualizarTablero() {
      document.querySelectorAll('.casilla').forEach(casilla => casilla.textContent = '');
      for (let [posicion, pieza] of this.piezas) {
        document.getElementById(posicion).textContent = pieza.dibujar();
      }
    }
  
    seleccionarCasilla(evento) {
        
      const casillaSeleccionada = evento.target;
      const posicion = casillaSeleccionada.id;
  
      if (this.piezaSeleccionada) {
        this.moverPieza(this.piezaSeleccionada.getPosicion(), posicion);
        this.piezaSeleccionada = null;
      } else {
        this.piezaSeleccionada = this.piezas.get(posicion);
      }
    }
  }

  export { Tablero };