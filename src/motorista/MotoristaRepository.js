import db from '../../db/knex.js';
import { motoristaSchema } from './MotoristaModel.js';

class MotoristaRepository {
  async create(payload) {
    // Validate against schema
    const validarPayload = motoristaSchema.parse(payload);
    
    return db('motorista')
      .insert({
        motnome: validarPayload.motnome,
        motendereco: validarPayload.motendereco,
        mottelefone: validarPayload.mottelefone
      })
      .returning('*');
  }

  async getAll() {
    return db('motorista')
      .select('*')
      .orderBy('id', 'desc');
  }

  async selectById(id) {
    return db('motorista')
      .select('*')
      .where('id', id);
  }

}

export default new MotoristaRepository();