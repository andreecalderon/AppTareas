import { checkbox } from "../tareas/checkbox.js";

function crearFormulario() {
    let form = document.createElement("form");
    form.className = "formulario";

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Write a task...";
    input.className = "input-tarea";

    let button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Add";
    button.className = "boton-agregar";

    form.appendChild(input);
    form.appendChild(button);

    let listaTareas = document.createElement("ul");
    listaTareas.className = "lista-tareas";

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (input.value.trim() !== "") {
            let tareaDiv = document.createElement("div");
            tareaDiv.className = "tarea";

            let tareaCheckbox = document.createElement("input");
            tareaCheckbox.type = "checkbox";

            let tareaLabel = document.createElement("label");
            tareaLabel.textContent = input.value.trim();

            tareaDiv.appendChild(tareaCheckbox);
            tareaDiv.appendChild(tareaLabel);
            listaTareas.appendChild(tareaDiv);

            // Conectar con checkbox.js
            checkbox(tareaCheckbox, tareaLabel);

            input.value = "";
        }
    });

    let contenedor = document.createElement("div");
    contenedor.appendChild(form);
    contenedor.appendChild(listaTareas);

    return contenedor;
}

export { crearFormulario };
