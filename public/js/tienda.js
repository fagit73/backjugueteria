// creo una función para crear las tarjetas de los productos, esta no permite crear un elemento para cada producto que luego se imprime (innerHTML) desde js a tienda.html

const contenedorTarjetas= document.getElementById("productos-container");


// funcion creadora de tarjetas de productos

function crearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
      const nuevoJuguete=document.createElement("div");
      nuevoJuguete.classList="tarjeta-producto";
     
      nuevoJuguete.innerHTML=`
        <img src="${producto.imagen_url}">
        <h3> ${producto.nombre} </h3>
        <p> $${producto.precio} </p>
        <button> Agregar al carrito </button>
      `
      contenedorTarjetas.appendChild(nuevoJuguete);
      nuevoJuguete.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))
    });

}

async function getJuguetes(){
  // Realiza una solicitud GET a la ruta del backend.
  const res = await fetch ("http://localhost:3001/productos/list");
  // Espera a que la respuesta se convierta a formato JSON.
  const resJson = await res.json();
  // Devuelve los datos en formato JSON.
  return resJson.data;
}

getJuguetes().then(juguetes => {
  crearTarjetasProductosInicio(juguetes);
})
