import { z } from 'zod';

// Validation Schema
export const pesagemSchema = z.object({
  pesdatapesagem: z.string(),
  peskg: z.number().nonnegative,
  pesidveiculo: z.number(),
  pesidmotorista: z.number(),
  pesidcarga: z.number(),
  pesidrfid: z.number()
});

// Data Type Declaration
export class PesagemModel {
  /**
   * @param {object} payload
   * @param {string} payload.pesdatapesagem
   * @param {string} payload.peskg
   * @param {string} payload.pesidveiculo
   * @param {string} payload.pesidmotorista
   * @param {string} payload.pesidcarga
   * @param {string} payload.pesidrfid
   */
  constructor(payload) {
    this.pesdatapesagem = payload.pesdatapesagem;
    this.peskg = payload.peskg;
    this.pesidveiculo = payload.pesidveiculo;
    this.pesidmotorista = payload.pesidmotorista;
    this.pesidcarga = payload.pesidcarga;
    this.pesidrfid = payload.pesidrfid;
  }
}