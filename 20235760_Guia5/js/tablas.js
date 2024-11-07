let table ="<table>";
table+="<thead>";
table+="<tr>";
table+="<th scope='col'>#</th>";
table+="<th scope='col'>Nombre</th>";
table+="<th scope='col'>Apellido</th>";
table+="<th scope='col'>Correo electrónico</th>";
table+="</tr>";
table+="</thead>";
table+="<tbody>";

const alumnos =[
    {id: 1, nombre: "Diego Cabezas", apllido: "Cabezas", correo:
        "20235760@esen.edu.sv"},
    {id: 1, nombre: "July Ceaser", apllido: "Contreras", correo:
        "20235918@esen.edu.sv"},
    {id: 1, nombre: "René Alejo", apllido: "Morataya", correo:
        "20235766@esen.edu.sv"},
    {id: 1, nombre: "Christian Alejo", apllido: "Sanchez", correo:
        "20235787@esen.edu.sv"},
    {id: 1, nombre: "María Fernanda", apllido: "Rubio", correo:
        "20235795@esen.edu.sv"},
];

alumnos.forEach(alumno =>{
    table+="<tr>";
    table+=`<td scope='row'>${alumno.id}</td>`;
    table+=`<td>${alumno.nombre}</td>`;
    table+=`<td>${alumno.apllido}</td>`;
    table+=`<td>${alumno.correo}</td>`;
    table+="</tr>";
});

table += "</tbody>";
table +="</table>";

const contenedor = document.querySelector("#idContenedor");
contenedor.innerHTML = table;