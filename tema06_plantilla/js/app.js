/*
  Tarea 6 · DWEC · German Galvez Aranda
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

// TODO: completa el objeto literal con tus datos: nombre, apellidos, edad y curso.
// TODO: añádele el método presentarse(), que devuelve una frase con this.nombre, this.apellidos, this.edad y this.curso.
//Por ejemplo: «Soy [nombre] [apellidos], tengo [edad] años y estudio [curso].»
const estudiante = {
  nombre:"Carlos",
  apellidos:"Garcia Lopez",
  edad:20,
  curso:"2ºDAW",

  presentarse:function(){
    return "Soy" + this.nombre+ " " + this.apellidos+ ", tengo" + this.edad + "años y estudio" + this.curso+".";
  }
};

function verFicha() {

  const salida=document.getElementById("salida1");

  salida.textContent="";

  const lista=document.createElement("ul");
  lista.classList.add("list-group");

  const claves =["nombre","apellidos","edad","curso"];

  claves.forEach(function(clave){
    const elemento=document.createElement("li");
    //Añade clase css
    elemento.classList.add("list-group-item");
    elemento.textContent=clave + ": " + estudiante[clave];
    lista.append(elemento);
  });



}

function cumplirAnios() {
  
  estudiante.edad=estudiante.edad+1;
  verFicha();
}

function quitarCurso() {

  delete estudiante.curso;
  verFicha();
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}
function quitarUltimo() {
  
  if(colores.length===0){
    avisar2("No hay colores para eliminar");
    return;
  }

  const eliminado=colores.pop();
  mostrarColores();
  console.log("Color eliminado:", eliminado);

}


function quitarPrimero() {
  
  if(colores.length===0){
    avisar2("No hay colores para eliminar");
    return;
  }

    //Quita el primer elemento
  const eliminado=colores.shift();

  mostrarColores();

  console.log("Color eliminado:", eliminado);
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
 
  pintarProductos(productos);

  document.querySelector("#mensaje3").textContent="Hay" + productos.length + "productos en el catalogo";

}

function ordenarPorPrecio() {

  const copia =[...productos];

  copia.sort(function(a,b){
    return a.precio - b.precio;
  });
  pintarProductos(copia);

  document.querySelector("#mensaje3").textContent="Productos ordenador de menor a mayor precio";
}

function filtrarCaros() {

  const caros=productos.filter(function(producto){
    return producto.precio > 50;
  });

  pintarProductos(caros);

  document.querySelector("#mensaje3").textContent="Hay" + caros.length + "productos que cuestan mas de 50 €";
  
}

function buscarProducto() {

  const casilla=dicument.querySelector("#BuscarProducto");

  const texto=casilla.value.trim().toLowerCase();

  if(texto===""){
    document.querySelector("#mensaje3").textContent="Escribe el nombre de un producto";
    return;
  }

  const encontrado=productos.find(function(producto){
  return producto.nombre.toLowerCase().includes(texto);
  });

  if(encontrado===undefined){
    document.querySelector("#mensaje3").textContent="No se ha encontrado ningun producto";
    pintarProductos([]);
  }else{
    document.querySelector("#mensaje3").textContent="producto encontrado";
    pintarProductos([encontrado]);
  }
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "[Garveh]",
  notas: [],
    anadirNota:function(nota){
      if(Number.isNan(nota) || nota < 0 || nota > 10){
        return false;
      }

      this.notas.push(nota);
      return true;
    },

  media:function(){
    if(this.notas.length===0){
      return 0;
    }

  const suma=this.notas.reduce(function(total,nota){
    return total+nota;
  },0);
  
    return / this.notas.length;    
  }

  
};

function mostrarNotas() {

const lista=document.querySelector("#notas");

  lista.textContent="";

  alumno.notas.forEach(function(nota){
    const badge=document.createEelement("span");

    badge.classList.add("badge");

    if(nota >=5){
      badge.classList.add("text-bg-success");
    }else{
      badge.classList.add("text-bg-danger");
    }

    badge.textContent=nota;

    lista.append(badge)
  });

  const media=document.querySelector("#media");

  if(alumno.notas.length===0){
    media.textContent="Todavia no hay notas";
  }else{
    media.textContent="Media de" + alumno.notas.length+ "notas:" + alumno.media().toFixed(2);
  }
    
}

function anadirNota() {

  const casilla=document.querySelector("#nota");
  const error=document.querySelector("#error4");

  if(casilla.value.trim()===""){
    error.textContent="Debes introducir la nota";
    error.classList.remove("d-none");
    return;
  }

  const nota=Number(casilla.value);

  if(alumno.anadirNota(nota)===false){
    error.textContent="La nota debe estar entre 0 y 10";
    error.classList.remove("d-none");
    return;
  }

  error.classList.add("d-none");
  casilla.value="";
  mostrarNotas();
}

function borrarNotas() {
  alumno.notas=[];
  mostrarNotas();
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
const dobles=numeros.map(function(numero){
  return numero*2;
});

const salida=document.querySelector("#salida5");
salida.textContent="";

  const resultado=document.createElement("p");
  resultado.textContent="Numero duplicados"+dobles.join(", ");

  const original=document.createElement("p");
  original.textContent="Array original: "+numeros.join(", ");

  salida.append(resultado);
  salida.append(original);

  console.log("Dobles:", dobles);
  console.log("Array original:",numeros);
}

function verPares() {
  const pares=numeros.filter(function(numero){
    return numero%2===0;
});
  const salida=document.querySelector("#salida5");
  salida.textContent="";

  const resultado=document.createElement("p");
  resultado.textContent="Numeros pares:" + pares.join(", ");

  const original=document.createElement("p");
  original.textContent="Array original:" + numeros.join(", ");
  salida.append(resultado);
  salida.append(original);

  console.log("Numeros pares:",pares);
  console.log("Array original:",numeros);
  }

function verSuma() {
  const suma=numeros.reduce(function(acumulador,numero){
    return acumulador+numero;
  },0);

  const salida=document.querySelector("#salida5");
  salida.textContent="La suma de todos los numeros es:"+suma;

  console.log("Suma total:",suma);
}

function verCadena() {

  const pares=numeros.filter(function(numero){
    return numero %2===0;
  });

  const dobles=pares.map(function(numero){
    return numero *2
  });

  const suma=dobles.reduce(function(acumulador,numero){
    return acumulador+numero;
  }, 0);

  const salida=document.querySelector("#salida5");
  salida.textContent="";

  const paso1 = document.createElement("p");
  paso1.textContent = "1. Números pares: " + pares.join(", ");

  const paso2 = document.createElement("p");
  paso2.textContent = "2. Dobles de los pares: " + dobles.join(", ");

  const paso3 = document.createElement("p");
  paso3.textContent = "3. Suma de los dobles: " + suma;

  salida.append(paso1);
  salida.append(paso2);
  salida.append(paso3);

  console.log("Pares:", pares);
  console.log("Dobles:", dobles);
  console.log("Suma:", suma);
  
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  const salida=document.querySelector("#ciudades");
  salida.textContent="";

  ciudades.forEach(function(ciudad,posicion){
    const badge=document.createElement("span");
    badge.classList.add("badge","text-bg-primary","me-2");
    badge.textContent=posicion + " . " + ciudad;

    salida.append(badge);
  });
  console.log("Ciudades mostradas", ciudades);
}

function verSlice() {
  const resultado=ciudades.slice(2,5);

  const salida=document.querySelector("#salida6");
  salida.textContent="";

  const mensaje=document.createElement("p");
  mensaje.textContent="Ciudades devueltas por slice(2,5): " + resultado.join(", ");


  const cantidad=document.createElement("p");
  cantidad.textContent="Ciudades que siguen en el array original: " + ciudades.lenth;

  salida.append(mensaje);
  salida.append(cantidad);

  console.log("Resultado de slice:", resultado);
  console.log("Array original:", ciudades);
  
}

function hacerSplice() {
 const salida=document.querySelector("#salida6");
  salida.textContent="";

  if(ciudades.length < 3){
    salida.textContent="Hay menos de 3 ciudades. Debes restaurar el array.";
    console.log("No se puede realizar splice. Faltan ciudades");
    return;
  }
s
const eliminadas=ciudades.splice(2, 2);
const mensaje=document.createElement("p");
mensaje.textContent="Ciudades eliminadas: " + eliminadas.join(", ");


const cantidad=document.createElement("p");
cantidad.textContent="Ciudades restantes: " + ciudades.length;

salida.append(mensaje);
salida.append(cantidad);

  mostrarCiudades();
  
 console.log("Ciudades eliminadas:", eliminadas);
console.log("Array actual:", ciudades);
  
  
}

function restaurarCiudades() {
  // TODO: vuelve a copiar ciudadesOriginal en ciudades y pinta.
}

function buscarCiudad() {
  // TODO: lee #buscarCiudad (value y trim). Si está vacío, avisa.
  // TODO: escribe en #salida6 lo que dan includes() e indexOf() con ese nombre. Si no está, indexOf da -1.
}

mostrarCiudades();
