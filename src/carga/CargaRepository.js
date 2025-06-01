import db from '../../db/knex.js';
import { cargaSchema } from './CargaModel.js';

class CargaRepository {
  async create(payload) {
    // Validate against schema
    const validarPayload = cargaSchema.parse(payload);
    
    return db('carga')
      .insert({
        cartipocarga: validarPayload.cartipocarga,
        cardescricao: validarPayload.cardescricao,
        cardestino: validarPayload.cardestino,
        carorigem: validarPayload.carorigem
      })
      .returning('*');
  }

  async getAll() {
    return db('carga')
      .select('*')
      .orderBy('id', 'desc');
  }

  async selectById(id) {
    return db('carga')
      .select('*')
      .where('id', id);
  }
}

export default new CargaRepository();