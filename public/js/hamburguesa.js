const botonHamburguesa = document.getElementById("toggle-menu-mobile");
const menu = document.getElementById("menu"); 
const cerrar = document.getElementById("cerrar");

botonHamburguesa.addEventListener("click", desplegarMenu);
cerrar.addEventListener("click", cerrarMenu);

function desplegarMenu() {
    menu.style.display = "block"; 
    cerrar.style.display = "block"; 
    botonHamburguesa.style.display = "none"; 
}

function cerrarMenu() {
    menu.style.display = "none"; 
    cerrar.style.display = "none"; 
    botonHamburguesa.style.display = "block"; 
}

window.addEventListener("resize", function() {
    if (window.innerWidth > 676) { // Asume que 568px es el punto de interrupción para el modo de escritorio
        menu.style.display = "block"; 
        cerrar.style.display = "none"; 
        botonHamburguesa.style.display = "none"; 
    } else{
        botonHamburguesa.style.display = "block";
        cerrar.style.display = "none";
        menu.style.display="none";
    }
});

