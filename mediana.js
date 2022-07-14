function calcularMediana () {
 
    function calcularMediaAritmetica (lista) {
   const sumaLista = lista.reduce (
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
    
}

    const inputLista = document.getElementById("InputLista");
    const inputValue = inputLista.value 
    
    let lista = inputValue;
    let lista1 = lista.split(',').map(i=>Number(i));
    
    console.log(lista1);

    lista1.sort((a,b) => a-b);

    const  mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) { //funcion para saber si un numero es par. Con el residuo de la division
    if (numerito % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1  = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;
}else {
    mediana = lista1[mitadLista1];
}

    const resultado = document.getElementById("ResulLista");
    resultado.innerText = "Tu mediana es : $" + mediana;

}