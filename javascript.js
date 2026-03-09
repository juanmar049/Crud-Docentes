let docentes = [];
let editIndex = -1;

const form = document.getElementById("formDocente");
const tabla = document.getElementById("tablaDocentes");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const docente = {
        tipoDocumento: document.getElementById("tipoDocumento").value,
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        fechaNacimiento: document.getElementById("fechaNacimiento").value,
        nivel: document.getElementById("nivel").value,
        area: document.getElementById("area").value,
        grado: document.getElementById("grado").value,
        eps: document.getElementById("eps").value,
        salario: document.getElementById("salario").value
    };

    if (editIndex === -1) {
        docentes.push(docente);
    } else {
        docentes[editIndex] = docente;
        editIndex = -1;
    }

    form.reset();
    mostrarDocentes();
});

function mostrarDocentes() {
    tabla.innerHTML = "";

    docentes.forEach((docente, index) => {
        tabla.innerHTML += `
            <tr>
                <td>${docente.nombre}</td>
                <td>${docente.apellido}</td>
                <td>${docente.area}</td>
                <td>${docente.salario}</td>
                <td>
                    <button onclick="editarDocente(${index})">Editar</button>
                    <button onclick="eliminarDocente(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function eliminarDocente(index) {
    docentes.splice(index, 1);
    mostrarDocentes();
}

function editarDocente(index) {
    const docente = docentes[index];

    document.getElementById("tipoDocumento").value = docente.tipoDocumento;
    document.getElementById("nombre").value = docente.nombre;
    document.getElementById("apellido").value = docente.apellido;
    document.getElementById("fechaNacimiento").value = docente.fechaNacimiento;
    document.getElementById("nivel").value = docente.nivel;
    document.getElementById("area").value = docente.area;
    document.getElementById("grado").value = docente.grado;
    document.getElementById("eps").value = docente.eps;
    document.getElementById("salario").value = docente.salario;

    editIndex = index;
}