import { checkbox } from "./checkbox.js";

async function obtenerTareas() {
    try {
        const respuesta = await fetch("http://localhost:3000/tareas");
        if (!respuesta.ok) throw new Error("Error al obtener las tareas");
        return await respuesta.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function crearTareas() {
    let contenedor = document.createElement("div");
    contenedor.className = "contenedorT";

    const tareas = await obtenerTareas();

    tareas.forEach((tarea) => {
        let divTarea = document.createElement("div"); 
        divTarea.className = "div-tarea";

        let tareaCheckbox = document.createElement("input");
        tareaCheckbox.type = "checkbox";
        tareaCheckbox.className = "cuadrito";
        tareaCheckbox.checked = tarea.estado === "completo"; 

        let textoTarea = document.createElement("span");
        textoTarea.textContent = tarea.nombre;

        // Evento para actualizar estado en la BD
        tareaCheckbox.addEventListener("change", async () => {
            const nuevoEstado = tareaCheckbox.checked ? "completo" : "incompleto";
            try {
                await fetch(`http://localhost:3000/tareas/${tarea.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ estado: nuevoEstado })
                });
            } catch (error) {
                console.error("Error al actualizar tarea:", error);
            }
        });

        divTarea.appendChild(tareaCheckbox);
        divTarea.appendChild(textoTarea);
        contenedor.appendChild(divTarea);

        checkbox(tareaCheckbox, textoTarea, divTarea);
    });

    return contenedor;
}

export { crearTareas };


