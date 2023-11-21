//COMON JS
// const {login, likes} = require('./module')

//ESMODULES
import login from './module.js'

// console.log("likes =>", likes)
login("edu")



//callback hell
primeracosa(function(resultado1) {
    segundacosa(resultado1, function(resultado2) {
      terceracosa(resultado2, function(resultado3) {
        return resultado // esto puede seguir hasta  el infinito
      });
    });
  });
  

// promesas para evitar el callback hell
primeracosa()
  .then(resultado1 => segundacosa(resultado1))
  .then(resultado2 => terceracosa(resultado2))
  .then(resultado3 => {
    // y asi se evitaria tener aninadas multiples funciones
  })
  .catch(error => {
  });
