// Verificar si la página actual es diferente de la página de "En construcción"
if (window.location.pathname !== "/paginaEnConstruccion.html") {
  // Redireccionar si la página está vacía
  if (!document.querySelector("main").innerHTML.trim()) {
    window.location.href = "../templates/paginaEnConstruccion.html";
  }
}
