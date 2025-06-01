import { z } from 'zod';

// Validation Schema
export const cargaSchema = z.object({
  cartipocarga: z.string(),
  cardescricao: z.string(),
  cardestino: z.string(),
  carorigem: z.string()
});

// Data Type Declaration
export class CargaModel {
  /**
   * @param {object} payload
   * @param {string} payload.cartipocarga
   * @param {string} payload.cardescricao
   * @param {string} payload.cardestino
   * @param {string} payload.carorigem
   */
  constructor(payload) {
    this.cartipocarga = payload.cartipocarga;
    this.cardescricao = payload.cardescricao;
    this.cardestino = payload.cardestino;
    this.carorigem = payload.carorigem;
  }
}