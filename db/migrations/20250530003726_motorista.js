export function up(knex) {
    return knex.schema.createTable('motorista', (table) => {
      table.increments('id').primary();
      table.string('motnome').notNullable();
      table.string('motendereco').nullable();
      table.string('mottelefone').nullable();
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable('motorista');
  }
