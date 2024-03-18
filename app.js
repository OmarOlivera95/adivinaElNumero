let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroUsuario);
    console.log(numeroSecreto)  

    if(numeroUsuario === numeroSecreto){
      asignarTextoElemento('p', `¡Acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}!`);
      document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', "¡El numero secreto es menor!");
            intentos++;
            
        }else{
            asignarTextoElemento('p', "¡El numero secreto es mayor!");
            intentos++  ;
        }
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Juego terminado: Se han agotado todos los numeros posibles.')
    }else{
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
    }
    }
    
    
}function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del número secreto");
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja.
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
   condicionesIniciales();
    //Generar el numero aleatorio.
    //Inicializar el numero de intentos.
    //Deshabilitar el boton de nuevo juegos.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


