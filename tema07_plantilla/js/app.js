/*
  Tarea 7 · DWEC · [Tu nombre y apellidos]
  Funciones, flechas y clases.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · La regla de este tema:
      - declaración, function nombre() { ... }, para las funciones con nombre, como las de los botones;
      - FLECHA para todos los callbacks: forEach, map, filter, sort, reduce, find, some...;
      - nunca una flecha como método: en las clases, la forma corta media() { ... }.
  · Los resultados se pintan en la página como en los temas 5 y 6: createElement, textContent, classList y append.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: pinta una lista de textos en un <ul class="list-group">
// (ya está hecha, y su forEach ya lleva una flecha: es el modelo)
// ============================================================

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================

// TODO: calcularPrecio(base, iva, descuento) devuelve el precio final con return. No lee ni pinta nada.
//       iva vale 21 por defecto y descuento, 0 por defecto (parámetros por defecto).
//       Primero se resta el descuento (un tanto por ciento de la base) y después se suma el IVA.
//       Comprueba en la consola: calcularPrecio(100) tiene que dar 121.
function calcularPrecio(base, iva=21, descuento=0) {
  const baseConDescuento=base-(base*descuento/100);
  return baseConDescuento+(baseConDescuento* iva /100);

}

// Ya está hecha: 74.8 → "74.80 €"
function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

function mostrarPrecio() {
  const baseTexto=document.querySelector("#base").value;
  const iva=Number(document.querySelector("#iva").value);
  const descuentoTexto=document.querySelector("#descuento").value;
  const error=document.querySelector("#error1");


  if(baseTexto==="" || Number(baseTexto)<0){
    error.textContent="Escribe una base que no sea negativa";
    error.classList.remove("d-none");
    return;
  }

  const base=Number(baseTexto);
  const descuentoVacio=descuentoTexto==="";
  const descuento=descuentoVacio ? 0 : Number(descuentoTexto);

  if(!descuentoVacio &&(descuento < 0 || descuento > 100)){
    error.textContent="El descuento tiene que estar entre 0 y 100";
    error.classList.remove("d-none");
    return;
  }

  const precioSinIva=base - (base * descuento / 100);
  const precioFinal=descuentoVacio
  ? calcularPrecio(base, iva)
  : calcularPrecio(base, iva, descuento);

  error.classList.add("d-none");

  pintarLista("#salida1",[
    `Precio sin IVA: ${formatearEuros(precioSinIva)}`,
    `Descuento: $ {descuento} %`,
    `IVA: ${iva}%`,
    `Precio final: ${formatearEuros(precioFinal)}`
  ]);

  console.log("Ejercicio 1: precio final ->", precioFinal);
}


// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

// Ya está hecha: una película como texto, «Coco (2017) · 105 min»
function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}

// Las cuatro funciones siguientes ya funcionan, pero sus callbacks están escritos con function, como en el tema 6.
// TODO: pasa a flecha los cuatro callbacks (map, filter, sort y reduce). Si el cuerpo es solo una expresión,
//       sin llaves ni return. Comprueba después que cada botón sigue dando lo mismo.

function verTitulos() {
  const titulos = peliculas.map(function (pelicula) {
    return pelicula.titulo;
  });
  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  const largas = peliculas.filter(function (pelicula) {
    return pelicula.duracion > 120;
  });
  pintarLista("#salida2", largas.map(comoTexto));   // comoTexto ya es una función: se pasa sin paréntesis
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort(function (a, b) {   // una copia: sort cambia el original
    return a.anio - b.anio;
  });
  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ejercicio 2: sort →", ordenadas);
}

function verDuracionTotal() {
  const minutos = peliculas.reduce(function (total, pelicula) {
    return total + pelicula.duracion;
  }, 0);
  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ejercicio 2: reduce →", minutos);
}

function buscarAntigua() {
  const antigua=peliculas.find(p => p.año < 1990);

  const mensaje2=document.getElementById("mensaje2");
  const salida2=document.getElementById("salida2");

  if(antigua===undefined){
    mensaje2.textContent="No se encontro ninguna pelicula anterior a 1990";
    salida2.replaceChildren();
  }else{
      mensaje2.textContent="";
      pintarLista("#salida2",[comoTexto(antigua)]);
    }
  }



// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

// TODO: transformar(lista, operacion) hace a mano lo que hace map, sin usar map:
//       recorre lista con for…of, llama a operacion con cada elemento, guarda lo que devuelve
//       en un array nuevo y, al final, devuelve ese array.
function transformar(lista, operacion) {

  console.log("Transformar ejecutada");

  const resultado=[];

  for(const elemento of lista){
    resultado.push(operacion(alemento));
  }

  return resultado;


}

// Ya está hecha: escribe en #salida3 tu resultado, el de map y numeros
function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

// El modelo: funcionará cuando hayas escrito transformar()
function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles →", resultado);
}

function verCuadrados() {
 
  console.log("verCuadrados ejecutada");

  const cuadrados=transformar(numeros, (n)=> n **2);

  pintarLista("#salida3",cuadrados);
}

function verAbsolutos() {

console.log("verAbsolutos ejecutada");

const absolutos=transformar(numeros, Math.abs);

pintarLista("#salida-absolutos", absolutos);


}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

// TODO: crearContador(paso) guarda una variable cuenta que empieza en 0 y DEVUELVE una función.
//       Cada vez que se llama a esa función, suma paso a cuenta y devuelve el valor nuevo.
//       paso vale 1 por defecto.
function crearContador(paso) {

  console.log("Crear contador ejecutada con paso:",paso);

  let cuenta=0;

  return function(){
    cuenta+=paso;
    return cuenta;
  };

}

const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

// El modelo
function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 →", valor);
}

function sumarCinco() {

  console.log("sumar cinco ejecutada");

  //Llamamos a la funcion closure que cuenta de 5 en 5
  const resultado=contarDeCinco();

  // Pintamos el resultado en el elemento con id "cuenta5"
  document.getElementById("cuenta5").textContent=resultado;
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }


  anadirNota(nota){
    console.log("anadir nota ejecutada con nota:",nota);

      // Validamos que sea un número real
      if(typeof nota !== 'number' || Number.isNan(nota) || nota < 0 || nota >10){
        return false;
      }

      this.notas.push(nota);
      return true;
  }

  media(){
    console.log("media ejecutada");

    if(this.notas.length===0){
      return 0;
    }

    const suma=this.notas.reduce((acumulador,notaActual)=> acumulador + notaActual,0);

    return suma / this.notas.length;
  }


  presentarse(){
    console.log("Presentarse ejecutada");
    return `${this.nombre}, de ${this.curso}`;
  }
}

class AlumnoFCT extends Alumno {
  // TODO: constructor(nombre, curso, empresa): primero super(nombre, curso) y después guarda la empresa.
    constructor(nombre,curso,empresa){
      console.log("constructor AlumnadoFCT EJECUTADO");
      super(nombre,curso);
      this.empresa=empresa;
    }

  // TODO: presentarse(): la frase de Alumno (super.presentarse()) más «, en prácticas en TecnoSur».
    presentarse(){
      console.log("Presentarse Alumnado FCT ejecutado");
      return super.presentarse() + `, en practicas en ${this.empresa}`;
    }
}

const alumnos = [];


//Crear un alumno normal y añadirle dos notas validas

const alumno1=new Alumno("Lucia Martin", "2ºDAW");
alumno1.anadirNota(8.5);
alumno1.anadirNota(9.0);
alumnos.push(alumno1);

//AlumnoFCT con empresa y añadirle notas validas

const alumno2=new AlumnoFCT("Carlos Ruiz","2ºDAW","Tecno sur");
alumno2.anadirNota(7.0);
alumno2.anadirNota(6.5);
alumno2.push(alumno2);





// Ya está hecha: pinta una tarjeta por alumno en #listaAlumnos y actualiza #totalAlumnos
function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");
    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

function crearAlumno() {

  console.log("CrearAlumno ejecutada");

  //Leer valores del form

  const nombre=document.getElementById("nombre5").value.trim();
  const curso=document.getElementById("curso5").value.trim();
  const empresa=document.getElementById("empresa5").value.trim();
  const notasTexto=document.getElementById("notas5").value.trim();
  const error5=document.getElementById("error5");

  //Si el nombre está vacio,mostrar errir y detenemos

  if(nombre===""){
    error5.textContent="El nombre no puede estar vacio";
    return;
  }

  //Procesar las notas si el campo no esta vacio

  let notasArray=[];
  if(notasTexto!==""){
  // Separar por comas y convertir a número (flecha de una sola expresión)
    notasArray=notasTexto.split(",").map((texto)=> Number(texto.trim()));

    // Validar con some: si alguna nota es NaN o está fuera del rango 0-10

    const hayNotasInvalidas=notasArray.some(
      (nota)=> Number.isNaN(nota) || nota < 0 || nota > 10
    );
 
  }













}

pintarAlumnos();


// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

// TODO: diasHasta(fecha) devuelve cuántos días faltan desde hoy hasta fecha (negativo si ya pasó).
//       Pon hoy a medianoche (hoy.setHours(0, 0, 0, 0)), resta las fechas, divide entre los milisegundos
//       de un día y redondea con Math.round: con el cambio de hora, la resta no siempre da un número entero.
function diasHasta(fecha) {

  console.log("dias hasta ejecutada con fecha:", fecha);

  //obtnemos la fecha d hoy y la pnemos a media noche
  const hot=new Date();
  history.setHours(0,0,0,0);
  //Restamos las fechas
  const diferenciaMs=fechaObjetivo-history;

  const msPorDia=1000*60*60*24;

  //dividimos y redondeamos con math.round

  const dias=Math.round(diferenciaMs/msPorDia);
  return dias;
 
}

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;        // "2026-12-25", o "" si está vacía
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    return;
  }

  // Ya está hecho: de "2026-12-25" a un Date. Fíjate en el mes - 1: el mes va de 0 a 11
  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);

  // TODO: con diasHasta(fecha), escribe en #salida6a «Faltan N días: será viernes, 25 de diciembre de 2026.»,
  //       «Es hoy…» o «Fue hace N días…». El nombre de la fecha, con toLocaleDateString("es-ES", {…}).
}

// TODO: iniciales(nombreCompleto) devuelve las iniciales en mayúsculas: «lucía martín ortega» → «LMO».
//       Encadena trim, split(" "), filter (para quitar las palabras vacías si hay espacios dobles),
//       map (la primera letra de cada palabra, en mayúscula) y join("").
function iniciales(nombreCompleto) {

  console.log("iniciales ejecutada con:", nombreCompleto);

  return nombreCompleto.trim().split(" ").filter(palabra=> palabra!=="") //elimina cadenas vacias por espacios.
  .map(palabra=>palabra[0].toUpperCase()) //Coge la 1 letra y la pone en mayusculas 
  .join("");
}

// TODO: crearUsuario(nombreCompleto) devuelve las iniciales en minúsculas y tres cifras al azar, de 000 a 999:
//       «lmo042». Pista: Math.random, Math.floor y padStart(3, "0").
function crearUsuario(nombreCompleto) {

  console.log("Crear usuario ejecutaa con:",nombreCompleto);

  //Obtenemos las iniciales y las psamos a minusculas
  const incialesMinus=iniciales(nombreCompleto).toLowerCase();

  //Generemos un numero entero aleatorio entre 0 y 999
  const numeroAleatorio=Math.floor(Math.random()*1000);

  //Convertimos a cadena y rellenamos con ceros
  const cifras=String(numeroAleatorio).padStart(3,"0");

  //Concatenamos y devolvemos resultado final
  return inicialesMinus+cifras;


}

function mostrarIniciales() {

console.log("Mostrar iniciales ejecutada");

const nombre=document.getElementById("nombre6").value.trim();
const salida=document.getElementById("salida6b");

//Si esta vacio,avisa y detiene la ejecucion
if(nombre===""){
  salida.textContent="El nombre no puede estar vacio";ç
  return;
}

//si no,calcula y escribe el formato solicitado
const ini=iniciales(nombre);
const usuario=crearUsuario(nombre);
salida.textContent=`Iniciales:${ini} · usuario: ${usuario}`;


}
