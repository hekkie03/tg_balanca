import 'dotenv/config';
import express from 'express';
import veiculoRoutes from './src/veiculo/routes.js';
/* import authenticate from './src/middlewares/auth.js'; */

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/veiculo', veiculoRoutes);

// Health Check
app.get('/', (req, res) => {
  res.json({ status: 'API operational', timestamp: new Date() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});