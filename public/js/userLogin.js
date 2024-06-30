const loginBtn = document.getElementById("loginBtn");
const loginDropdown = document.getElementById("loginDropdown");

// Evento click para mostrar/ocultar el formulario de inicio de sesión
loginBtn.addEventListener("click", function () {
  // Llama a la función para mostrar/ocultar el formulario
  toggleLogin();
});

// Función para mostrar/ocultar el formulario de inicio de sesión
function toggleLogin() {
  // Comprueba si el menú desplegable está actualmente visible
  if (loginDropdown.style.display === "block") {
    // Si está visible, ocúltalo cambiando su estilo a "none"
    loginDropdown.style.display = "none";
  } else {
    // Si está oculto, hazlo visible cambiando su estilo a "block"
    loginDropdown.style.display = "block";
  }
}
