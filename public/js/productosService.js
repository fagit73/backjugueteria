//Función  que me permite comunicar  con el backend para obtener los juguetes

async function getJuguetes(){
//     // Realiza una solicitud GET a la ruta del backend.
    const res = await fetch ("http://localhost:3001/productos/list");
    // Espera a que la respuesta se convierta a formato JSON.
    const resJson = await res.json();
    // Devuelve los datos en formato JSON.
    return resJson;
}