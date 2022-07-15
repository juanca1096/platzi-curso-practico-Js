function calcularRangoMedio ()  {
    const inputRango  = document.getElementById("InputRango");
    const rangoValue = inputRango.value;
    const rangos = rangoValue.split(",").map(i=>Number(i));
    
    rangos.sort((a,b) => a-b);
    const valorMinimo =  rangos[0];
    const valorMaximo = rangos[rangos.length - 1];
        
    const rango = (valorMaximo - valorMinimo);
    const resultRango = document.getElementById("ResultRango");
    resultRango.innerText = "El rango de tus ventas es $" + rango;

    
    const rangoMedio =  (valorMinimo + valorMaximo) / 2;
    const resultRangoMedio = document.getElementById("ResultRangoMedio");
    resultRangoMedio.innerText = "El rango medio de tus ventas es $" + rangoMedio;       
}    


