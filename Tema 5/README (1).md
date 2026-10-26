# Tarea 5 · Manipular el DOM

**Autor:** German Galvez Aranda· Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27

> **Plantilla de la tarea 5.** Cómo usarla:
>
> 1. Copia esta carpeta en tu repositorio de DWEC y cámbiale el nombre a `tema05`.
> 2. `index.html` ya está maquetado: es la página que vas a manipular. No cambies los `id` ni las clases que usa el JavaScript.
> 3. `js/app.js` trae una función por botón con `TODO`, y modelos en los ejercicios 1, 3 y 6.
> 4. Sustituye las imágenes de `capturas/` por las tuyas, **con el mismo nombre**.
> 5. Todo lo que va entre [corchetes] es un hueco: cámbialo por lo tuyo. Al terminar, borra este aviso.

[Una o dos líneas: qué hay en esta carpeta y cómo se ve. Por ejemplo: abrir la carpeta en VS Code, pulsar **Go Live** y probar los botones con la consola abierta (F12).]

## Capturas

### a) La página recién cargada

<img src="capturas/1.png" alt="La página recién cargada con mi nombre en la navbar" width="600">

[Se trata de una aplicación web interactiva para la asignatura DWEC orientada a practicar la manipulación del DOM, el manejo de eventos y el BOM mediante JavaScript. Permite modificar párrafos, añadir o eliminar nodos dinámicamente, gestionar tareas y consultar las propiedades de la ventana del navegador]

### b) Ejercicios 1 y 2

<img src="capturas/2.png" alt="Los párrafos después de aplicar los cambios y añadir dos párrafos" width="600">

Su texto original ha sido reemplazado por; texto modificado por JavaScript

### c) Ejercicio 3: resaltado al pasar el ratón

![Un párrafo resaltado con el ratón encima]
<img src="capturas/3.png" alt="Los párrafos después de aplicar los cambios y añadir dos párrafos" width="600">

[Qué párrafo está resaltado y qué pasa con los párrafos que añades después.]

El parrado resaltado es el segundo,los parrafos se añaden debajo

### d) Ejercicio 4: `<b>hola</b>` con innerHTML

<img src="capturas/4.png" alt="El primer párrafo tras usar innerHTML" width="600">

[Qué salía con «Cambiar texto» y qué sale con innerHTML.]

### e) Ejercicio 5: la lista de tareas

![La lista con tres tareas y una marcada]
<img src="capturas/5.png" alt="El primer párrafo tras usar innerHTML" width="600">
[Tres tareas, una marcada, antes de pulsar «Borrar completadas».]

### f) Ejercicio 6: los datos de la ventana en el móvil

<img src="capturas/f-ej6-movil.png" alt="Los datos de la ventana en el modo móvil" width="300">

[Qué punto de corte sale en el móvil y cuál en tu ordenador.]

## Reflexión

[De 5 a 8 líneas: ¿qué diferencia hay entre textContent e innerHTML y por qué no se debe meter en innerHTML lo que escribe el usuario? Pon como ejemplo lo que pasó con `<b>hola</b>`.]

TextContent trata el contenido como texto plano, mientras que innerHTML interpreta y procesa etiquetas HTML. No se debe usar innerHTML con datos de usuarios por que permite la inyección de codigo malicioso

## Fuentes

- [Título de la página](https://enlace-a-la-fuente)

## Uso de IA

[Si has usado IA: qué herramienta, para qué y qué hiciste después con su respuesta. Si no la has usado, borra este apartado.]
