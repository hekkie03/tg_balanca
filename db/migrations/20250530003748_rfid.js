export function up(knex) {
    return knex.schema.createTable('rfid', (table) => {
      table.increments('id').primary();
      table.string('rficodigo').notNullable();
      table.dateTime('rfidataregistro');
      table.string('rfistatus');
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable('rfid');
  }
