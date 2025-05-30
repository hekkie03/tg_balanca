import express from 'express';
import controller from './SensorController.js';
import authenticate from '../middlewares/auth.js';

const router = express.Router();

// Apply authentication middleware to all sensor routes
router.use(authenticate);

// Sensor-specific routes
router.post('/router', controller.create);
router.get('/router', controller.getAll);

export default router;