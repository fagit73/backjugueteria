//Requerimos los módulos necesarios para nuestro servidor
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const productosRouter = require("./routes/productosRouter.js");
const carritoRouter = require("./routes/carritoRouter.js");
const authenticationRouter = require("./routes/authenticationRouter.js");

//Creamos una instancia de aplicación express
const app = express();
// Definimos el puerto en el que se ejecutará nuestro servidor.
const PORT = 3001;

// Middleware para registrar cada solicitud entrante en la consola para propósitos de desarrollo.
app.use(morgan("dev")); 

// Middleware CORS para permitir solicitudes desde los orígenes especificados (puertos 5501 y 5500 en este caso).
app.use(cors({origin:["http://127.0.0.1:5501","http://127.0.0.1:5500", "http://cloudinary.com"]}));

// Middleware para servir archivos estáticos desde la carpeta 'public'.
app.use(express.static("public"));

// Middleware para parsear cuerpos de solicitud JSON, lo que nos permite acceder a `req.body`.
app.use(express.json());

// Montamos el router de productos en la ruta '/productos', todas las rutas definidas en productosRouter estarán bajo este prefijo.
app.use("/productos", productosRouter);
app.use("/carrito", carritoRouter);
app.use("/api", authenticationRouter);

// Iniciamos el servidor para que escuche en el puerto definido y mostramos un mensaje en la consola al iniciar.
app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
