/*
  Tarea 5 · DWEC · [Tu nombre y apellidos]
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // Buscamos el primer párrafo, por su id
  const primero = document.getElementById("primero");
  //dambia el texto del primer parrafo
  primero.textContent = "Texto modificado por JavaScript";


  // TODO: el segundo párrafo, con querySelector y su clase (.segundo): resáltalo con la clase "bg-warning-subtle".

      //Buscamos por clase y que ademas se llame segunda
  const segundo = document.querySelector(".segundo");
  //Añade una clase de boostrap para resaltarlo
  segundo.classList.add("bg-warning-subtle");

  // TODO: el tercero, con querySelectorAll("#contenido p") y su posición en la lista: ponlo en rojo con "text-danger".

    //Selecciona todos los párrafos de contenido
     const tercero = document.querySelectorAll("#contenido p");

     //Añade la clase de texto rojo al tercer parrafo
    tercero[2].classList.add("text-danger");

  // TODO: un console.log() que diga que se han aplicado los cambios.

  //Mensaje x consola
  console.log("Se han aplicado los cambios");



}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  
  // TODO: crea un <p> con document.createElement().

    //Seleccionamos el contenedodr
    const contenido=document.querySelector("#contenido");

    //Creamos un parrafo nuevo
    const nuevoParrafo=document.createElement("p");


      //calculamos el nmro de parrafos que habra dspues de añadirlo
    const numeroParrafo=contenido.children.length+1;

    //le damos el texto al parrafo
    nuevoParrafo.textContent="Parrafo nuevo"+ numeroParrafo;

    //Añadimos el parrafo al final del contenedor
    contenido.append(nuevoParrafo);
  
}

function eliminarUltimo() {

  const contenido=document.querySelector("#contenido");
  const ultimo=contenido.lastElementChild;

  if(ultimo==null){
    const aviso=document.querySelector("#aviso2");
    aviso.classList.remove("d-none");
  }else{
    ultimo.remove();
  }
  // TODO: busca el último párrafo de #contenido (lastElementChild).
  // TODO: si es null (ya no queda ninguno), muestra el aviso #aviso2 quitándole la clase "d-none".
  //       Si no, bórralo con remove().
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    // TODO: lo mismo con "mouseleave" (cuando el ratón sale) para quitar la clase.

    parrafo.addEventListener("mouseleave",function(){
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  // TODO: un console.log() que diga en cuántos párrafos se ha activado (parrafos.length).

  console.log("Resaltado activado en "+ parrafos.length+"parrafos");
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {

  const texto=document.querySelector("#nuevoTexto").value.trim();

  const error=document.querySelector("#error4");

  if(texto===""){

    error.classList.remove("d-none");
    return;
  }

  const primero=document.querySelector("#contenido p");

  primero.textContent=texto;
  error.classList.add("d-none");
}

function cambiarConHtml() {

      // Leemos el texto y quitamos los espacios de los extremos
    const texto= document.querySelector("#nuevoTexto").value.trim();

        // Seleccionamos el aviso de error
    const error=document.querySelector("#error4");

      // Comprobamos si el texto está vacío
    if(texto===""){
      //mostramos el aviso
      error.classList.remove("d-none");
      return;
    }
    //Seleccionamos el primer parrafo
    const primero=document.querySelector("#contenido p");
    //cambiamos el contenido interpretando HTML
    primero.innerHTML=texto;
    //ocultamos el aviso
    error.classList.add("d-none");

}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  // TODO: lee el texto de #tareaInput (value + trim). Si está vacío, muestra un mensaje en #error5.
  // TODO: si no, crea un <li class="list-group-item"> con dos elementos dentro:
  //         · un <input> de tipo "checkbox" con la clase "form-check-input",
  //         · un <span> con el texto de la tarea (textContent).
  //       Cuelga el <li> de #listaTareas y vacía la casilla (value = "").
  // TODO: actualiza #totalTareas con el número de <li> que hay en la lista.
}

function borrarCompletadas() {
  // TODO: selecciona las casillas marcadas: document.querySelectorAll("#listaTareas input:checked").
  // TODO: si no hay ninguna, avisa en #error5. Si hay, recórrelas con for…of y borra el <li> de cada una
  //       (el <li> es el padre de la casilla: parentElement).
  // TODO: actualiza #totalTareas.
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // TODO: con if / else if, el punto de corte de Bootstrap según el ancho: xs (< 576), sm (≥ 576), md (≥ 768),
  //       lg (≥ 992), xl (≥ 1200) y xxl (≥ 1400). Escríbelo en #datoPunto.
  // TODO: el tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  // TODO: la URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
}
