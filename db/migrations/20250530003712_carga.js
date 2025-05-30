export function up(knex) {
    return knex.schema.createTable('carga', (table) => {
      table.increments('id').primary();
      table.string('cartipocarga').notNullable();
      table.string('cardescricao').nullable();
      table.string('cardestino').notNullable();
      table.string('carorigem').notNullable();
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable('motorista');
  }
