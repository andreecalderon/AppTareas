import { tareas } from "./data.js";

function crearTareas() {
    let contenedor = document.createElement('div');
    contenedor.className = "contenedorT";

    
    tareas.forEach((tarea, i) => {
        let divTarea = document.createElement('div'); 
        divTarea.className = "div-tarea";

        
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "cuadrito";

    
        let textoTarea = document.createElement('span');
        textoTarea.textContent = tarea; 

        
        contenedor.appendChild(checkbox);
        divTarea.appendChild(textoTarea);

        
        contenedor.appendChild(divTarea);
    });

    return contenedor;
}

export { crearTareas };



