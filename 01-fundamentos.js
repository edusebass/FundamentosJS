//node --watch nombre_del_archivo
console.log("holallalalalala")
console.log("Que mas oyen")
console.log("Que mas oyen")


//Comentario de una linea
/*Comentarios de varias
lineas*/ 


//variables
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

//strings
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

'use strict';

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