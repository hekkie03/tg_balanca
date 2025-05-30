import { z } from 'zod';

// Validation Schema
export const VeiculoSchema = z.object({
  veiplaca: z.string(),
  veimarca: z.string(),
  veiorigem: z.string()
});

// Data Type Declaration
export class VeiculoModel {
  /**
   * @param {object} payload
   * @param {string} payload.veiplaca
   * @param {string} payload.veimarca
   * @param {string} payload.veiorigem
   */
  constructor(payload) {
    this.veiplaca = payload.veiplaca;
    this.veimarca = payload.veimarca;
    this.veiorigem = payload.veiorigem;
  }
}