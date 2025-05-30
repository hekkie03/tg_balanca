import db from '../../db/knex.js';
import { VeiculoSchema } from './VeiculoModel.js';

class VeiculoRepository {
  async create(payload) {
    // Validate against schema
    const validarPayload = VeiculoSchema.parse(payload);
    
    return db('veiculo')
      .insert({
        veiplaca: validarPayload.veiplaca,
        veimarca: validatedData.veimarca,
        veiorigem: validatedData.veiorigem
      })
      .returning('*');
  }

  async getAll() {
    return db('veiculo')
      .select('*')
      .orderBy('id', 'desc');
  }

}

export default new VeiculoRepository();