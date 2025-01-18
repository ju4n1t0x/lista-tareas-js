function agregarTarea() {
    let nuevaTareaField = document.getElementById("nuevaTarea").value;

    if (nuevaTareaField.trim() === "") {
        alert("Ingrese una tarea");
        return;
    }

    let tareaNueva = document.createElement("li");
    tareaNueva.textContent = nuevaTareaField + " ";

    let eliminarTarea = document.createElement("button");
    eliminarTarea.textContent = "Eliminar";
    eliminarTarea.onclick = function() {
        tareaNueva.remove();
    };

    tareaNueva.appendChild(eliminarTarea);

    document.getElementById("listaTareas").appendChild(tareaNueva);

    document.getElementById("nuevaTarea").value = "";
}