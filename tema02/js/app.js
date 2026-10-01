//Alert abre una ventana


function saludar(){
    alert("Hola soy Germán Gálvez");
    console.log("Boton SALUDAR pulsado");
}


//Boton 2

//NO ABRE NINGUNA VENTANA

function simularError(){
console.error("Error simulado: no se ha podido completar la operacion");
}

function queNavegadorSoy(){
    const agente=navigator.userAgent;
    alert(agente);
    console.log("userAgent:",agente);
}
