//Uso de operador Ternario para calcular el total con envio
class Productos {
	constructor(nombre, precio, stock) {
		this.nombre = nombre;
		this.precio = precio;
		this.stock = stock;
	}
}
const producto1 = new Productos("Taza magica personalizada", 500, 30)
const producto2 = new Productos("Resma A4 Autor", 650, 87)
const producto3 = new Productos("Resma A3 Autor", 900, 64)
const producto4 = new Productos("Sello automatico", 450, 42)
console.log(producto1, producto2, producto3, producto4)

const sumar = (tazas, resmaA4, resmaA3, sellos) => tazas + resmaA4 + resmaA3 + sellos
let tazas = prompt("¿cuantas Tazas personalizadas desea llevar?") * producto1.precio
let resmaA4 = prompt("¿cuantas Resmas A4 desea llevar?") * producto2.precio
let resmaA3 = prompt("¿cuantas Resmas A3 desea llevar?") * producto3.precio
let sellos = prompt("¿cuantos Sellos automaticos desea llevar?") * producto4.precio
const subTotales = [tazas, resmaA4, resmaA3, sellos] 
console.log(subTotales)

const precioEnvio = 1.15
let compraTotal = sumar(tazas, resmaA4, resmaA3, sellos)
function calcularEnvio(compraTotal, envio){}
(compraTotal < 2500) ? console.log("Envios disponibles solo en compras mayores de 2.500. Total del pedido sin envio: " + compraTotal) : console.log("el valor de la compra con envio incluido es de " + compraTotal * precioEnvio)

// Acceso condicional a un objeto
console.log(Productos.Restock ?? "esta descripción no existe")

// Desestructuración en parámetros
function verStock ({nombre, stock}) {
	console.log(nombre, stock)
}
verStock(producto1) 

//DOM
let consultaFooter = document.getElementById("consultaFooter")
let botonCarrito1 = document.getElementById("carritoBoton1")
let botonCarrito2 = document.getElementById("carritoBoton2")
let botonCarrito3 = document.getElementById("carritoBoton3")


//Spread + Operador++
let carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
botonCarrito1.addEventListener("click", () => {
	if(carrito.some(producto => producto.nombre == "taza magica personalizada")) {
		let indice = carrito.findIndex(producto => producto.nombre == "taza magica personalizada")
		carrito[indice].cant++
	} else {
		let producto1carrito = {
			...producto1,
			cant:1
		}
		carrito.push(producto1)
	}
	localStorage.setItem("carrito", JSON.stringify(carrito))
})
botonCarrito2.addEventListener("click", () => {
	if(carrito.some(producto => producto.nombre == "resma A4 Autor")) {
		let indice = carrito.findIndex(producto => producto.nombre == "resma A4 Autor")
		carrito[indice].cant++
	} else {
		let producto2carrito = {
			...producto2,
			cant:1
		}
		carrito.push(producto2)
	}
	localStorage.setItem("carrito", JSON.stringify(carrito))
}) 
 








