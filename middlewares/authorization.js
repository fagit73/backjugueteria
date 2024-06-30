// const jsonwebtoken = require('jsonwebtoken');
// const dotenv = require('dotenv');
// const database = require('../db/database.js');

// dotenv.config();

// async function soloAdmin(req, res, next) {
//   const logueado = await revisarCookie(req);
//   if (logueado) return next();
//   return res.redirect("/");
// }

// async function soloPublico(req, res, next) {
//   const logueado = await revisarCookie(req);
//   if (!logueado) return next();
//   return res.redirect("/admin");
// }

// async function revisarCookie(req) {
//   try {
//     const cookieJWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt=")).slice(4);
//     const decodificada = jsonwebtoken.verify(cookieJWT, process.env.JWT_SECRET);
//     console.log(decodificada);

//     let connection;
//     try {
//       connection = await database.getConnection();
//       const [rows] = await connection.query("SELECT * FROM usuario WHERE user = ?", [decodificada.user]);
//       if (rows.length === 0) {
//         return false;
//       }
//       const usuarioAResvisar = rows[0];
//       console.log(usuarioAResvisar);
//       return true;
//     } catch (error) {
//       console.error(error);
//       return false;
//     } finally {
//       if (connection) connection.release();
//     }
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }

// module.exports = {
//   soloAdmin,
//   soloPublico,
// };
