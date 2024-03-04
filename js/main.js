// Bucle do-while

let usuario = "candela"
let contraseña = "bertolotti123"

do { 
    let usuarioIngresado = prompt ("Ingrese su usuario");
    let contraseñaIngresada = prompt ("Ingrese su contraseña");
    
    if (usuarioIngresado === usuario && contraseñaIngresada === contraseña) {
        alert ("Bienvenida "+ usuario + " a MALALA SHOES");
        break;
    } else{
        alert ("Usuario y/o contraseña incorrectas"
        )
    }
} while (true);


// if-else

let compraOnline = prompt("Desea realizar una compra? (si/no)");
if (compraOnline === "si") {
    alert("Iniciemos tu compra");
} else {
    alert("Vuelva pronto, lo esperamos!!")
} 

 // switch 

let listaProductos = prompt("Selecciona un producto:\n1- Zapatos\n2- Borcegos\n3- Zapatillas")
switch (listaProductos) {
    case "1":
        alert("Seleccionaste Zapatos");
        break;
    case "2":
        alert("Seleccionaste Borcegos");
        break;
    case "3":
        alert("Seleccionaste Zapatillas");
        break;
    default :
        alert("No seleccionaste un producto de la lista")
        break;

}

let talle = parseInt(prompt("Ingrese su talle:"));
if (talle >=35 && talle <=45){
    alert ("Tenemos disponibilidad de ese talle. Realice su compra!")
}else {
    alert("Lo siento, no tenemos disponibilidad en ese talle.");
}

// function  

let totalCarrito = 0;

function totalCompra(n1, n2) {
    totalCarrito = n1 * n2;
    return totalCarrito;
}

function calcularMontoFinal(cantidadPares, precioPorPar) {
    let total = totalCompra(cantidadPares, precioPorPar);
    return total;
}

let cantidadPares = prompt("¿Cuántos pares deseas comprar?");
let precioPorPar = 12000; 

if (cantidadPares) {
    let montoFinal = calcularMontoFinal(Number(cantidadPares), precioPorPar);
    alert("El monto total de tu compra es: $" + montoFinal);
} else {
    alert("Ingresa un número válido para la cantidad de productos");
}
