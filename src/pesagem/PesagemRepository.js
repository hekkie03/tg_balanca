import db from '../../db/knex.js';
import { pesagemSchema } from './PesagemModel.js';

class PesagemRepository {
  async create(payload) {
    // Validate against schema
    const validarPayload = pesagemSchema.parse(payload);
    
    return db('pesagem')
      .insert({
        pesdatapesagem: validarPayload.pesdatapesagem,
        peskg: validarPayload.peskg,
        pesidveiculo: validarPayload.pesidveiculo,
        pesidmotorista: validarPayload.pesidmotorista,
        pesidcarga: validarPayload.pesidcarga,
        pesidrfid: validarPayload.pesidrfid
      })
      .returning('*');
  }

  async getAll() {
    return db('pesagem')
      .select('*')
      .orderBy('id', 'desc');
  }

}

export default new PesagemRepository();