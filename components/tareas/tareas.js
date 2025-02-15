import { checkbox } from "./checkbox.js";
import { tareas } from "./data.js";

function crearTareas() {
    let contenedor = document.createElement("div");
    contenedor.className = "contenedorT";

    tareas.forEach((tarea) => {
        let divTarea = document.createElement("div"); 
        divTarea.className = "div-tarea";

        let tareaCheckbox = document.createElement("input");
        tareaCheckbox.type = "checkbox";
        tareaCheckbox.className = "cuadrito";

        let textoTarea = document.createElement("span");
        textoTarea.textContent = tarea;

        divTarea.appendChild(tareaCheckbox);
        divTarea.appendChild(textoTarea);
        contenedor.appendChild(divTarea);

        checkbox(tareaCheckbox, textoTarea, divTarea);
    });

    return contenedor;
}

export { crearTareas };



