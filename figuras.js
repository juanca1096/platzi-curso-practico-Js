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