const mysql = require('mysql2/promise');
const dotenv = require("dotenv");

require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});


// Creo función asíncrona para conectarme con la BD
const getConnection = async () => await pool.getConnection();

const initializeDatabase = async () => {
  let connection;
  try {
    // Obtengo una conexión del pool
    connection = await getConnection();

    // Aseguramos que exista una base de datos llamada 'jugueteria'
    const sqlCreatedb = 'CREATE DATABASE IF NOT EXISTS jugueteria';
    await connection.query(sqlCreatedb);
    console.log('Base de datos: creada o existente.');

    // Cambio al nuevo usuario para usar la base de datos 'jugueteria'
    await connection.changeUser({ database: 'jugueteria' });

    // Consulta SQL para crear la tabla 'producto'
    const createProductoTableQuery = `
      CREATE TABLE IF NOT EXISTS producto (
        idProducto INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        precio DECIMAL(10, 2) NOT NULL,
        imagen_url VARCHAR(255)
      )`;

    // Ejecutamos la consulta SQL para crear la tabla 'producto' si no existe
    await connection.query(createProductoTableQuery);
    console.log('Tabla producto: creada o existente/garantizada.');

    // Consulta SQL para crear la tabla 'usuario'
    const createUsuarioTableQuery = `
      CREATE TABLE IF NOT EXISTS usuario (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
      )`;

    // Ejecutamos la consulta SQL para crear la tabla 'usuario' si no existe
    await connection.query(createUsuarioTableQuery);
    console.log('Tabla usuario: creada o existente/garantizada.');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

// Inicializamos la base de datos
initializeDatabase();

// Exportamos la conexión para poder usarla en otras partes del código
module.exports = {
  getConnection
};
