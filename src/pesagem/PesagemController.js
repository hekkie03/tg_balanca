import PesagemRepository from './PesagemRepository.js';
import { PesagemModel } from './PesagemModel.js';

class PesagemController {
  async create(req, res) {
    try {
      // Create data object
      const pesagemModel = new PesagemModel(req.body);
      
      // Repository handles validation and DB insert
      const result = await PesagemRepository.create(pesagemModel);
      
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
      const result = await PesagemController.getAll();
      
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ 
        error: error.message,
        details: error.errors 
      });
    }
  }
}

export default new PesagemController();