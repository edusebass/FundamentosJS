login = (user, pass) => {
    if(!user && pass) return console.log("No autorizado")
    console.log(`Welcome to ${user}`)
}

module.exports = login