function calcularIVA(precio){
    let IVA = 1.21;
    let montoIva= precio * IVA;
    return montoIva;
}

function numeroIngresado(){
    let precio = prompt("ingresar un valor numerico")
    if(precio <0 ||  isNaN(precio)){
        alert("ingrese un numero valido")
    }else{
        let montoIva = calcularIVA(precio);

        alert(`el monto ingresado mas el impuesto IVA es de  ${montoIva.toFixed(2)} pesos`)
    }
}








