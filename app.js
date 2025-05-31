import 'dotenv/config';
import express from 'express';
import veiculoRoutes from './src/veiculo/routes.js';
import rfidRoutes from './src/rfid/routes.js'
/* import authenticate from './src/middlewares/auth.js'; */

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/veiculo', veiculoRoutes);
app.use('/rfid', rfidRoutes);

// Health Check
app.get('/', (req, res) => {
  res.json({ status: 'API operational', timestamp: new Date() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// Comando para abrir o localtunnel
// da um node keepalive.js para tentar manter o link hospedado
// lt --port 3000 --subdomain api-balanca
/* {
  uid: '1371B62C',
  nome: 'Camiao01',
  placa: 'ABC1D34',
  cultura: 'Mandioca',
  peso_bruto: 0,
  peso_tara: 0,
  peso_liquido: 0
} */