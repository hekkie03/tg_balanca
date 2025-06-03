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

  async selectByRfid(rfid) {
    const select = db('rfid')
      .select('veiculo.id as idveiculo', 'motorista.id as idmotorista', 'carga.id as idcarga')
      .select('rfid.rficodigo', 'rfid.id as idrfid')
      .leftJoin('veiculo', 'veiculo.veirfid', 'rfid.rficodigo')
      .leftJoin('motorista', 'motorista.id','veiculo.veiidmotorista')
      .leftJoin('carga', 'carga.id','veiculo.veiidcarga')
      .where('veiculo.veirfid', rfid)
    console.log(select.toSQL().sql);
    return select;
  }
}

export default new RfidRepository();