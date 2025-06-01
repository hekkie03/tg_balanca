import CargaRepository from './CargaRepository.js';
import { CargaModel } from './CargaModel.js';

class CargaController {
  async create(req, res) {
    try {
      // Create data object
      const cargaModel = new CargaModel(req.body);
      
      // Repository handles validation and DB insert
      const result = await CargaRepository.create(cargaModel);
      
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
      const result = await CargaController.getAll();
      
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ 
        error: error.message,
        details: error.errors 
      });
    }
  }
}

export default new CargaController();