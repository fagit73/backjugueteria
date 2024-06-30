//este script esta ligado a la funcionalidad del carrito agregar, sacar un producto, borrar y reiniciar el carrito. se va a vincular entonces tanto con el index.html como con cart html

const cuentaCarritoElement = document.getElementById("cartCount");

/** Toma un objeto producto o un objeto con al menos un idProducto y lo agrega al carrito */
function agregarAlCarrito(producto){
  // Reviso si el producto está en el carrito (local storage)
  let memoria = JSON.parse(localStorage.getItem("juguetes"));
  let cantidadProductoFinal;
  // Si no hay localstorage lo creo
  if(!memoria || memoria.length === 0) {
    const nuevoProducto = getNuevoProductoParaMemoria(producto)
    localStorage.setItem("juguetes", JSON.stringify([nuevoProducto]));
    actualizarNumeroCarrito();
    cantidadProductoFinal = 1;
  }
  else {
    // Si hay localstorage me fijo si el artículo ya está ahí
    const indiceProducto = memoria.findIndex(juguete => juguete.idProducto === producto.idProducto);
    const nuevaMemoria = memoria;
    // Si el producto no está en el carrito lo agrego
    if(indiceProducto === -1){
      const nuevoProducto = getNuevoProductoParaMemoria(producto);
      nuevaMemoria.push(nuevoProducto);
      cantidadProductoFinal = 1;
    } else {
      // Si el producto está en el carrito le agrego 1 a la cantidad.
      nuevaMemoria[indiceProducto].cantidad++;
      cantidadProductoFinal = nuevaMemoria[indiceProducto].cantidad;
    }
    localStorage.setItem("juguetes", JSON.stringify(nuevaMemoria));
    actualizarNumeroCarrito();
    return cantidadProductoFinal;
  }
}

/** Resta una unidad de un producto del carrito */
function restarAlCarrito(producto){
  let memoria = JSON.parse(localStorage.getItem("juguetes"));
  let cantidadProductoFinal = 0;
  const indiceProducto = memoria.findIndex(juguete => juguete.idProducto === producto.idProducto);
  let nuevaMemoria = memoria;
  nuevaMemoria[indiceProducto].cantidad--;
  cantidadProductoFinal = nuevaMemoria[indiceProducto].cantidad;
  if(cantidadProductoFinal === 0){
    nuevaMemoria.splice(indiceProducto, 1);
  };
  localStorage.setItem("juguetes", JSON.stringify(nuevaMemoria));
  actualizarNumeroCarrito();
  return cantidadProductoFinal;
}

// Agrega cantidad a un objeto producto y lo devuelve
function getNuevoProductoParaMemoria(producto){
  const nuevoProducto = producto;
  nuevoProducto.cantidad = 1;
  return nuevoProducto;
}

/** Actualiza el número del carrito del header */
function actualizarNumeroCarrito(){
  let cuenta = 0;
  const memoria = JSON.parse(localStorage.getItem("juguetes"));
  if(memoria && memoria.length > 0){
    cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    return cuentaCarritoElement.innerText = cuenta;
  }
  cuentaCarritoElement.innerText = 0;
}

/** Reinicia el carrito */
function reiniciarCarrito(){
  localStorage.removeItem("juguetes");
  actualizarNumeroCarrito();
}

// Inicialización
actualizarNumeroCarrito();
