const formulario = document.forms["frmRegistro"];
const button = formulario.elements["btnRegistro"];
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});
const bodyModal = document.getElementById("idBodyModal");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validarFormulario = function () {
    let esValido = true;
    let mensajeError = "";
    const elementos = formulario.elements;

    for (let elemento of elementos) {
        if (elemento.type !== "button" && elemento.value.trim() === "") {
            esValido = false;
            mensajeError += `El campo "${elemento.name}" no puede estar vacío.\n`;
        }
    }

    const fechaNacimiento = formulario.elements["fechaNacimiento"];
    const fechaActual = new Date();
    const fechaIngresada = new Date(fechaNacimiento.value);
    if (fechaIngresada > fechaActual) {
        esValido = false;
        mensajeError += "La fecha de nacimiento no puede ser futura.\n";
    }

    const email = formulario.elements["email"];
    if (!regexEmail.test(email.value)) {
        esValido = false;
        mensajeError += "El formato del correo electrónico no es válido.\n";
    }

    const password = formulario.elements["password"];
    const confirmarPassword = formulario.elements["confirmarPassword"];
    if (password.value !== confirmarPassword.value) {
        esValido = false;
        mensajeError += "Las contraseñas no coinciden.\n";
    }

    const intereses = formulario.elements["intereses"];
    let algunInteresSeleccionado = false;
    for (let interes of intereses) {
        if (interes.checked) {
            algunInteresSeleccionado = true;
            break;
        }
    }
    if (!algunInteresSeleccionado) {
        esValido = false;
        mensajeError += "Debe seleccionar al menos un interés.\n";
    }

    const carrera = formulario.elements["carrera"];
    if (carrera.selectedIndex === 0) {
        esValido = false;
        mensajeError += "Debe seleccionar una carrera.\n";
    }

    const pais = formulario.elements["pais"];
    if (pais.selectedIndex === 0) {
        esValido = false;
        mensajeError += "Debe seleccionar un país de origen.\n";
    }

    if (!esValido) {
        alert(mensajeError);
        return;
    }

    mostrarDatosEnModal();
};

const mostrarDatosEnModal = function () {
    const elementos = formulario.elements;

    while (bodyModal.firstChild) {
        bodyModal.removeChild(bodyModal.firstChild);
    }

    const tabla = document.createElement("table");
    tabla.classList.add("table", "table-striped");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const thCampo = document.createElement("th");
    thCampo.textContent = "Campo";
    headerRow.appendChild(thCampo);

    const thValor = document.createElement("th");
    thValor.textContent = "Valor";
    headerRow.appendChild(thValor);

    thead.appendChild(headerRow);
    tabla.appendChild(thead);

    const tbody = document.createElement("tbody");

    for (let elemento of elementos) {
        if (elemento.type !== "button") {
            const row = document.createElement("tr");

            const tdCampo = document.createElement("td");
            tdCampo.textContent = elemento.name;
            row.appendChild(tdCampo);

            const tdValor = document.createElement("td");
            tdValor.textContent = elemento.type === "checkbox" ? (elemento.checked ? "Sí" : "No") : elemento.value;
            row.appendChild(tdValor);

            tbody.appendChild(row);
        }
    }

    tabla.appendChild(tbody);
    bodyModal.appendChild(tabla);

    modal.show();
};

button.onclick = () => {
    validarFormulario();
};
