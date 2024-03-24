// Primer Entrega
/*

let usuario = "candela"
let contraseña = "bertolotti123"

do { 
    let usuarioIngresado = prompt ("Ingrese su usuario");
    let contraseñaIngresada = prompt ("Ingrese su contraseña");
    
    if (usuarioIngresado === usuario && contraseñaIngresada === contraseña ) {
        alert ("Bienvenida "+ usuario + " a Malala shoes");
        break;
    } else{
        alert ("Usuario y/o contraseña incorrectas"
        )
    }
} while (true);




let compraOnline = prompt("Desea realizar una compra en MALALA SHOES? (si/no)");
if (compraOnline === "si") {
    alert("Iniciemos tu compra");
} else {
    alert("Vuelva pronto, lo esperamos!!")
} 


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

let talle = prompt("Ingrese su talle:");
if (talle >= 35 && talle <= 45) {
    alert("Tenemos disponibilidad de ese talle. Realice su compra!")
} else {
    alert("Lo siento, no tenemos disponibilidad en ese talle.");
}


*/

// Segunda entrega 

function bienvenidos() {
    alert("Bienvenida a Malala Shoes")
};

bienvenidos()

const productos = [
    { nombre: "borcegos", precio: 25000 },
    { nombre: "zapatos", precio: 22000 },
    { nombre: "zapatillas", precio: 18000 },
];

let carrito = []

let seleccionDelUsuario = prompt("¿Deseas realizar una compra? si/no")

while (seleccionDelUsuario != "si" && seleccionDelUsuario != "no") {
    alert("Por favor ingresa si o no")
    seleccionDelUsuario = prompt("Deseas realizar una compra en Malala shoes?")
}

if (seleccionDelUsuario == "si") {
    alert("A continuación nuestra lista de productos");
    let MisProductos = productos.map(producto => producto.nombre + " " + producto.precio + "$");
    alert(MisProductos.join(" - "));
} else if (seleccionDelUsuario == "no") {
    alert("¡Gracias por visitarnos, hasta pronto!");
}

while (seleccionDelUsuario != "no") {
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if (producto == "borcegos" || producto == "zapatos" || producto == "zapatillas") {
        switch (producto) {
            case "borcegos":
                precio = 25000;
                break;
            case "zapatos":
                precio = 22000;
                break;
            case "zapatillas":
                precio = 18000;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades de este producto comprar?"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    }
    else {
        alert("No tenemos stock de este producto")
    }
    seleccionDelUsuario = prompt("Desea seguir con la compra?")

    while (seleccionDelUsuario === "no") {
        alert("Gracias por su compra.")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades; ${carritoFinal.unidades} , total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar de su compra es: ${total}`)