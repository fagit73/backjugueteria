const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const dotenv = require('dotenv');
const database = require('../db/database.js'); 
dotenv.config();

async function login(req, res) {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).send({ status: "Error", message: "Los campos están incompletos" });
  }

  let connection;
  try {
    connection = await database.getConnection();
    const [rows] = await connection.query("SELECT * FROM usuario WHERE user = ?", [user]);

    if (rows.length === 0) {
      return res.status(400).send({ status: "Error", message: "Error durante login" });
    }

    const usuarioAResvisar = rows[0];
    const loginCorrecto = await bcryptjs.compare(password, usuarioAResvisar.password);

    if (!loginCorrecto) {
      return res.status(400).send({ status: "Error", message: "Error durante login" });
    }

    const token = jsonwebtoken.sign(
      { user: usuarioAResvisar.user },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );

    const cookieOption = {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
      path: "/"
    };

    res.cookie("jwt", token, cookieOption);
    res.send({ status: "ok", message: "Usuario loggeado", redirect: "/" });

  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", message: "Error en el servidor" });
  } finally {
    if (connection) connection.release();
  }
}

async function register(req, res) {
  const { user, password, email } = req.body;

  if (!user || !password || !email) {
    return res.status(400).send({ status: "Error", message: "Los campos están incompletos" });
  }

  let connection;
  try {
    connection = await database.getConnection();
    const [rows] = await connection.query("SELECT * FROM usuario WHERE user = ?", [user]);

    if (rows.length > 0) {
      return res.status(400).send({ status: "Error", message: "Este usuario ya existe" });
    }

    const salt = await bcryptjs.genSalt(5);
    const hashPassword = await bcryptjs.hash(password, salt);

    await connection.query("INSERT INTO usuario (user, email, password) VALUES (?, ?, ?)", [user, email, hashPassword]);

    res.status(201).send({ status: "ok", message: `Usuario ${user} agregado`, redirect: "/" });

  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", message: "Error en el servidor" });
  } finally {
    if (connection) connection.release();
  }
}

module.exports = {
  login,
  register
};
