document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    // Validación del carnet (dos letras y tres números)
    const carnetRegex = /^[A-Za-z]{2}\d{3}$/;
    const carnet = document.getElementById("carnet").value;
    if (!carnetRegex.test(carnet)) {
        valid = false;
        document.getElementById("carnetError").textContent = "Carnet inválido. Ejemplo: AB001";
    } else {
        document.getElementById("carnetError").textContent = "";
    }

    // Validación del nombre completo (solo letras y espacios)
    const nombreRegex = /^[A-Za-z\s]+$/;
    const nombre = document.getElementById("nombre").value;
    if (!nombreRegex.test(nombre)) {
        valid = false;
        document.getElementById("nombreError").textContent = "Nombre inválido. Solo letras y espacios.";
    } else {
        document.getElementById("nombreError").textContent = "";
    }

    // Validación del DUI (########-#)
    const duiRegex = /^\d{8}-\d{1}$/;
    const dui = document.getElementById("dui").value;
    if (!duiRegex.test(dui)) {
        valid = false;
        document.getElementById("duiError").textContent = "DUI inválido. Ejemplo: 12345678-9";
    } else {
        document.getElementById("duiError").textContent = "";
    }

    // Validación del NIT (####-######-###-#)
    const nitRegex = /^\d{4}-\d{6}-\d{3}-\d{1}$/;
    const nit = document.getElementById("nit").value;
    if (!nitRegex.test(nit)) {
        valid = false;
        document.getElementById("nitError").textContent = "NIT inválido. Ejemplo: 1234-567890-123-4";
    } else {
        document.getElementById("nitError").textContent = "";
    }

    // Validación de la fecha de nacimiento (dd/mm/aaaa)
    const fechaRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    const fecha = document.getElementById("fecha").value;
    if (!fechaRegex.test(fecha)) {
        valid = false;
        document.getElementById("fechaError").textContent = "Fecha inválida. Ejemplo: 15/08/1990";
    } else {
        document.getElementById("fechaError").textContent = "";
    }

    // Validación del correo electrónico (el input email ya tiene validación nativa)
    const email = document.getElementById("email").value;
    if (!email) {
        valid = false;
        document.getElementById("emailError").textContent = "Correo electrónico inválido.";
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Validación de la edad (solo números)
    const edadRegex = /^\d+$/;
    const edad = document.getElementById("edad").value;
    if (!edadRegex.test(edad)) {
        valid = false;
        document.getElementById("edadError").textContent = "Edad inválida. Solo números.";
    } else {
        document.getElementById("edadError").textContent = "";
    }

    if (valid) {
        alert("Formulario enviado correctamente.");
    }
});
