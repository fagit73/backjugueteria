// Texto a animar letra por letra
const texto = "by Papelera Zárate";

// Tiempo de espera entre cada letra (en milisegundos)
const velocidad = 100;

// Obtener una referencia al elemento HTML donde se mostrará el texto animado
const textoAnimado = document.getElementById("textoAnimado");

// Función para animar el texto letra por letra
function animarTexto() {
  let i = 0;
  // Intervalo que agrega una letra cada vez al texto animado
  const intervalo = setInterval(function () {
    // Agrega la siguiente letra al texto animado
    textoAnimado.textContent += texto.charAt(i);
    i++;
    // Detiene la animación cuando se han mostrado todas las letras
    if (i > texto.length) {
      clearInterval(intervalo);
    }
  }, velocidad);
}

// Llama a la función para iniciar la animación cuando la página se carga completamente
window.onload = animarTexto;
