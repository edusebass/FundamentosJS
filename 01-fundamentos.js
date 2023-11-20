// NODE --WATCH nombre_del_archivo
console.log("Holallalalalala");
console.log("¿Qué más oyen?");
console.log("¿Qué más oyen?");

// Comentario de una línea
/* Comentarios de varias líneas */

// VARIABLES
/* var no se recomienda */
let nombreUsuario = "Juan";
let puntosVidaUsuario = 234;

let dato;
dato = 12.4;
dato = "HOOLA";
dato = '@';
dato = false;
dato = 12.4;
dato = [12, true, 89];
dato = {
    nombre: "Juan",
    puntosVida: 234
};
console.log(dato.puntosVida);

////////////////////////////////////////////////////////////////////////////////////////////////

// STRINGS
let nombreJuego = "MarioKart";

console.log("Número de letras:", nombreJuego.length);
console.log("Encontrar alguna palabra:", nombreJuego.includes("Kart"));
console.log("Convertir a mayúsculas:", nombreJuego.toUpperCase());
console.log("Convertir a minúsculas:", nombreJuego.toLowerCase());
console.log("Quitar espacios adelante y atrás:", nombreJuego.trim());
console.log("Reemplazar una palabra:", nombreJuego.replace('Kart', 'Kart-Rider'));
console.log("Cortar un texto:", nombreJuego.slice(1, 6));
console.log("Cortar un texto:", nombreJuego.substring(1, 6));
console.log("Cortar un texto:", nombreJuego.charAt(1));
console.log("Repetir un texto:", nombreJuego.repeat(2));
console.log("Dividir un texto:", nombreJuego.split(" "));

let formNombreUsuario = 'Tosh';
console.log("Útil para validar el campo nombre del formulario:", formNombreUsuario.length);

let emailUsuario = 'byron@epn.edu.ec';
console.log("Útil para encontrar algún patrón:", emailUsuario.includes("@epn.edu.ec"));

let rolUsuario = 'Administrador';
console.log("Útil para convertir a mayúsculas y presentar en la UI:", rolUsuario.toUpperCase());

let direccionUsuario = 'QUITUMBE ÑAN 456';
console.log("Útil para convertir a minúsculas y guardar en BDD:", direccionUsuario.toLowerCase());

let formApellidoUsuario = '    Loarte  ';
console.log("Útil para quitar espacios adelante y atrás en el campo del formulario:", formApellidoUsuario.trim());

let descuentoProducto = "El precio de descuento es del 20%";
console.log("Útil para reemplazar el precio de un descuento:", descuentoProducto.replace('20%', '50%'));

let detalleProducto = "Mouse gamer de juego inalámbrico Logitech Serie G Lightspeed G305 blue - Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. ";
console.log("Útil para hacer el efecto leer más o expandir de un texto largo:", detalleProducto.slice(0, 50) + '....');

let tarjetaCreditoUsuario = "1234 5678 9851 9937";
console.log("Útil para cortar número de tarjeta de crédito en el proceso de facturación:", tarjetaCreditoUsuario.substring(15, 19));

let numVuelo = "AA4569";
console.log("Útil para saber el prefijo del vuelo que indica la aerolínea:", numVuelo.charAt(0) + numVuelo.charAt(1));

let usuarioAdmin = "Byron Loarte";
let avatarUsuario = usuarioAdmin.split(" ");
console.log("Útil para cortar un texto y colocar como avatar de perfil:", avatarUsuario[0].charAt(0), avatarUsuario[1].charAt(0));

// TEMPLATE LITERALS
const nombreJuego = "Mario Kart";
const tipoJuego = 'Carreras';

console.log(`${nombreJuego} - ${tipoJuego}`);

////////////////////////////////////////////////////////////////

// NUMEROS

// Es importante reconocer el tipo de valor asignado
const numeroVidas = "20";
const numeroPuntos = 20;

console.log(numeroPuntos, numeroVidas);
console.log(typeof (numeroPuntos), typeof (numeroVidas));

console.log("Suma:", numeroPuntos + 20);
console.log("Resta:", numeroPuntos - 20);
console.log("Multiplicación:", numeroPuntos * 20);
console.log("División:", numeroPuntos / 20);
console.log("Módulo:", numeroPuntos % 20);

// Importante el manejo de operadores de incremento y decremento
let numeroPuntosActual = 20;

console.log(++numeroPuntosActual);
console.log(numeroPuntosActual++);

let numeroVidasActual = 20;

console.log(--numeroVidasActual);
console.log(numeroVidasActual--);

// Presedencia
console.log(3 + 4 * 5);
console.log(4 * 3 ** 2);
console.log(200 * 0.2);
console.log(200 * 1.12);

// Conversiones
let edadJugador = "20";
let precioJuego = "525.63";

console.log(Number.parseInt(edadJugador));
console.log(Number.parseFloat(precioJuego));

console.log(Number.isInteger(edadJugador));

console.log(`${+edadJugador + +precioJuego}`);

////////////////////////////////////////////////////////////////

// BOOLEANOS

// Operadores de asignación
let saldoTarjetaUsuario = 500;
let saldoTarjeta = 1000;
let estadoCuenta;
let emailConfirmado = null;

// Operadores de asignación de adición
saldoTarjetaUsuario += 100;
console.log(saldoTarjetaUsuario);

// Operadores de comparación
saldoTarjetaUsuario = "1000";
console.log(saldoTarjeta == saldoTarjetaUsuario); // evalúa tipo de dato y contenido
console.log(saldoTarjeta === saldoTarjetaUsuario); // evalúa tipo de dato y contenido
console.log(estadoCuenta === emailConfirmado);

// Operadores aritméticos
console.log(saldoTarjeta + parseInt(saldoTarjetaUsuario));

// Operadores lógicos
console.log(saldoTarjeta != saldoTarjetaUsuario);
console.log(saldoTarjeta !== parseInt(saldoTarjetaUsuario));

// Operador ternario
const respuesta = saldoTarjeta <= saldoTarjetaUsuario ? "Pagar" : "Seguir consumiendo";
console.log(respuesta);

////////////////////////////////////////////////////////////////

// BUCLES

// For
let contador = 10;

for (let i = contador; i >= 0; i--) {
    i <= 0 ? console.log("Comida lista") : console.log(i);
}

// While
let contador2 = 10;
while (contador2 >= 0) {
    contador2 <= 0 ? console.log("Comida lista") : console.log(contador2);
    contador2--;
}

// Do While
do {
    contador2 <= 0 ? console.log("Comida lista") : console.log(contador2);
} while (contador2 >= 0)

// FUNCIONES

// Declaración de funciones
function saludar() {
    console.log("Función declarada");
}
saludar();

// Expresión de función
const saludarExpresion = function () {
    console.log("Función expresada");
};
saludarExpresion();

// Funciones anónimas y autoejecutadas
console.log(
  (function () {
    return "Esto es una prueba para validar una cuenta";
  })()
);

// Parámetros y argumentos
function saludarConNombre(nombreUno, nombreDos = "Node.Js") {
    return `Bienvenido ${nombreUno} y ${nombreDos}`;
}
console.log(saludarConNombre("Js", "React"));

// Parámetros rest
const precioFinalItems = function (a, b, ...args) {
    let total = a + b;
    if (args.length > 0) args.forEach(e => total += e);
    return total;
};
console.log(precioFinalItems(10, 20, 40, 50, 10));

// Retorno de funciones
function obtenerMensaje() {
    return "Hola Js";
}
console.log(obtenerMensaje());

// Funciones flecha
const login = (user, password) => {
    console.log("Usuario y contraseña válidos");
};

const validarMail = (user, email) => {
    console.log("El correo electrónico ha sido verificado");
};

const registrarAvatar = (photo) => {
    console.log("El avatar ha sido registrado");
};

login();
validarMail();


