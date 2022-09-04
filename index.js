//ARRAY PARA CREAR UN LISTADO DE ALUMNOS
//Declaración inicial de lista de alumnos
const listadoAlumnos = ["Manuel Gutierrez", "Martin Perez", "Mariana Gonzalez", "Marcelo Martinez"];

//Declaracion para cargar alumnos nuevos
const listaAlumnoNuevo = [];
let   cantidad     = 5;
do{
   let entrada = prompt("Ingresar nombre alumno");
   listaAlumnoNuevo.push(entrada.toUpperCase());
   console.log(listaAlumnoNuevo.length);
}while(listaAlumnoNuevo.length != cantidad)
const nuevaLista = listaAlumnoNuevo.concat([listadoAlumnos]);
alert(nuevaLista.join("\n"));

