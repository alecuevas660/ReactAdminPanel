const express = require('express');
const app = express();
const port = 5000;

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
