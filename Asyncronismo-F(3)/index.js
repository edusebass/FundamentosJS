// 3 formas de ejecutar codigo asincrono
// callbacks
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



// Manejo de APIS

// promesas //asyn - await

fetch("https://jsonplaceholder.typicode.com/users")
    .then((peticion) => peticion.json())
    .then((resultado) => {
        console.log(resultado)
        console.log("pr: " + resultado[9].name)
        console.log("pr: " + resultado[9].username)
        console.log("pr: " + resultado[9].email)
    }).catch((err) => console.log(err))


const conectarAPI = async() => {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = respuesta.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

conectarAPI()


    