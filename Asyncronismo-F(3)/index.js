// 3 formas de ejecutar codigo asincrono

// callbacks


// promesas

const conexionBD = (datosConexion) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datosConexion ? resolve("Conexion") : reject("Conexion error")
        })
    })
}
conexionBD(true)
    .then((resultado) => console.log(resultado))
    .catch((err) => console.log(err))

//asyn - await
 

//prueba de obtener datos
const obtenerDatos = fetch("https://jsonplaceholder.typicode.com/users")

obtenerDatos
    .then((peticion) => peticion.json())
    .then((resultado) => {
        console.log(resultado)
        console.log("pr: " + resultado[9].name)
        console.log("pr: " + resultado[9].username)
        console.log("pr: " + resultado[9].email)
    }).catch((err) => console.log(err))

    