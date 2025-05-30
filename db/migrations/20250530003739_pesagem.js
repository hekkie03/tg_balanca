export function up(knex) {
    return knex.schema.createTable('pesagem', (table) => {
      table.increments('id').primary();
      table.string('pesdatapesagem').notNullable();
      table.decimal('peskg', 13, 3).notNullable();
      table.integer('pesidveiculo').notNullable();
      table.integer('pesidmotorista').notNullable();
      table.integer('pesidcarga').notNullable();
      table.integer('pesidrfid').notNullable();
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable('pesagem');
  }
