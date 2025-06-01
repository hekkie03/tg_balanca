export function up(knex) {
    return knex.schema.createTable('veiculo', (table) => {
      table.increments('id').primary();
      table.string('veiplaca').notNullable();
      table.string('veimarca').nullable();
      table.string('veiorigem').nullable();
      table.string('veirfid').nullable();
      table.integer('veiidmotorista').nullable();
      table.integer('veiidcarga').nullable();
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable('veiculo');
  }
