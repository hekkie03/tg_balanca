import db from '../../db/knex.js';
import { motoristaSchema } from './motoristaModel.js';

class motoristaRepository {
  async create(payload) {
    // Validate against schema
    const validarPayload = motoristaSchema.parse(payload);
    
    return db('motorista')
      .insert({
        veiplaca: validarPayload.veiplaca,
        veimarca: validarPayload.veimarca,
        veiorigem: validarPayload.veiorigem
      })
      .returning('*');
  }

  async getAll() {
    return db('motorista')
      .select('*')
      .orderBy('id', 'desc');
  }

}

export default new motoristaRepository();