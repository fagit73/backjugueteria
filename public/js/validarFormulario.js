function validarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var provincia = document.getElementById("provincia").value.trim();
    var pais = document.getElementById("pais").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    // Definir longitud máxima para los campos de entrada
    var maxLengthNombre = 50;
    var maxLengthApellido = 50;
    var maxLengthEmail = 100;
    var maxLengthTelefono = 15;
    var maxLengthProvincia = 50;
    var maxLengthPais = 50;
    var maxLengthMensaje = 500;

    // Verificar longitud máxima para cada campo de entrada
    if (nombre.length > maxLengthNombre || apellido.length > maxLengthApellido || email.length > maxLengthEmail || telefono.length > maxLengthTelefono || provincia.length > maxLengthProvincia || pais.length > maxLengthPais || mensaje.length > maxLengthMensaje) {
        alert("Por favor, asegúrese de que los campos no excedan la longitud máxima permitida.");
        return false;
    }

    // Verificar si algún campo está en blanco
    if (nombre === "" || apellido === "" || email === "" || telefono === "" || provincia === "" || pais === "" || mensaje === "") {
        alert("Debe completar todos los campos del formulario.");
        return false;
    }

    // Verificar si el nombre y el apellido contienen solo caracteres alfabéticos
    // Verificar si el nombre contiene solo caracteres alfabéticos
    var nombreTest = /^[a-zA-Z]+$/.test(nombre);

    // Verificar si el apellido contiene solo caracteres alfabéticos y espacios
    var apellidoTest = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(apellido);

    if (!nombreTest || !apellidoTest) {
    alert("El nombre debe contener solo letras del alfabeto y el apellido puede contener solo letras y espacios.");
    return false;
    }

    // Validar E-mail: Debe ser un formato de correo electrónico válido.
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return false;
    }

    // Verificar si teléfono no es un número
    if (isNaN(telefono)) {
        alert("Debe completar teléfono solo con números.");
        return false;
    }

    // Verificar si provincia y país contienen solo letras
    var provinciaTest = /^[a-zA-Z\s]+$/.test(provincia);
    var paisTest = /^[a-zA-Z\s]+$/.test(pais);

    if (!provinciaTest || !paisTest) {
        alert("La provincia y el país deben contener solo letras.");
        return false;
    }

    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Se enviaron los datos correctamente.");
    return true;
}

function limpiarFormulario() {
    // Obtener todos los campos de entrada y el área de texto
    var inputs = document.querySelectorAll('.form-input');

    // Iterar sobre los campos y limpiar sus valores
    inputs.forEach(input => {
        if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
            input.value = ''; // Limpiar campo de entrada o área de texto
        }
    });
}
