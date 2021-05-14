// ver lista: node app.js listar 

// agregar: node app.js agregar "titulo" "estado" (si no se agrega estado se pone pendiente) 

// buscar: node app.js buscar "titulo"  

// filtrar: node app.js filtrar "estado" 

// borrar: node app.js borrar "titulo de la tarea a borrar" 

// actualizar un estado: node app.js actualizar "titulo" "nuevo estado" 

// cambiar el titulo: node app.js cambiar "titulo" "nuevo titulo" 

const process = require("process");
const funcion = require("./funciones");

let accion = process.argv[2];

let indice3 = process.argv[3];

let indice4 = process.argv[4];

switch (accion) {
    case "listar":
        funcion.listar();
        break;
    case undefined :
        console.log("no se recibio ninguna accion");
        break;
    case "agregar":
        indice3 != undefined ? funcion.agregar(indice3, indice4) : console.log("no se recibio un titulo");
        break;
    case "filtrar":
        indice3 != undefined ? funcion.filtrar(indice3) : console.log("no se recibio un estado para filtrar");
        break;
    case "buscar":
        indice3 != undefined ? funcion.buscar(indice3) : console.log("no se recibio el titulo a buscar");
        break;
    case "actualizar":
        if (indice3 == undefined) {
            console.log("no se recibio un titulo");
            break;
        } else if (indice4 == undefined) {
            console.log("no se recibio el nuevo estado");
            break;
        }
        funcion.actualizar(indice3, indice4);
        break;
    case "borrar":
        indice3 != undefined ? funcion.borrar(indice3) : console.log("no se recibio la tarea a borrar");
        break;
    case "cambiar":
        if (indice3 == undefined) {
            console.log("no se recibio un titulo");
            break;
        } else if (indice4 == undefined) {
            console.log("no se recibio el nuevo titulo");
            break;
        }
        funcion.cambiar(indice3, indice4);
        break;
    default:
        console.log("no se reconoce la accion");
        break;
}

