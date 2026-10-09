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
  //Mostrar el titulo del ejercicio
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  //creamos una constante llamada edad
  //typeof permite conocer el tipo d dato en una variable
  const edad = 20;   // number
  console.log("edad =", edad, "→", typeof edad);
  // Guardamos un texto en la variable nombre.
  // Los textos pertenecen al tipo string
  const nombre="German";
  console.log("nombre = ",nombre, "->",typeof nombre);
    // Guardamos true, que representa un valor verdadero. 
  // Su tipo de dato es boolean
    const esEstudiante=true;
    // Muestra el nombre d la variable, su valor y su tipo d dato en la consola.
    console.log("esEstudiante =", esEstudiante, "->",typeof esEstudiante);

    const sinValor=null;
    console.log("sinValor=",sinValor,"->", typeof sinValor);
    // Declaramos ciudad con let, pero todavía no le damos ningún valor.
  // Por eso, su valor es undefined
    let ciudad;
    console.log("ciudad=",ciudad,"->",typeof ciudad);
    // Asignamos un texto a ciudad. 
  // Ahora su valor es "Madrid" y su tipo es string.
    ciudad="Madrid";
    console.log("ciudad=",ciudad,"->",typeof ciudad);
    // La n al final indica que es un número entero de tipo bigint.
  // Este tipo permite representar enteros muy grandes.
    const enteroGrande=10n;
    console.log("enteroGrande=",enteroGrande,"->",typeof enteroGrande);

  // TODO: declara una variable de cada tipo que falta: string, boolean, null, undefined y bigint (como 10n).
  //       const si no va a cambiar; let para al menos una a la que des valor más tarde.
  // TODO: muestra en la consola el valor y el typeof de cada una, como en el ejemplo.
  // TODO: da valor a tu variable let y vuelve a mostrar su typeof.
}


// Ejercicio 2 · Conversiones explícitas
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

 // String() convierte un valor en texto.
  // 123 deja de ser un número y pasa a ser "123".
  const a = String(123);  
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
   console.log('"10" * 2 →', "10" * 2); //espero 20
  console.log('"10" * 2 →', "10" / 2); //espero 5
 
}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  const nombre = "German";
  const ciclo="DAW";
  const curso="1º";
  const aficion="videojuegoss";

  let horasEstudiadas=5;
  horasEstudiadas+=2;

  alert(ficha);
  console.log(ficha);
  const ficha = "Soy " + nombre + ", estudio " + ciclo + ", estoy en " + curso + " y mi afición son los " + aficion + ". He estudiado " + horasEstudiadas + " horas esta semana.";
  console.log(ficha);

  console.log("¿Las fichas son iguales?->",ficha===ficha);


}
