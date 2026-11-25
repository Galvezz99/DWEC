/*
  Tarea 8 · DWEC · [Tu nombre y apellidos]
  Formulario de inscripción.

  Cómo usar esta plantilla:
  · Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Los ejercicios 1 a 3 son HTML: el formulario se valida y se envía solo, sin JavaScript.
  · Desde el ejercicio 4, la validación la haces tú: añade novalidate al <form>.
  · Los errores se escriben debajo de cada campo con mostrarError(); nada de alert().
  · Como en el tema 7: flechas en los callbacks. Dentro de ellos, this NO es el formulario:
    usa e.target o la constante form.
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const form = document.querySelector("#inscripcion");


// ============================================================
// Mostrar y quitar los errores junto al campo
// Cada campo está en un <div class="mb-3"> con su <div class="invalid-feedback">
// ============================================================

// Ya está hecha: es el modelo
function mostrarError(campo, mensaje) {
  campo.classList.add("is-invalid");                         // borde rojo de Bootstrap
  const aviso = campo.closest(".mb-3").querySelector(".invalid-feedback");
  aviso.textContent = mensaje;
  aviso.classList.add("d-block");                            // visible también en los radio
}

function quitarError(campo) {
 const contenedor = campo.closet(".mb-3");

 if(campo.type==="radio"){
  const radios=form.querySelectorAll(`[name="${campo.name}"]`);
  radios.forEach((radio)=>radio.classList.remove("is-invalid"));
 }else{
  campo.classList.remove("is-invalid");
 }

 const aviso=contenedor.querySelector(".invalid-feedback");
 if(aviso){
  aviso.textContent="";
  aviso.classList.remove("d-block");
 }
}


// ============================================================
// Ejercicio 4 · El mensaje de cada error
// ============================================================

// El texto de cada campo obligatorio cuando está vacío. La clave es el name (o el id, si no tiene name)
const OBLIGATORIOS = {
  nombre: "Escribe tu nombre y apellidos.",
  email: "Escribe tu correo electronico.",
  email2: "Repite tu correo electronico..",
  nacimiento: "Indica tu fecha de nacimiento.",
  modalidad: "Selecciona una modalidad",
  taller: "selecciona uno de los talleres",
  condiciones: "Tienes que aceptar las condiciones para inscribirte",
};

function mensajeDe(campo) {

  if(campo.validity.valueMissing){
    return OBLIGATORIOS [campo.name || campo.id] || "completa este campo";
  }

  if(campo.validity.typeMismatch){
    return "Escribe una direccion de correo electronico valida";
  }


  if(campo.validity.tooShort){
    return `Escribe al menos ${campo.minLength} caracteres`;
  }

  if (
    campo.validity.patternMismatch ||
    campo.validity.rangeUnderflow ||
    campo.validity.rangeOverflow
  ){
    return campo.tittle;
  }
  if(campo.validity.customError){
    return campo.validationMessage;
  }

return "Revisa este campo";
}


// ============================================================
// Ejercicio 4 · La validación al enviar
// Hasta que llegues a este ejercicio, deja la función vacía: el formulario se enviará solo
// ============================================================

form.addEventListener("submit", (e) => {
  console.log("Validando el formulario...");
  e.preventDefault();

  comprobarCorreos();

  const campos=e.target.querySelectorAll("input,select,textarea");
  let primerCampoIncorrecto=null;

  campos.forEach((campo)=>{
    if(campo.checkValidity()){
      quitarError(campo);
    }else{
      mostrarError(campo, mensajeDe(campo));

      if(primerCampoIncorrecto===null){
        primerCampoIncorrecto=campo;
      }
    }
  });

  if(primerCampoIncorrecto!==null){
    console.log("Hay errores. El foco pasa al primer campo incorrecto");
    primerCampoIncorrecto.focus();
    return;
  }

  console.log("Formulario correcto. Enviando los datos por GET");
  e.target.submit();
});


// ============================================================
// Ejercicio 5 · Eventos de los campos
// ============================================================

// TODO: el contador de la textarea: con el evento "input" de #comentarios, escribe en #contador
//       cuántos caracteres lleva (value.length).

// TODO: el nivel: con el evento "input" de #nivel, escribe su valor en #valorNivel.

// TODO: comprobarCorreos(): si #email2 no está vacío y no coincide con #email, ponle un error propio con
//       setCustomValidity("Los dos correos no coinciden."); si coincide, quítaselo con setCustomValidity("").
//       Llámala en el evento "input" de los dos correos y también al empezar la validación del submit.

// TODO: que el error desaparezca en cuanto se corrige: a cada campo, un "input" que llame a quitarError()
//       si campo.checkValidity() ya es true.

// TODO: con el evento "reset" del formulario, quita los errores y vuelve a poner el contador a 0 y el nivel a 5.


// ============================================================
// Ejercicio 6 · Resumen con FormData
// ============================================================

// TODO: con el evento "click" de #verResumen:
//       · const datos = new FormData(form);
//       · recórrelo con for (const [campo, valor] of datos) y pinta un <li class="list-group-item"> por par
//         en #resumen (createElement y textContent; si el valor está vacío, «(vacío)»);
//       · escribe en #avisoResumen cuántos datos hay y por qué falta «Repite el correo».
