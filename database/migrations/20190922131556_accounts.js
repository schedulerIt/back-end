//MIGRATION FOR ACCOUNT TABLE
exports.up = function(knex) {
  return knex.schema.createTable('accounts', table =>{
      table.increments('id');
      table.string('accountid' , 6).notNullable();
      table.timestamp('createdat').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedat').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('accounts')
};
