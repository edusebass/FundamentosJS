//API
// Función que realiza una solicitud a una API y devuelve una promesa
async function obtenerDatosDeAPI() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
  
    try {
      // Realizar la solicitud a la API utilizando fetch (que devuelve una promesa)
      const respuesta = await fetch(url);
  
      // Verificar si la respuesta fue exitosa (código de estado 200)
      if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
      }
  
      // Parsear la respuesta JSON
      const datos = await respuesta.json();
      
      return datos;
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante la ejecución de la promesa
      console.error('Error al obtener datos de la API:', error.message);
      throw error; // Puedes elegir relanzar el error o manejarlo de otra manera
    }
  }
  

// LOCAL STORAGE
// Guardar datos en localStorage
localStorage.setItem('clave', 'valor');

// Obtener datos de localStorage
const valor = localStorage.getItem('clave');
console.log('Valor recuperado:', valor);

// Eliminar un elemento de localStorage
localStorage.removeItem('clave');

// Limpiar todos los datos de localStorage
localStorage.clear();


//MODULOS

//commonjs

// math.js
// const sumar = (a, b) => a + b;
// const restar = (a, b) => a - b;

// // Exportar funciones
// exports.sumar = sumar;
// exports.restar = restar;

// // app.js
// // Importar funciones desde el módulo math.js
// const { sumar, restar } = require('./math');

// // Utilizar las funciones importadas
// console.log('Suma:', sumar(5, 3));
// console.log('Resta:', restar(8, 2));


// es module
// math.js
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;

// app.js
// Importar funciones desde el módulo math.js
import { sumar, restar } from './math';

// Utilizar las funciones importadas
console.log('Suma:', sumar(5, 3));
console.log('Resta:', restar(8, 2));



