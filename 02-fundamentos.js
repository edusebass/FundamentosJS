//OBJETO
const user = {
    name:"Byron",
    lastname:"Loarte",
    age:34,
    email:"eduardo@gmail.com",
    activo: true,
    address: {
        city: "Madrid",
        country: "Spain",
        calle: "Calle abc",
        secundaria: "calle 1123312"
    },
    edad:35,
    bestFriend: {
        name: "Peter",
        lastname: "Loarte",
        age:34
    },
    moreFriends: ["Peter", "JOse", "Mijin"],
    sendMail(){
        return `send mail to ${this.moreFriends[1]}`
    }
}

console.log(JSON.stringify(user))
console.log((user))

//desustrucutaracion de objetos
const {name, edad , moreFriends, activo} = user
console.log(user)

//unir objetos
const address = {
    city: "granada",
    country: "croacia",
    calle: "Calle 12323",
    secundaria: "calle secun"
}

const allinformation = {...user, ...address}
console.log(allinformation)


