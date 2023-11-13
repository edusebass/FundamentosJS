//node --watch nombre_del_archivo
console.log("holallalalalala")
console.log("Que mas oyen")
console.log("Que mas oyen")


//Comentario de una linea
/*Comentarios de varias
lineas*/ 


//VARIABLES
/* var no se recomienda*/
let nombre = "Juan"
let puntosVida = 234

dato = 12.4
dato = "HOOLA"
dato = '@'
dato = false
dato = 12.4
dato = [12, true, 89]
dato = {
    nombre: "Juan",
    puntosVida: 234
}
console.log(dato.puntosVida)

////////////////////////////////////////////////////////////////////////////////////////////////

//STRINGS
let nombreJuego = "MarioKart"

console.log("Número de letras:",nombreJuego.length);
console.log("Encotrar alguna palabra:",nombreJuego.includes("Kart"));
console.log("Convertir a mayúsculas:",nombreJuego.toUpperCase());
console.log("Convertir a minusculas:",nombreJuego.toLowerCase());
console.log("Quitar espacios adelante y atrás:",nombreJuego.trim());
console.log("Reemplazar una palabra:",nombreJuego.replace('Kart','Kart-Rider'));
console.log("Cortar un texto:",nombreJuego.slice(1,6));
console.log("Cortar un texto:",nombreJuego.substring(1,6));
console.log("Cortar un texto:",nombreJuego.charAt(1));
console.log("Repetir un texto:",nombreJuego.repeat(2));
console.log("Dividir un texto:",nombreJuego.split(" "));

let formUsername = 'Tosh'
console.log("Útil para validar el campo nombre del formulario:",formUsername.length);
let emailUser = 'byron@epn.edu.ec'
console.log("Útil para encotrar algún patrón:",emailUser.includes("@epn.edu.ec"));
let rolUser = 'Administrador'
console.log("Útil para convertir a mayúsculas y presentar en la UI:",rolUser.toUpperCase());
let addressUser = 'QUITUMBE ÑAN 456'
console.log("Útil para convertir a minusculas y guardar en BDD:",addressUser.toLowerCase());
let formLastName = '    Loarte  '
console.log("Útil para quitar espacios adelante y atrás en el campo del formulario:",formLastName.trim());
let discountProduct = "El precio de descuento es del 20%"
console.log("Útil para reemplazar el precio de un descuento:",discountProduct.replace('20%','50%'));
let detailProduct = "Mouse gamer de juego inalámbrico Logitech Serie G Lightspeed G305 blue - Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. "
console.log("Útil para hacer el efecto leer más o expander de un texto largo:",detailProduct.slice(0,50)+'....');
let creditCardUser = "1234 5678 9851 9937"
console.log("Útil para cortar número de tarjeta de crédito en el proceso de facturación:",creditCardUser.substring(15,19));
let numFlight = "AA4569"
console.log("Útil para saber el prefijo del vuelo que indica la aerolínea:",numFlight.charAt(0)+numFlight.charAt(1));
let userAdmin = "Byron Loarte"
let avatarUser = userAdmin.split(" ")
console.log("Útil para cortar un texto y colocar como avatar de perfil:",avatarUser[0].charAt(0),avatarUser[1].charAt(0));

//template literals

// let nombreJuego = "Mario Kart"
let tipoJuego = 'Carreras'

console.log(nombreJuego,tipoJuego);

const name = "Byron"
const lastName= "Loarte"
const city ="Quito"
const age = 34
const active = false
console.log(name+"-"+lastName+"-"+city)
console.log(`${name} - ${lastName} - ${city} - ${active ? age : 'No se encuentra activo'}`);

////////////////////////////////////////////////////////////////

//NUMBERS

// Es importante reconocer el tipo de valor asignado
const numeroVidas = "20"
const numeroPuntos = 20

console.log(numeroPuntos,numeroVidas);
console.log(typeof(numeroPuntos), typeof(numeroVidas));

console.log("suma:",numeroPuntos+20);
console.log("resta:",numeroPuntos-20);
console.log("multiplicación:",numeroPuntos*20);
console.log("división:",numeroPuntos/20);
console.log("módulo:",numeroPuntos%20);


// Importante el manejo de operadores de incremento y decremento
let numeroPuntosActual = 20

console.log(++numeroPuntosActual );
console.log(numeroPuntosActual++);

let numeroVidasActual = 20

console.log(--numeroVidasActual);
console.log(numeroVidasActual--);

//presedencia
console.log(3 + 4 * 5)
console.log(4 * 3 ** 2)
console.log(200 * 0.2)
console.log(200 * 1.12)

//conversiones
let edadJugador = "20"
let precioJuego = "525.63"

console.log(Number.parseInt(edadJugador));
console.log(Number.parseFloat(precioJuego));

console.log(Number.isInteger(edadJugador));

console.log(`${+edadJugador + +precioJuego}`);

////////////////////////////////////////////////////////////////

//BOLEANOS

// operadores de asignación 
let saldoTarjetaUsuario = 500
let saldoTarjeta = 1000
let estadoCuenta
let emailConfirmado=null


// operadores de asignación de adición
saldoTarjetaUsuario += 100
console.log(saldoTarjetaUsuario);

// operadores de comparación
saldoTarjetaUsuario="1000"
console.log(saldoTarjeta == saldoTarjetaUsuario)
// evalua tipo de dato y contenido
console.log(saldoTarjeta === saldoTarjetaUsuario)
console.log(estadoCuenta === emailConfirmado);


// operadores aritméticos
console.log(saldoTarjeta + parseInt(saldoTarjetaUsuario));


// operadores lógicos 
console.log(saldoTarjeta != saldoTarjetaUsuario);

// evalua tipo de dato y contenido
console.log(saldoTarjeta !== parseInt(saldoTarjetaUsuario));

//operador ternario
// let saldoTarjetaUsuario = 500
// let saldoTarjeta = 1000

const respuesta = saldoTarjeta <= saldoTarjetaUsuario ? "Pagar" : "Seguir consumiendo"
console.log(respuesta);


////////////////////////////////////////////////////////////////

//BUCLES

//for
let contador = 10

for (let i = contador; i >= 0; i--) {
    
    i <=0 ? console.log("Comida lista"):console.log(i);
}

//while
// let contador2 = 10
while (contador >= 0)
{
    contador<=0 ? console.log("Comida lista"):console.log(contador)
    contador--
}

//do while
do {
    contador<=0 ? console.log("Comida lista"):console.log(contador)
    contador--
} while (contador >= 0);

const tareasPendientes = ['Trabajar','Estudiar','Nadar','Viajar','Aprender Js']
const usuario ={
    nombre:"Byron",
    apellido:"Loarte",
}

// uso del forEach 
tareasPendientes.forEach((t,i)=> console.log(`${i} - ${t}`))

// uso del for of -> usado para arreglos
for (const t of tareasPendientes) {
    console.log(`${t}`)
}


// uso del for in -> usado para objetos
for (const clave in usuario) {
    console.log(`${usuario[clave]}`)
}

// uso del map -> retorna un nuevo arreglo
const nuevasTareas = tareasPendientes.map((t)=> t)
console.log(nuevasTareas);

////////////////////////////////////////////////////////////////

//FUNCIONES

function hello(){
    console.log("funcion declarada")
}
hello()

const expresada = function(){
    console.log("funcion expresada")
}
expresada()

//funciones anonimas y autoejecutada
console.log(function(){
    return "esto es una prueba de para validar una cuenta"
}());

(function(){
    console.log("función para validar datos del usuario")
})()

// const buscador = document.querySelector('#search-178')
// const button = document.createElement("button")
// button.innerText="Hello React"
// buscador.appendChild(button);

// button.addEventListener('click', function(){
//     alert("Usuario registrado")
// })

//PARAMETROS Y ARGUMENTOS
function hello(nameOne,nameTwo){
    return "welcome "+ nameOne + " and "+nameTwo
}

console.log(hello('Js','React'))

// Parámetros por default
//
// En una función se puede especificar parámetros opcionales.
function hello(nameOne,nameTwo="Node.Js"){
    
    return "welcome "+ nameOne + " and "+nameTwo
}


//Parámetros rest
// con args se puede mandar lo que uno quiera
const precioFinalItems = function(a,b,...args){
    let suma = 0;
    var total = suma+a+b
    if(args.length>0) args.forEach(e =>total+=e)
    return total
}

console.log(precioFinalItems(10,20,40,50,10))

//retorno de un funcion
function hello(){
    
    return "hola Js"
    // return 123 
    // return true 
    // return ['Peter','Mike','Camila','Joe']
    // return {
    //     name:"Byron",
    //     lastname:"Loarte",
    //     age:34
    // }
    // return function(){
    //     return "Hello Js"
    // }
}
console.log(hello())