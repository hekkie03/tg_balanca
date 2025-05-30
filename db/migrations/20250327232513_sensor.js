export function up(knex) {
    return knex.schema.createTable('sensor', (table) => {
      table.increments('id').primary();
      table.float('senpeso').notNullable();
      table.dateTime('sendataenvio');
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable('sensor');
  }
  
  // Alternatively, you can use this syntax:
  // export { up, down };