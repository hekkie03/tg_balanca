import MotoristaRepository from './MotoristaRepository.js';
import { MotoristaModel } from './MotoristaModel.js';

class MotoristaController {
  async create(req, res) {
    try {
      // Create data object
      const motoristaModel = new MotoristaModel(req.body);
      
      // Repository handles validation and DB insert
      const result = await MotoristaRepository.create(motoristaModel);
      
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
      const result = await MotoristaController.getAll();
      
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ 
        error: error.message,
        details: error.errors 
      });
    }
  }
}

export default new MotoristaController();