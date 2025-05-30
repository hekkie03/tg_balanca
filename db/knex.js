import knex from 'knex';
import config from '../knexfile.js'; // Note the .cjs extension

const db = knex(config.development);

export default db;