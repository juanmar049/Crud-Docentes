const form = document.getElementById("formDocente");
const tabla = document.getElementById("tablaDocentes");

let editando = false;
let idEditar = null;


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const datos = new FormData(form);

    let url = editando ? "editar.php" : "guardar.php";

    if (editando) {
        datos.append("id", idEditar);
    }

    fetch(url, {
        method: "POST",
        body: datos
    })
    .then(res => res.text())
    .then(res => {
        if (res === "ok") {
            alert(editando ? "Actualizado" : "Guardado");
            form.reset();
            editando = false;
            cargarDocentes();
        }
    });
});


function cargarDocentes() {
    fetch("listar.php")
    .then(res => res.json())
    .then(data => {
        tabla.innerHTML = "";

        data.forEach(docente => {
            tabla.innerHTML += `
                <tr>
                    <td>${docente.id}</td>
                    <td>${docente.nombre}</td>
                    <td>${docente.apellido}</td>
                    <td>${docente.area}</td>
                    <td>${docente.salario}</td>
                    <td>
                        <button onclick="editarDocente(${docente.id}, '${docente.nombre}', '${docente.apellido}', '${docente.area}', '${docente.salario}')">Editar</button>
                        <button onclick="eliminarDocente(${docente.id})">Eliminar</button>
                    </td>
                </tr>
            `;
        });
    });
}


function eliminarDocente(id) {
    if (confirm("¿Eliminar docente?")) {
        const datos = new FormData();
        datos.append("id", id);

        fetch("eliminar.php", {
            method: "POST",
            body: datos
        })
        .then(res => res.text())
        .then(res => {
            if (res === "ok") {
                cargarDocentes();
            }
        });
    }
}


function editarDocente(id, nombre, apellido, area, salario) {
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("area").value = area;
    document.getElementById("salario").value = salario;

    editando = true;
    idEditar = id;
}

cargarDocentes();