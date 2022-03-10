//llamamos al dom 

const $displayValorAnterior = document.getElementById('valor-anterior');
const $displayValorActual = document.getElementById('valor-actual');
const $botonesNumeros = document.querySelectorAll('.numero');
const $botonesOperadores = document.querySelectorAll('.operador');


const display = new Display($displayValorAnterior,$displayValorActual);

//agregamos los evenetos a los botones

$botonesNumeros.forEach(boton => {//el forEach recorre todos nuestros botonesNumeros
    //y con el parametro boton le agrega un evento click  
    boton.addEventListener('click',() =>{
        //cada vez que se precione un boton el display agregue el boton del iinergtml es decir el que tengamos en nuestro html
        display.agregarNumero(boton.innerHTML);
    });
});
//agregamos evento click a cada uno de nmuestros botones operadores y con un metodo computar con el parametro boton.value es decir de mi boton en html el value que agregamos 
$botonesOperadores.forEach (boton =>{
    boton.addEventListener('click', () => display.computar(boton.value))
})