// Codigo de un cuadrado //
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es : " + areaCuadrado + "cm");

function areaCuadrado (lado) {
    return lado * lado;
}

console.groupEnd();

// Codigo de un triangulo //

console.group("Triangulos");

/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden : " 
+ ladoTriangulo1 
+ "cm, "
+ ladoTriangulo2
+ "cm, "
+ baseTriangulo
+ "cm"
);
*/

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm"); 

function perimetroTriangulo (lado1, lado2, base){
  return lado1 + lado2 + base;  
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}  
//console.log("El area del triangulo es de: " + areaTriangulo + "cm");

console.groupEnd();

// Codigo del Circulo

console.group("Circulos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");
// Diametro
function diametroCirculo (radio) {
    return radio * 2;
} 
//console.log("El diametro del circulo es : " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
//console.log("El valor de PI es : " + PI);

// Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

// Area
function areaCirculo (radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

  
//Aqui interactuamos con el HTML

//Funciones para el cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro de tu cuadradro es " + perimetro + "cm");
    
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;  

    const area = areaCuadrado(value);
    alert(area);
}



//Funciones para el triangulo
function calcularPerimetroTriangulo() {
    const primerLado = document.getElementById("InputLado1");
    const segundoLado = document.getElementById("InputLado2");
    const base = document.getElementById("InputBase");
    
    const input1 = primerLado.value;
    const input2 = segundoLado.value;
    const input3 = base.value;
   
    const perimetro = perimetroTriangulo(input1, input2, input3);
    alert("El perimetro de tu triangulo es "  + perimetro + "cm");

    console.log(perimetro)
}

function calcularAreaTriangulo() {
    const base  = document.getElementById("InputBase2");
    const altura = document.getElementById("InputAltura");

    const input1 = base.value;
    const input2 = altura.value;

    console.log(input1);
    console.log(input2);

    const area = areaTriangulo(input1, input2);
    alert("El area de tu triangulo es " + area + "cm")
    
}

//Funciones para el circulo
function calcularDiametroCirculo () {
    const radio = document.getElementById("InputCirculo");
    const input = radio.value;

    const diametro = diametroCirculo(input);
    alert("El diametro de tu circulo es: " + diametro + " cm")
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputCirculo");
    const input = radio.value;

    const perimetro = perimetroCirculo(input);
    //const resultado = parseInt(perimetro); opcional por si deseamos redondear el resulado a un entero //
    alert("El perimetro de tu circulo es: " + resultado + " cm")
}

function calcularAreaCirculo() {
    const radio = document.getElementById("InputCirculo");
    const input = radio.value;

    const area = areaCirculo(input);
    alert("El diametro de tu circulo es: " + area + " cm")
}

function alturaIscoceles (lado1, lado2, base) {
    if (lado1 === lado2) {
        const altura = Math.sqrt( (Math.pow(lado1 , 2)) - (Math.pow(base,2) / 4 ) );
        alert("La altura de tu triangulo iscoceles es " + altura + " cm" );
    }else {
        alert("Las medidas ingresadas no corresponden a un triangulo iscoceles");
    }
}




