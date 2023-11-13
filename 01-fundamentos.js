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