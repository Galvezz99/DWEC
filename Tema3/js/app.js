/*
  Tarea 3 · DWEC · German Galvez Aranda
  Variables, tipos y conversiones.

  Cómo usar esta plantilla:
  · Hay una función por ejercicio. Cada una se ejecuta al pulsar su botón «Ejecutar» de index.html.
  · Escribe tu código DENTRO de cada función, donde pone TODO. Cuando lo hagas, borra el TODO.
  · Solo console.log() y alert(): el JavaScript no escribe nada dentro de la página.
  · let y const, nunca var. Comillas rectas (" o ').
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");


// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  // Ejemplo: una variable y su typeof en la consola
  const edad = 20;   // number
  console.log("edad =", edad, "→", typeof edad);

  const nombre="German";
  console.log("nombre = ",nombre, "->",typeof nombre);

    const esEstudiante=true;
    console.log("esEstudiante =", esEstudiante, "->",typeof esEstudiante);

    const sinValor=null;
    console.log("sinValor=",sinValor,"->", typeof sinValor);

    let ciudad;
    console.log("ciudad=",ciudad,"->",typeof ciudad);
    ciudad="Madrid";
    console.log("ciudad=",ciudad,"->",typeof ciudad);
    const enteroGrande=10n;
    console.log("enteroGrande=",enteroGrande,"->",typeof enteroGrande);

  // TODO: declara una variable de cada tipo que falta: string, boolean, null, undefined y bigint (como 10n).
  //       const si no va a cambiar; let para al menos una a la que des valor más tarde.
  // TODO: muestra en la consola el valor y el typeof de cada una, como en el ejemplo.
  // TODO: da valor a tu variable let y vuelve a mostrar su typeof.
}


// Ejercicio 2 · Conversiones explícitas
// Escribe el comentario «espero …» ANTES de ejecutar. Si fallas, no lo cambies: márcalo en la tabla de la página.
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  // Ejemplo: una conversión, tu predicción y el resultado con su tipo
  const a = String(123);   // espero [tu predicción]
  console.log("String(123) →", a, typeof a);

  const b=Number("123");
  console.log('Number("123") →', b, typeof b);

  const c=Number("12abc");
  console.log('Number("12abc") →', c, typeof c);

  const d =Number("");
  console.log('Number("") →', d, typeof d);

  const e=Number(true);
  console.log('Number(true) →', e, typeof e);


  const f= Boolean(0);
  console.log("Boolean(0) →", f, typeof f);

  const g =Boolean("texto");
  console.log('Boolean("texto") →', g, typeof g);

  const h = Boolean("");       
  console.log('Boolean("") →', h, typeof h);
  
  // TODO: el resto de conversiones obligatorias, cada una con su «espero …»:
  //       Number("123"), Number("12abc"), Number(""), Number(true),
  //       Boolean(0), Boolean("texto") y Boolean("").
  // TODO: muestra en la consola el resultado y el typeof de cada una.
}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  // Ejemplo: una expresión que mezcla tipos
  console.log('"5" - 2 →', "5" - 2);   // espero [tu predicción]
  console.log('"5"-2->',"5"-2);//espero 3
  console.log('"5"+2->',"5"+2);//espero "52"


 
}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Tus datos, con const
  const nombre = "German";
  const ciclo="DAW";
  const curso="1º";
  const aficion="videojuegoss";
  // TODO: ciclo, curso y una afición, también con const.

  // Un dato que cambia, con let

  let horasEstudiadas=5;
  horasEstudiadas+=2;
  // TODO: por ejemplo, las horas que has estudiado esta semana. Después súmale algo con +=.

  // La ficha con plantilla de cadena: backticks (`) y ${ }
  const ficha = "Soy " + nombre + ", estudio " + ciclo + ", estoy en " + curso + " y mi afición son los " + aficion + ". He estudiado " + horasEstudiadas + " horas esta semana.";
  console.log(ficha);

  console.log("¿Las fichas son iguales?->",ficha===ficha);
  // TODO: completa la ficha con todos tus datos y muéstrala con alert() y en la consola.

  // TODO: escribe la misma ficha concatenando con + en una constante fichaConMas y muéstrala en la consola.
  // TODO: compara las dos con === y muestra el resultado en la consola: tiene que salir true.

  // Recuerda: el error de dar otro valor a una const se provoca en la consola del navegador, no aquí.


}