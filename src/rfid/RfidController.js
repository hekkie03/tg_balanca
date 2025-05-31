import RfidRepository from './RfidRepository.js';
import { RfidModel } from './RfidModel.js';

class RfidController {
  async create(req, res) {
    try {
      // Create data object
      const rfidModel = new RfidModel(req.body);
      
      // Repository handles validation and DB insert
      const result = await RfidRepository.create(rfidModel);
      
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ 
        error: error.message,
        details: error.errors 
      });
    }
  }

  async poggers(req, res) {
    try {
      
      console.log(req.body);
      
      res.status(201).json('POGGERS!!!');
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
      const result = await RfidController.getAll();
      
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ 
        error: error.message,
        details: error.errors 
      });
    }
  }
}

export default new RfidController();