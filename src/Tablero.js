class Tablero {
  constructor() {
    this.piezas = new Map();
    this.piezaSeleccionada = null;
    this.casillaTarget = null;
    this.crearTablero();
  }

  crearTablero() {
    const contenedorTablero = document.getElementById("tablero");
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const casilla = document.createElement("div");
        casilla.classList.add("casilla");
        casilla.classList.add((i + j) % 2 === 0 ? "blanco" : "negro");
        casilla.id = `${String.fromCharCode(65 + j)}${8 - i}`;
        casilla.addEventListener("click", (e) => this.seleccionarCasilla(e));
        contenedorTablero.appendChild(casilla);
      }
    }
  }

  agregarPieza(pieza) {
    pieza.mover(pieza.posicion);
    this.piezas.set(pieza.posicion, pieza);
    this.actualizarTablero();
  }

  eliminarPieza(posicion) {
    this.piezas.get(posicion).destroy();
    this.piezas.set(posicion, null);
  }

  moverPieza(posicionActual, nuevaPosicion) {
    const pieza = this.piezas.get(posicionActual);
    if (pieza) {
      pieza.mover(nuevaPosicion);
      this.piezas.delete(posicionActual);
      this.piezas.set(nuevaPosicion, pieza);
      this.limpiarResaltados();
      this.actualizarTablero();
    }
  }

  actualizarTablero() {
    document
      .querySelectorAll(".casilla")
      .forEach((casilla) => (casilla.textContent = ""));
    for (let [posicion, pieza] of this.piezas) {
      document.getElementById(posicion).textContent = pieza.dibujar();
    }
  }

  limpiarResaltados() {
    if (this.casillaSeleccionada) {
      this.casillaSeleccionada.classList.remove("resaltada");
    }
    document
      .querySelectorAll(".casilla.posible-movimiento")
      .forEach((casilla) => {
        casilla.classList.remove("posible-movimiento");
      });
  }

  tienePieza(casilla) {
    return this.piezas.has(casilla);
  }

  resaltarCasilla(casilla) {
    document.getElementById(casilla).classList.add("resaltada");
  }

  seleccionarCasilla(evento) {
    const casillaSeleccionada = evento.target;
    const posicion = casillaSeleccionada.id;

    if (!this.piezaSeleccionada) {
      if (this.tienePieza(posicion)) {
        this.resaltarCasilla(posicion);
        this.casillaSeleccionada = casillaSeleccionada;
        this.piezaSeleccionada = this.piezas.get(posicion);
        this.mostrarPosiblesMovimientos(
          this.piezaSeleccionada.getMovimientos(),
          posicion
        );
        this.casillaTarget = null;
      }
      return;
    }

    if(this.piezaSeleccionada && casillaSeleccionada.classList.contains('posible-movimiento')){
      if (this.tienePieza(posicion)) {
        const colorPiezaSeleccionada = this.piezaSeleccionada.getColor();
        const colorPiezaTarget = this.piezas.get(posicion).getColor();
        if(colorPiezaSeleccionada !== colorPiezaTarget){
          this.eliminarPieza(posicion);
          this.moverPieza(this.piezaSeleccionada.getPosicion(), posicion);
          this.ponerEnNull();
          this.limpiarResaltados();
        }
        
      } else {
        this.moverPieza(this.piezaSeleccionada.getPosicion(), posicion);
        this.ponerEnNull();
        this.limpiarResaltados();
      }
      return;
    }

    if(this.piezaSeleccionada && this.casillaSeleccionada === casillaSeleccionada){
      this.limpiarResaltados();
      this.ponerEnNull();
      return;
    }

  }

  ponerEnNull(){
    this.casillaSeleccionada = null;
    this.piezaSeleccionada = null;
    this.casillaTarget = null;
  }

  mostrarPosiblesMovimientos(movimientos, posicionActual) {
    const [col, fila] = posicionActual.split("");
    movimientos.forEach(([df, dc]) => {
      const nuevaCol = String.fromCharCode(col.charCodeAt(0) + dc);
      const nuevaFila = parseInt(fila) + df;
      const nuevaPosicion = `${nuevaCol}${nuevaFila}`;
      if (
        nuevaFila > 0 &&
        nuevaFila <= 8 &&
        nuevaCol >= "A" &&
        nuevaCol <= "H"
      ) {
        const casilla = document.getElementById(nuevaPosicion);
        if (casilla) {
          casilla.classList.add("posible-movimiento");
        }
      }
    });
  }
}

export { Tablero };
