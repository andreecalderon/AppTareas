function checkbox(checkbox, label, div) {
    const updateLabelStyle = () => {
        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
            label.style.color = "gray";
        } else {
            label.style.textDecoration = "none";
            label.style.color = "black";
        }
    };

    checkbox.addEventListener("change", updateLabelStyle);

    // Permite que cualquier clic en el div marque/desmarque el checkbox
    div.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked;
        updateLabelStyle();
    });

    // Cambia el estilo al pasar el cursor
    div.addEventListener("mouseover", () => {
        if (!checkbox.checked) {
            label.style.textDecoration = "line-through";
            label.style.color = "blue";
        }
    });

    div.addEventListener("mouseout", () => {
        updateLabelStyle();
    });
}

export { checkbox };

