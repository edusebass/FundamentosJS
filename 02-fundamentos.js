// OBJETOS
const usuario = {
    nombre: "Byron",
    apellido: "Loarte",
    edad: 34,
    correo: "eduardo@gmail.com",
    activo: true,
    direccion: {
        ciudad: "Madrid",
        pais: "España",
        calle: "Calle abc",
        secundaria: "calle 1123312"
    },
    edadExtra: 35,
    mejorAmigo: {
        nombre: "Peter",
        apellido: "Loarte",
        edad: 34
    },
    masAmigos: ["Peter", "JOse", "Mijin"],
    enviarCorreo() {
        return `Enviar correo a ${this.masAmigos[1]}`
    }
}

console.log(JSON.stringify(usuario));
console.log((usuario));

// DESESTRUCTURACIÓN DE OBJETOS
const { nombre, edadExtra, masAmigos, activo } = usuario;
console.log(nombre, edadExtra, masAmigos, activo);

// UNIR OBJETOS
const nuevaDireccion = {
    ciudad: "Granada",
    pais: "Croacia",
    calle: "Calle 12323",
    secundaria: "calle secun"
}

const todaLaInformacion = { ...usuario, ...nuevaDireccion };
console.log(todaLaInformacion);

// ARREGLOS
const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arreglo.length);
console.log(arreglo[0]);
console.log(arreglo[9]);

arreglo.push(11); // Agregar al final
arreglo.unshift(0); // Agregar al inicio

arreglo.pop(); // Eliminar el último
arreglo.shift(); // Eliminar el primero

const encontrarUno = arreglo.find(e => e !== 9);
const encontrarDos = arreglo.find((e) => e === "Juan");

console.log("Consola principal: ", arreglo);

console.log(encontrarUno);
console.log(encontrarDos);

const nuevosDatos = arreglo.map((e) => {
    return e * 2;
});
console.log(nuevosDatos);

// DESESTRUCTURACIÓN DE ARREGLOS
const [numero1, numero2, numero3, numero4, nombres] = arreglo;
console.log(numero1, numero2, numero3, numero4, nombres);
