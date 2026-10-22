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

//funcion para sumar los dos numeros introducidos
function sumar() {
  //Leemos el primero numero d su casilla
  const n1 = leerNumero("numero1");
  //Leemos el segundo numero d su casilla
  const n2 = leerNumero("numero2");
  
  // Comprobamos si falta alguno de los números.
  // Number.isNaN() devuelve true si el valor es NaN.
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
  // Calculamos la suma y guardamos el resultado.
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    
  // Mostramos la operación también en la consola.
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
        mostrar(`${n1} -  ${n2}= ${resultado}`);
        //deja el resultado en consola
        console.log(`Restar:${n1}-${n2}=${resultado}`);
    }

    
}

function multiplicar() {
  const n1=leerNumero("numero1");
    const n2=leerNumero("numero2");
     if(Number.isNaN(n1)|| Number.isNaN(n2)){
        mostrar("Escribe los dos numeros antes de operar","danger");
        console.warn("Multiplicar:falta algun numero");
     }else{
        const resultado= n1*n2;
        mostrar(`${n1} x ${n2}= ${resultado}`);
        console.log(`Multiplicar:${n1}*${n2}=${resultado}`);

     }

}

function dividir() {
  
    const n1=leerNumero("numero1");
    const n2=leerNumero("numero2");

     if(Number.isNaN(n1)|| Number.isNaN(n2)){
        mostrar("Escribe los dos numeros antes de operar","danger");
        console.warn("Dividir:falta algun numero");

        //se compara q no se divida entre 0
     }else if(n2===0){
        mostrar("No se puede dividir entre 0","danger");
        console.warn("Dividir:division entre 0");
     }else{
        const resultado= n1/n2;
         mostrar(`${n1} / ${n2}= ${resultado}`);
        console.log(`Dividir:${n1}/${n2}=${resultado}`);

     }

}

function potencia() {
 
    const n1=leerNumero("numero1");
    const n2=leerNumero("numero2");

    if(Number.isNaN(n1)|| Number.isNaN(n2)){
        mostrar("Escribe los dos numeros antes de operar","danger");
        console.warn("Modulo:falta algun numero");

    }else{
        const resultado= n1** n2;
        mostrar(`${n1} ^  ${n2}= ${resultado}`);
        console.log(`Potencia:${n1}**${n2}=${resultado}`);

    }
}

function modulo() {
 const n1=leerNumero("numero1");
const n2=leerNumero("numero2");

    if(Number.isNaN(n1)|| Number.isNaN(n2)){
        mostrar("Escribe los dos numeros antes de operar","danger");
        console.warn("Modulo:falta algun numero");

    }else{
        const resultado= n1% n2;
        mostrar(`${n1} % ${n2}= ${resultado}`);
        console.log(`Modulo:${n1}%${n2}=${resultado}`);

    }
}




// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {

const n1= leerNumero("Numero1");
const n2= leerNumero("Numero2");
//comprobamos si falta algun numero
if(Number.isNaN(n1)|| Number.isNaN(n2)){
  //mostramos mnsaje d error
 mostrar("Escribe los dos numeros antes de operar","danger");
  //Registramos el error
  console.warn("Modulo:falta algun numero");
// Si el primer número es mayor que el segundo.
}else if(n1>n2){
    // Mostramos cuál es el número mayor.
    mostrar(`${n1}es mayor que ${n2}= ${resultado}`,"info");
    // Registramos la comparación.
    console.log('¿Cual es mayor?:${n1}>${n2}');
  
  // Si el segundo número es mayor que el primero.
}else if(n1<n2){
    // Mostramos cuál es el número mayor.
    mostrar(`${n2}es mayor que ${n1}= ${resultado}`,"info");
    //registramos la comparacion
    console.log(`¿cual es mayor?: ${n1} < ${n2}`);

} else {
  // Si no se cumple ninguna comparación anterior, son iguales.
    mostrar(`${n1} y ${n2} son iguales`, "info");
    console.log(`¿Cuál es mayor?: ${n1} === ${n2}`);
  }

}

function parOImpar() {

  const n1 = leerNumero("numero1");
  // Comprobamos si la casilla está vacía.
  if(Number.isNaN(n1)){
  //mensaje d error si n hay numero
  mostrar("Escribe un numero.","danger");  
  console.warn("Par o impar:falta el numero");
// Comprobamos que el número no tenga decimales.
}else if (!Number.isInteger(n1)){
  mostrar("El numero es ni par ni impar","danger");  
  console.warn("Par o impar:el numero tiene decimales");
  }else{
    // Si el resto al dividir entre 2 es cero, es par.
    // Si no, es impar. El ternario elige entre ambas palabras.
    const resultado = n1 % 2 === 0 ? "par": "impar";

   mostrar(`${n1} es ${resultado}`, "info");
    console.log(`Par o impar: ${n1} es ${resultado}`);
  }
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
  }else{
    let contador=0;
    
    for(let i = 1; i <= veces; i++){
      anadirLinea(`for repeticion ${i} de ${veces}`);
      contador++;
    }

    anadirLinea(`Total:${contador} ${contador===1 ? "repeticion": "repeticiones"}`);
    console.log(`For:total de ${contador} repeticiones`);
  }
}

function bucleWhile() {

  const veces = leerNumero("numero1");
  limpiarSalida();

  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces < 0 || veces > MAXIMO_REPETICIONES){
      mostrar("Introduce un numero entero entre 0 y 20","danger");
      console.warn("while:numero no valido");
  }else{
    let contador=0;
    
    while(contador < veces){
      contador++;
      anadirLinea(`while repeticion ${contador} de ${veces}`);
    }

    anadirLinea(`Total:${contador} ${contador===1 ? "repeticion": "repeticiones"}`);
    console.log(`while:total de ${contador} repeticiones`);
  }
}


function bucleDoWhile() {
  // TODO: lo mismo que bucleFor(), con un do…while. Pruébalo con 0 y con un negativo: ¿qué pasa?

  const veces = leerNumero("numero1");
  limpiarSalida();

  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces < 0 || veces > MAXIMO_REPETICIONES){
      mostrar("Introduce un numero entero entre 0 y 20","danger");
      console.warn(" Do while:numero no valido");
  }else{
    let contador=0;
    
    do{
      contador++;
      anadirLinea(`do while repeticion ${contador} de ${veces}`);
    }while(contador < veces);

    anadirLinea(`Total:${contador} ${contador===1 ? "repeticion": "repeticiones"}`);
    console.log(`while:total de ${contador} repeticiones`);
  }
}

// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {

const veces = leerNumero("numero1");
  limpiarSalida();

  //comprueba q el valor sea un numero entero entre 0 y 20
  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces < 0 || veces > MAXIMO_REPETICIONES){
      mostrar("Introduce un numero entero entre 0 y 20","danger");
      console.warn("Badges for:numero no valido");
  }else{
    let contador=0;
    for(let i=1;i<=veces;i++){
      const color = i % 2=== 0 ? "success" : "primary"; 
      anadirBadge(i,color);
      contador++;
    }

    anadirLinea(`Total:${contador} ${contador===1 ? "repeticion": "repeticiones"}`);
    console.log(`while:total de ${contador} repeticiones`);
  }
}


function badgesWhile() {

  const veces = leerNumero("numero1");
  limpiarSalida();

  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces < 0 || veces > MAXIMO_REPETICIONES){
      mostrar("Introduce un numero entero entre 0 y 20","danger");
      console.warn("Badges while for:numero no valido");
  }else{
    let contador=0;
    while(contador < veces){
      contador++;
      const color = contador % 2=== 0 ? "success" : "primary"; 
      anadirBadge(contador,color);
    }

    anadirLinea(`Total:${contador} ${contador===1 ? "repeticion": "repeticiones"}`);
    console.log(`Badges while:total de ${contador} repeticiones`);
  }
}


function badgesDoWhile() {

 const veces = leerNumero("numero1");
  limpiarSalida();

  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces < 0 || veces > MAXIMO_REPETICIONES){
      mostrar("Introduce un numero entero que no supere 20","danger");
      console.warn("Badges do while:numero no valido");
  }else{
    let contador=0;
    
    do{
      contador++;
      const color = contador % 2=== 0 ? "success" : "primary"; 
      anadirBadge(contador,color);
    }while(contador < veces);

    anadirLinea(`Total:${contador} ${contador===1 ? "repeticion": "repeticiones"}`);
    console.log(`Badges while:total de ${contador} repeticiones`);
  }

}
