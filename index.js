import { header } from "./components/header/header.js";
import { formulario } from "./components/formulario/formulario.js";
import { tarea } from "./components/tareas/tareas.js";

let DOM = document.querySelector("#root");

DOM.appendChild(header());
DOM.appendChild(formulario());
DOM.appendChild(tarea());