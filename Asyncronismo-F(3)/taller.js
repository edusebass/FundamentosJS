//DOM MANIPULATION

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // Obtén el botón y el div por su ID
    var miBoton = document.getElementById('miBoton');
    var miDiv = document.getElementById('miDiv');
  
    // Agrega un event listener al botón
    miBoton.addEventListener('click', function () {
      // Crea un nuevo elemento de párrafo
      var nuevoParrafo = document.createElement('p');
      // Agrega texto al párrafo
      nuevoParrafo.textContent = '¡Nuevo párrafo añadido!';
      // Agrega el nuevo párrafo al div
      miDiv.appendChild(nuevoParrafo);
    });
  });
  

//ASINCRONISMO
console.log('Inicio del programa');

// setTimeout simula una operación asíncrona que toma 2 segundos
setTimeout(function () {
console.log('Esta tarea se ejecuta después de 2 segundos');
}, 2000);

console.log('Fin del programa');
  
//CODIGO ASINCRONO VS SINCRONO

//codigo sincrono
console.log('Inicio del programa');

function operacionSincrona() {
  for (let i = 0; i < 3; i++) {
    console.log('Operación síncrona:', i);
  }
}

operacionSincrona();

console.log('Fin del programa');

//codigo asincrono
console.log('Inicio del programa');

function operacionAsincrona() {
  setTimeout(function () {
    console.log('Operación asíncrona 1');
  }, 2000);

  setTimeout(function () {
    console.log('Operación asíncrona 2');
  }, 1000);

  setTimeout(function () {
    console.log('Operación asíncrona 3');
  }, 1500);
}

operacionAsincrona();

console.log('Fin del programa');


//PROMESAS
const miPrimeraPromesa = new Promise((resolve, reject) => {
    // Simular una operación asíncrona que se completa con éxito después de 2 segundos
    setTimeout(() => {
      const exito = true;
  
      if (exito) {
        // Si la operación fue exitosa, resolvemos la promesa con un valor
        resolve('¡Operación completada con éxito!');
      } else {
        // Si hubo un error, rechazamos la promesa con un motivo
        reject('¡Hubo un error en la operación!');
      }
    }, 2000);
  });
  
  // Usar la promesa
  miPrimeraPromesa
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.error(error);
    });
  


//ASYNC - AWAIT
// Función que devuelve una promesa
function obtenerDatos() {
    return new Promise((resolve, reject) => {
      // Simular una operación asíncrona que se completa con éxito después de 2 segundos
      setTimeout(() => {
        const exito = true;
  
        if (exito) {
          // Si la operación fue exitosa, resolvemos la promesa con un valor
          resolve('¡Datos obtenidos con éxito!');
        } else {
          // Si hubo un error, rechazamos la promesa con un motivo
          reject('¡Error al obtener datos!');
        }
      }, 2000);
    });
  }
  
  // Función async que utiliza await para manejar la promesa de manera síncrona
  async function ejecutarOperacionAsincrona() {
    try {
      console.log('Inicio de la operación asíncrona');
      
      // Esperar a que la promesa se resuelva antes de continuar
      const resultado = await obtenerDatos();
      
      console.log(resultado);
      console.log('Fin de la operación asíncrona');
    } catch (error) {
      // Manejar cualquier error que ocurra durante la ejecución de la promesa
      console.error(error);
    }
  }
  
  // Llamar a la función async
  ejecutarOperacionAsincrona();
  