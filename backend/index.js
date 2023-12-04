// index.js

const express = require('express');
const database = require('./database'); // Asegúrate de que la ruta sea correcta según tu estructura de archivos

const app = express();
const port = 3000;

// Endpoint para insertar un documento en la base de datos
app.get('/insert', async (req, res) => {
  try {
    const document = { key: 'exampleKey', value: 'exampleValue' };
    await database.insertDocument(document);
    res.send('Documento insertado correctamente en la base de datos');
  } catch (error) {
    console.error('Error al insertar el documento', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
