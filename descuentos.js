const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento / 100)

    return precioConDescuento;
}


/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})
 */

function priceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    
}

function cuponDiscount () {
    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;

    const cupon = document.getElementById("ResultCupon");
    
    switch (cuponValue) {
        case "verano":
        const precioCupon = calcularPrecioConDescuento(resultado, 15);
        cupon.innerText =  "Tu precio con el cupon es de: $" + precioCupon;
        break;
        default:
            alert("Cupon no encontrado");
        
    }
}