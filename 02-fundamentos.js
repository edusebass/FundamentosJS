// OBJETOS

const user = {
    name: "Byron",
    lastname: "Loarte",
    age: 34,
    email: "eduardo@gmail.com",
    activo: true,
    address: {
        city: "Madrid",
        country: "Spain",
        calle: "Calle abc",
        secundaria: "calle 1123312"
    },
    edad: 35,
    bestFriend: {
        name: "Peter",
        lastname: "Loarte",
        age: 34
    },
    moreFriends: ["Peter", "Jose", "Mijin"],
    sendMail() {
        return `send mail to ${this.moreFriends[1]}`;
    }
};

console.log(JSON.stringify(user));
console.log(user);

// Desestructuración de Objetos
const { name, edad, moreFriends, activo } = user;
console.log(name, edad, moreFriends, activo);

// Unir Objetos
const address = {
    city: "Granada",
    country: "Croacia",
    calle: "Calle 12323",
    secundaria: "calle secun"
};

const allInformation = { ...user, ...address };
console.log(allInformation);

// ARREGLOS

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.length);
console.log(arr[0]);
console.log(arr[9]);

// Métodos de Modificación de Arreglos
arr.push(11);   // Agrega 11 al final del arreglo.
arr.unshift(0);  // Agrega 0 al inicio del arreglo.
arr.pop();       // Elimina el último elemento del arreglo.
arr.shift();     // Elimina el primer elemento del arreglo.

console.log("Modified Array:", arr);

// Método find y map en Arreglos
const findOne = arr.find(e => e !== 9);
console.log("Find One:", findOne); // Encuentra el primer elemento que no es 9.

const newData = arr.map(e => e * 2);
console.log("New Data (doubled):", newData);

// Desestructuración de Arreglos
const [numero1, numero2, numero3, numero4, names] = arr;
console.log("Destructured Array:", numero1, numero2, numero3, numero4, names);
