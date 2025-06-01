import { z } from 'zod';

// Validation Schema
export const motoristaSchema = z.object({
  motnome: z.string(),
  motendereco: z.string(),
  mottelefone: z.string().max(11, 'Telefone é maior que 11 digitos')
});

// Data Type Declaration
export class MotoristaModel {
  /**
   * @param {object} payload
   * @param {string} payload.motnome
   * @param {string} payload.motendereco
   * @param {string} payload.mottelefone
   */
  constructor(payload) {
    this.motnome = payload.motnome;
    this.motendereco = payload.motendereco;
    this.mottelefone = payload.mottelefone;
  }
}