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


//ARREGLOS

const arr = [1,2,3,4,5,6,7,8,9,10]

console.log(arr.length)
console.log(arr[0])
console.log(arr[9])

// arr.push() mete al final
// arr.unshift(1) mete al incio

// arr.pop() elimina el ultimo
// arr.shift() elimina el ultimo


const findOne =  arr.find( e => e != 9)
const findTwo =  arr.find((e) => e === "Juan")

console.log("Console principal: ", arr)

console.log(findOne)
console.log(findTwo)

const arreglo = ["1", "2", "3", "4", "eduardo"]

const newData = arreglo.map((e) => { 
    return e.toUpperCase()
})
console.log(newData)


//desestructuracion
const [numero1, numero2, numero3, numero4, names] = arreglo
console.log(numero1, numero2, numero3, numero4, names)
