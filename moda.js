function calcularModa (){

const inputLista = document.getElementById("InputLista");
const valueLista = inputLista.value;    


const lista = valueLista;

const lista1 = lista.split(",").map(i => Number(i));

const lista1Count = {};

lista1.map(
    function(i) {
        if(lista1Count[i]) {
            lista1Count[i] += 1;   
        }else{
            lista1Count[i] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const modaArray = lista1Array[lista1Array.length - 1]; //usamos el -1, recordando que empezamos a contar desde 0.
const moda = modaArray.pop();

const inputModa = document.getElementById("ResultModa");
inputModa.innerText = "La moda de tu lista es: $" + modaArray;

}

