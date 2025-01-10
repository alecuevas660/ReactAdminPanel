require('dotenv').config(); // Carga variables de entorno desde .env
const express = require('express');
const cors = require('cors');
const influencerRoutes = require('./routes/influencerRoutes.js'); // Ruta de los influencers

const app = express();
const PORT = process.env.PORT || 5000; // Puerto configurado

// Middleware
app.use(cors()); // Permite solicitudes desde otros orígenes
app.use(express.json()); // Habilita el manejo de JSON en las solicitudes

// Rutas
app.use('/api', influencerRoutes);

// Rutas de prueba
app.get('/', (req, res) => {
  res.send('API de Influencers funcionando');
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal.');
});
// Manejo de errores en las rutas
app.use((err, req, res, next) => {
  console.error('Error interno del servidor:', err.stack); // Log detallado del error
  res.status(500).send('Algo salió mal en el servidor.');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
