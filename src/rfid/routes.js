import express from 'express';
import controller from './RfidController.js';
import authenticate from '../middlewares/auth.js';

const router = express.Router();

// Apply authentication middleware to all sensor routes
router.use(authenticate);

// Sensor-specific routes
router.post('/poggers', controller.poggers);
router.post('', controller.create);
router.get('', controller.getAll);

export default router;