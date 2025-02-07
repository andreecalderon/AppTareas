import { header } from "./components/header/header.js";
import { crearTareas } from "./components/tareas/tareas.js";
import { crearFormulario } from "./components/formulario/formulario.js";

let DOM = document.querySelector("#root");

DOM.appendChild(header());
DOM.appendChild(crearFormulario ());
DOM.appendChild(crearTareas());
