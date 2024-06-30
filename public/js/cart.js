const contenedorTarjetas = document.getElementById("cart-container");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesContainer = document.getElementById("totales");

/** Crea las tarjetas de productos teniendo en cuenta lo guardado en localstorage */
function crearTarjetasProductosCarrito() {
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("juguetes"));
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevoJuguete = document.createElement("div");
      nuevoJuguete.classList = "tarjeta-producto";
      nuevoJuguete.innerHTML = `
        <img src="${producto.imagen_url}">
        <h3>${producto.nombre}</h3>
        <span class="precio">$${producto.precio}</span>
        <div>
          <button>-</button>
          <span class="cantidad">${producto.cantidad}</span>
          <button>+</button>
        </div>
      `;
      contenedorTarjetas.appendChild(nuevoJuguete);
      nuevoJuguete
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          cantidadElement.innerText = restarAlCarrito(producto);
          crearTarjetasProductosCarrito();
          actualizarTotales();
        });
      nuevoJuguete
        .getElementsByTagName("button")[1]
        .addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          cantidadElement.innerText = agregarAlCarrito(producto);
          actualizarTotales();
        });
    });
  }
  revisarMensajeVacio();
  actualizarTotales();
  actualizarNumeroCarrito();
}

crearTarjetasProductosCarrito();

/** Actualiza el total de precio y unidades de la página del carrito */
function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem("juguetes"));
  let cantidad = 0;
  let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      cantidad += producto.cantidad;
      precio += producto.precio * producto.cantidad;
  });
  }
  cantidadElement.innerText = cantidad;
  precioElement.innerText = precio;
  if (precio === 0) {
    reiniciarCarrito();
    revisarMensajeVacio();
  }
}

document.getElementById("reiniciar").addEventListener("click", () => {
  contenedorTarjetas.innerHTML = "";
  reiniciarCarrito();
  revisarMensajeVacio();
});

/** Muestra o esconde el mensaje de que no hay nada en el carrito */
function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem("juguetes"));
  carritoVacioElement.classList.toggle("escondido", productos);
  totalesContainer.classList.toggle("escondido", !productos);
}

document.getElementById("comprar").addEventListener("click", async () => {
  const carrito = JSON.parse(localStorage.getItem("juguetes"));
  if (carrito && carrito.length > 0) {
    try {
      const res = await fetch("http://localhost:3001/carrito/comprar", {
        method: "POST",
        body: JSON.stringify(carrito),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (res.ok) {
        reiniciarCarrito();
        window.location.href = "http://localhost:3001/templates/compra-exitosa.html";
      }
    } catch (error) {
      console.error('Error al realizar la compra:', error);
    }
  }
});
