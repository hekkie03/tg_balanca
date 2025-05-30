import { z } from 'zod';

// Validation Schema
export const SensorSchema = z.object({
  senpeso: z.number().min(0).max(1000), // Example: 0-1000kg range
  sendataenvio: z.coerce.date() // Accepts ISO strings or Date objects
});

// Data Type Declaration
export class SensorData {
  /**
   * @param {object} payload
   * @param {number} data.senpeso
   * @param {Date} data.sendataenvio
   */
  constructor(payload) {
    this.senpeso = payload.senpeso;
    this.sendataenvio = payload.sendataenvio;
  }
}