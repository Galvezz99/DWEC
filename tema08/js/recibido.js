/*
  Tarea 8 · DWEC · [Tu nombre y apellidos]
  recibido.html: lee lo que ha llegado por GET y lo pinta en la tabla.
  En una web real esto lo haría el servidor; aquí lo hacemos en el navegador para verlo.
*/

console.log("recibido.js cargado");

// location.search es la parte de la URL desde el ?.
console.log("Ha llegado:", location.search);

// Creamos el objeto para leer los parámetros de la URL.
const parametros = new URLSearchParams(location.search);

console.log("nombre=",parametros.get("nombre"));

//Mostramos la consulta completa en el parrado

const consulta=document.querySelector("#consulta");

if(location.search===""){
  consulta.textContent="(nada)";
}else{
  consulta.textContent=location.search;
}

// Seleccionamos el cuerpo de la tabla.
const datos = document.querySelector("#datos");