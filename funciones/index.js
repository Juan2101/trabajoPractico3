const fs = require("fs");

let tareas = JSON.parse(fs.readFileSync("./tareas.json", "utf-8"));

const funcion = {
  listar : () => tareas != 0 ? tareas.forEach(tarea => console.log(`tarea : ${tarea.titulo} - ${tarea.estado}`)) : console.log("no se encontraron resultados"),

  guardarJson : () => fs.writeFileSync("./tareas.json", JSON.stringify(tareas, null, 2),"utf-8"),  

  revisarTitulo : (titulo, mensajeSiSeEncontro, mensajeSiNoSeEncontro) => tareas.filter(tarea => tarea.titulo.includes(titulo)) != 0 ? console.log(mensajeSiSeEncontro) : console.log(mensajeSiNoSeEncontro),

  agregar : function (titulo, estado = "pendiente") {
        let tarea = {
            titulo : titulo,
            estado : estado
        };
        console.log(`nueva tarea: ${tarea.titulo} - ${tarea.estado}`);
        tareas.push(tarea);
        this.guardarJson();
  },

  filtrar : estado => {
    tareas = tareas.filter(tarea => tarea.estado == estado);
    funcion.listar();
  },

  buscar : titulo => {
    tareas = tareas.filter(tarea => tarea.titulo.includes(titulo));
    funcion.listar();
  },

  actualizar : function (titulo, nuevoEstado) {
    this.revisarTitulo(titulo, `se actualizo: ${titulo} - ${nuevoEstado}`, "no se encontro la tarea");
    
    for (let i = 0; i < tareas.length; i++) {
        tareas[i].titulo == titulo ? tareas[i].estado = nuevoEstado : null;
    }
    this.guardarJson();
  },

  borrar : titulo => {
      funcion.revisarTitulo(titulo, `se borro la tarea: ${titulo}`, "no se encontro la tarea a borrar");

      tareas = tareas.filter(tarea => tarea.titulo != titulo);
      funcion.guardarJson();
  },

  cambiar : function (titulo, nuevoTitulo) {
    this.revisarTitulo(titulo, `se cambio ${titulo} a ${nuevoTitulo}`, "no se encontro la tarea a cambiar");
    
    for (let i = 0; i < tareas.length; i++) {
        tareas[i].titulo == titulo ? tareas[i].titulo = nuevoTitulo : null ;
      }
      this.guardarJson();
  }
};

module.exports = funcion;