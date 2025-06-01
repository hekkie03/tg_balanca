import express from 'express';
import controller from './CargaController.js';
import authenticate from '../middlewares/auth.js';

const router = express.Router();

// Apply authentication middleware to all sensor routes
router.use(authenticate);

// Sensor-specific routes
router.post('/', controller.create);
router.get('/', controller.getAll);

export default router;