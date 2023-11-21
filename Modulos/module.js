login = (user, pass) => {
    if(!user && pass) return console.log("No autorizado")
    console.log(`Welcome to ${user}`)
}

const likes = 500

module.exports = {
    likes,
    login
}