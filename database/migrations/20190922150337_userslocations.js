//USERS BY LOCATIONS MIGRATION
exports.up = function(knex) {
  return knex.schema.createTable('userslocations', table => {
      table.increments('id');
      table.integer('location').references('id').inTable('locations').notNullable()
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');
      table.integer('userid').references('id').inTable('users').notNullable()
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');     
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('userslocations');
};
