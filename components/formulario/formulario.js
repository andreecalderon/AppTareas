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

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (input.value.trim() !== "") {
            console.log("Nueva tarea:", input.value.trim());
            input.value = "";
        }
    });

    return form;
}

export { crearFormulario };