import SensorRepository from './SensorRepository.js';
import { SensorData } from './SensorModel.js';

class SensorController {
  async create(req, res) {
    try {
      // Create data object
      const sensorData = new SensorData(req.body);
      
      // Repository handles validation and DB insert
      const result = await SensorRepository.create(sensorData);
      
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ 
        error: error.message,
        details: error.errors 
      });
    }
  }
  
  async getAll(req, res) {
    try {
      // Get All
      const result = await SensorRepository.getAll();
      
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ 
        error: error.message,
        details: error.errors 
      });
    }
  }
}

export default new SensorController();