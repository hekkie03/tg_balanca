import { z } from 'zod/v4';

// Validation Schema
export const RfidSchema = z.object({
  rficodigo: z.string(),
  rfidataregistro: z.iso.datetime().nullable(),
  rfistatus: z.string().nullable()
});

// Data Type Declaration
export class RfidModel {
  /**
   * @param {object} payload
   * @param {string} payload.rficodigo
   * @param {string} payload.rfidataregistro
   * @param {string} payload.rfistatus
   */
  constructor(payload) {
    this.rficodigo = payload.rficodigo;
    this.rfidataregistro = payload.rfidataregistro;
    this.rfistatus = payload.rfistatus;
  }
}