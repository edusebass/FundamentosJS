const mongoose = require('mongoose');

// URL de conexión a tu base de datos MongoDB
const url = 'mongodb://localhost:27017'; // Cambia esto según tu configuración
const dbName = 'miBaseDeDatos';

// Conectar a la base de datos
async function connectToDatabase() {
  try {
    await mongoose.connect(`${url}/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a la base de datos');
    return mongoose.connection;
  } catch (error) {
    console.error('Error al conectar a la base de datos', error);
    throw error;
  }
}

// Definir un esquema (modelo) para tus documentos
const exampleSchema = new mongoose.Schema({
  key: String,
  value: String,
});

// Crear un modelo a partir del esquema
const ExampleModel = mongoose.model('Example', exampleSchema);

// Ejemplo de función para insertar un documento en la colección
async function insertDocument(document) {
  const db = await connectToDatabase();

  try {
    const result = await ExampleModel.create(document);
    console.log(`Documento insertado con el ID: ${result._id}`);
  } catch (error) {
    console.error('Error al insertar el documento', error);
    throw error;
  } finally {
    db.close(); // Cerrar la conexión después de realizar la operación
  }
}

// Exportar la función de inserción para usarla en otros archivos
module.exports = {
  insertDocument,
};
