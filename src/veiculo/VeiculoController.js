import VeiculoRepository from './VeiculoRepository.js';
import { VeiculoModel } from './VeiculoModel.js';

class VeiculoController {
  async create(req, res) {
    try {
      // Create data object
      const veiculoModel = new VeiculoModel(req.body);
      
      // Repository handles validation and DB insert
      const result = await VeiculoRepository.create(veiculoModel);
      
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
      const result = await VeiculoController.getAll();
      
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