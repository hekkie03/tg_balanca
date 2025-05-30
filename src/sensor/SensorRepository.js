import db from '../../db/knex.js';
import { SensorSchema } from './SensorModel.js';

class SensorRepository {
  async create(payload) {
    // Validate against schema
    const validatedData = SensorSchema.parse(payload);
    
    return db('sensor')
      .insert({
        senpeso: validatedData.senpeso,
        sendataenvio: validatedData.sendataenvio
      })
      .returning('*');
  }

  async getAll() {
    return db('sensor')
      .select('*')
      .orderBy('sendataenvio', 'desc');
  }

  async findByDateRange(startDate, endDate) {
    return db('sensor')
      .whereBetween('sendataenvio', [startDate, endDate])
      .select('*');
  }

  async deleteOldEntries(retentionDays = 30) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - retentionDays);
    
    return db('sensor')
      .where('sendataenvio', '<', cutoffDate)
      .del();
  }
}

export default new SensorRepository();