//Alert abre una ventana


function saludar(){
    alert("Hola soy Germán Gálvez");
    console.log("Boton SALUDAR pulsado");
}


//Boton 2

//NO ABRE NINGUNA VENTANA
//console.error() escribe un mensaje en ROJO en la consola
function simularError(){
console.error("Error simulado: no se ha podido completar la operacion");
}

//navigator.userAgent es un texto que envia el navegador para identificarse
function queNavegadorSoy(){
    const agente=navigator.userAgent;
    //mensaje para q lo vea el usuario
    alert(agente);
    //mensaje en la consola para el desarrollador
    console.log("userAgent:",agente);
}
