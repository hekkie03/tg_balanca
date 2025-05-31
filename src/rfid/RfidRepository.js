import db from '../../db/knex.js';
import { RfidSchema } from './RfidModel.js';

class RfidRepository {
  async create(payload) {
    // Validate against schema
    const validarPayload = RfidSchema.parse(payload);
    
    return db('rfid')
      .insert({
        rficodigo: validarPayload.rficodigo,
        rfidataregistro: validarPayload.rfidataregistro,
        rfistatus: validarPayload.rfistatus
      })
      .returning('*');
  }

  async getAll() {
    return db('rfid')
      .select('*')
      .orderBy('id', 'desc');
  }

}

export default new RfidRepository();