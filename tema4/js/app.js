/*
  Tarea 4 · DWEC · [German Galvez Aranda]
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  
    //lee el numero d cda casilla/devuelve NAN si esta vacia
    const n1=leerNumero("numero1");
    const n2=leerNumero("numero2");

    //si falta alguno de los 2 numeros,avisa del error 
    if(Number.isNaN(n1)|| Number.isNaN(n2)){
        //muestra el error en la pagina
        mostrar("Escribe los dos numeros antes de operar","danger");
        //deja el aviso en consola
        console.warn("Restar:falta algun numero");
    }else{
        //si estan los dos,hace mult y lo guarda
        const resultado= n1-n2;
        //muestra la operacion en la pagina
        mostrar('${n1} -  {$n2}= ${resultado}');
        //deja el resultado en consola
        console.log('Restar:${n1}-${n2}=${resultado}');
    }

}

function multiplicar() {
  const n1=leerNumero("numero1");
    const n2=leerNumero("numero2");
     if(Number.isNaN(1)|| Number.isNaN(n2)){
        mostrar("Escribe los dos numeros antes de operar","danger");
        console.warn("Multiplicar:falta algun numero");
     }else{
        const resultado= n1*n2;
        mostrar('${n1} x {$n2}= ${resultado}');
        console.log('Multiplicar:${n1}*${n2}=${resultado}');

     }

}

function dividir() {
  
    const n1=leerNumero("numero1");
    const n2=leerNumero("numero2");

     if(Number.isNaN(1)|| Number.isNaN(n2)){
        mostrar("Escribe los dos numeros antes de operar","danger");
        console.warn("Dividir:falta algun numero");

        //se compara q no se divida entre 0
     }else if(n2===0){
        mostrar("No se puede dividir entre 0","danger");
        console.warn("Dividir:division entre 0");
     }else{
        const resultado= n1/n2;
         mostrar('${n1} / {$n2}= ${resultado}');
        console.log('Dividir:${n1}/${n2}=${resultado}');

     }

}

function potencia() {
 
    const n1=leerNumero("numero1");
    const n2=leerNumero("numero2");

    if(Number.isNaN(1)|| Number.isNaN(n2)){
        mostrar("Escribe los dos numeros antes de operar","danger");
        console.warn("Modulo:falta algun numero");

    }else{
        const resultado= n1** n2;
        mostrar('${n1} ^  {$n2}= ${resultado}');
        console.log('Potencia:${n1}**${n2}=${resultado}');

    }
}

function modulo() {
 const n1=leerNumero("numero1");
const n2=leerNumero("numero2");

    if(Number.isNaN(1)|| Number.isNaN(n2)){
        mostrar("Escribe los dos numeros antes de operar","danger");
        console.warn("Modulo:falta algun numero");

    }else{
        const resultado= n1% n2;
        mostrar('${n1} %  {$n2}= ${resultado}');
        console.log('Modulo:${n1}%${n2}=${resultado}');

    }
}




// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {

const n1= leerNumero("Numero1");
const n2= leerNumero("Numero2");

if(Number.isNaN(1)|| Number.isNaN(n2)){
        mostrar("Escribe los dos numeros antes de operar","danger");
        console.warn("Modulo:falta algun numero");
//caso1
}else if(n1>n2){
    mostrar('${n1}es mayor que ${n2}= ${resultado}',"info");
    console.log('¿Cual es mayor?:${n1}>${n2}');

}else if(n1<n2){
    //caso 2:el primero es mayor
    mostrar('${n2}es mayor que ${n1}= ${resultado}',"info");
    console.log('¿cual es mayor?: ${n1} < ${n2}');

} else {
    // Caso 3: no es ni mayor ni menor, así que son iguales
    mostrar(`${n1} y ${n2} son iguales`, "info");
    console.log(`¿Cuál es mayor?: ${n1} === ${n2}`);
  }


}

function parOImpar() {
  // TODO: solo con el número 1. Usa el operador % y el ternario ( condición ? "par" : "impar" ).
  // TODO: si el número tiene decimales, avisa de que no es ni par ni impar.

  const n1 = leerNumero("numero1");

  if(Number.isNaN(n1)){
  mostrar("Escribe un numero.","danger");  
  console.warn("Par o impar:falta el numero");
}else if (!Number.isInteger(n1)){
  mostrar("El numero es ni par ni impar","danger");  
  console.warn("Par o impar:el numero tiene decimales");
  }else{
    const resultado = n1 % 2 === 0 ? "par": "impar";

    mostrar('${n1} es ${resultado}`, "info");
    console.log(`Par o impar: ${n1} es ${resultado}`);
  }


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces < 0 || veces > MAXIMO_REPETICIONES){
      mostrar("Introduce un numero entero entre 0 y 20","danger");
      console.warn("For:numero no valido");
  }
}

function bucleWhile() {
  // TODO: lo mismo que bucleFor(), con un while.
}

function bucleDoWhile() {
  // TODO: lo mismo que bucleFor(), con un do…while. Pruébalo con 0 y con un negativo: ¿qué pasa?
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  // TODO: como bucleFor(), pero cada vuelta añade un badge con el número de la repetición:
  //         anadirBadge(i, "primary");
  // TODO: los pares, de un color y los impares, de otro. Elige el color con el operador ternario.
}

function badgesWhile() {
  // TODO: lo mismo que badgesFor(), con un while.
}

function badgesDoWhile() {
  // TODO: lo mismo que badgesFor(), con un do…while.
}
