const newForm = document.getElementById("idNewForm");

const buttonCrear = document.getElementById("idBtnCrear");
const buttonAddElemento = document.getElementById("idBtnAddElement");
const buttonValidar = document.getElementById("idBtnValidar");

const cmbElemento = document.getElementById("idCmbElemento");

const tituloElemento = document.getElementById("idTituloElemento");
const nombreElemento = document.getElementById("idNombreElemento");

const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

const validarIDUnico = function(id) {
    if (document.getElementById(id)) {
        alert(`El ID "${id}" ya existe. No se permiten controles con el mismo ID.`);
        return false;
    }
    return true;
};

const verificarTipoElemento = function () {
    let elemento = cmbElemento.value;
    if (elemento != "") {
        modal.show();
    } else {
        alert("Debe seleccionar el elemento que se creará.");
    }
};

const newSelect = function(){
    let idElemento = `id${nombreElemento.value}`;
    if (!validarIDUnico(idElemento)) return;

    let addElemento = document.createElement("select");
    addElemento.setAttribute("id", idElemento);
    addElemento.setAttribute("class", "form-select");

    for (let i = 1; i <= 10; i++) {
        let addOption = document.createElement("option");
        addOption.value = i;
        addOption.innerHTML = `Opción ${i}`;
        addElemento.appendChild(addOption);
    }

    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", idElemento);
    labelElemento.textContent = tituloElemento.value;

    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`;

    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};

const newRadioCheckbox = function (newElemento) {
    let idElemento = `id${nombreElemento.value}`;
    if (!validarIDUnico(idElemento)) return;

    let addElemento = document.createElement("input");
    addElemento.setAttribute("id", idElemento);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-check-input");

    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("class", "form-check-label");
    labelElemento.setAttribute("for", idElemento);
    labelElemento.textContent = tituloElemento.value;

    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`;

    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-check");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};

const newInput = function (newElemento) {
    let idElemento = `id${nombreElemento.value}`;
    if (!validarIDUnico(idElemento)) return;

    let addElemento = newElemento === "textarea" ? document.createElement("textarea") : document.createElement("input");
    addElemento.setAttribute("id", idElemento);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-control");
    addElemento.setAttribute("placeholder", tituloElemento.value);

    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", idElemento);
    labelElemento.textContent = tituloElemento.value;

    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`;

    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating mb-3");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};

const validarFormulario = function () {
    let elementos = newForm.elements;
    let esValido = true;

    for (let elem of elementos) {
        if ((elem.type === "text" || elem.type === "email" || elem.type === "color" || elem.type === "textarea") && elem.value === "") {
            alert(`El campo con ID "${elem.id}" está vacío.`);
            esValido = false;
            break;
        } else if ((elem.type === "checkbox" || elem.type === "radio") && !elem.checked) {
            alert(`Debe seleccionar el campo con ID "${elem.id}".`);
            esValido = false;
            break;
        } else if (elem.tagName === "SELECT" && elem.selectedIndex === -1) {
            alert(`Debe seleccionar una opción en el campo con ID "${elem.id}".`);
            esValido = false;
            break;
        }
    }
    if (esValido) alert("Todos los campos están completos y correctamente seleccionados.");
};

buttonCrear.onclick = () => {
    verificarTipoElemento();
};

buttonAddElemento.onclick = () => {
    if (nombreElemento.value !== "" && tituloElemento.value !== "") {
        let elemento = cmbElemento.value;

        if (elemento === "select") {
            newSelect();
        } else if (elemento === "radio" || elemento === "checkbox") {
            newRadioCheckbox(elemento);
        } else if (elemento === "color" || elemento === "email" || elemento === "textarea" || elemento === "text") {
            newInput(elemento);
        }
    } else {
        alert("Faltan campos por completar.");
    }
};

buttonValidar.onclick = validarFormulario;

document.getElementById("idModal").addEventListener("shown.bs.modal", () => {
    tituloElemento.value = "";
    nombreElemento.value = "";
    tituloElemento.focus();
});