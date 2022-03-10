//la clase display  va ser la encargada de controlar la calculadora y la que 
//interactue con nuestros botones y mostralos en el display

class Display{
    constructor($displayValorAnterior,$displayValorActual){
        //display V actual y V Antrior son los numero que queremos mostrar en el displat 
        this.$displayValorActual = $displayValorActual;
        this.$displayValorAnterior = $displayValorAnterior;
        this.calculador = new Calculadora();//se va a encargar de recibit la operacion matematica
        //los numeros que estamos guardando van a hacer el valor actual y valor anterior
        this.valorActual = '';//los incializamos como strings vacios
        this.valorAnterior = '';
        //el valor actual y anterior van a recibir los numeros que hagamos click y los displayValores son los que se van a mostrar en el display
        this.tipoOperacion = undefined;//esto va a guardar el tipo de operacion que usa el usuario
        this.signos ={
            sumar: "+",
            dividir:"%",
            multiplicar:"x",
            restar:"-",
        } 
    }

    //metodo para borrar uno x uno 
    borrar(){
        //para borrar valores unoxuno usamos silce para recortarlo solamente su ultimo numero 
        this.valorActual = this.valorActual.toString().slice(0,-1); //tostirng porque trabajamos con stings despues los pasamos a valores numericos
        this.imprimirValores();//para que se actualice nuestro display 
    }

    //metodo para borrar todo 

    borrarTodo(){
        //seteamos valor actual y valor anterior a string vacios 
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;//guarda el tipo de operacion qe estaba usando el usuario 
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;//seteamos tipoOperacion a tipo que recibiomos  
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();

    }
    //metodo agregar Numeros 

    agregarNumero(numero){
        //para que no se agreguen mas de un . preguntamos numero es un . y con includes si ya hay un punto incluido entonces no return nigun numero
        if( numero === '.' && this.valorActual.includes('.')) return
        //cuando precionemos un boton vamos a recibir un numeo y el valorActual va a pasar a valer ese numero en el display
        this.valorActual = this.valorActual.toString() + numero.toString();//agrego el += para que no se picen al clickear el boton y se concatenen
        this.imprimirValores();//le agrego la funcion para que muestre los valores 
    }

    //para mostrar los numero en la pantalla display le asigo a los $DisplayValores los valores actuales 

    imprimirValores(){
        //les estamos diciendo que el tenxto del display valor actual va a ser igual al valor actual agregado por botones
        //y esto va a seer que se muestre en nuestro displat 
        this.$displayValorActual.textContent = this.valorActual;
        this.$displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;//si existe el tipo de oparacion mostralo el signo sinono , en tipo de opeacion pusimos que no muestre = 
    }

    //toma los valores que tenemos en el display y darselo a la calculadora para queh aga el calculo para eso los parseamos a numeros 

    calcular(){
        //creamos variables para parsear los valores actuales y valores anteriores para que dejen de ser stirngs y se vuelvan numero y los guardamos en una constante
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        //preguntamos si valor actual y valor anteriro son isnan no hacemos nunguna operacion y retornamos sin hacer la operacion ,isnan devuevle verdadero si son numeros ,caso contrario si es un valor  vacio o no es un numero no se ejecuta 

        if(isNaN(valorActual) || isNaN(valorAnterior)) return;

        //en caso de que si tengan un numero usamos this.calculador this.tipoOperacion y los dos valores 
        this.valorActual = this.calculador[this.tipoOperacion](valorActual,valorAnterior);//this.calculador es de la clase Calculadora que pide un tipo(seria la funcion ) y dos numeros que serian los valores


    }
}