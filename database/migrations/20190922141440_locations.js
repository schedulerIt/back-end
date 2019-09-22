
exports.up = function(knex) {
  return knex.schema.createTable('locations', table => {
      table.increments('id');
      table.string('address', 150).notNullable();
      table.string('city', 100).notNullable();
      table.string('state', 100).notNullable();
      table.string('zipcode').notNullable();
      table.integer('managerid').references('id').inTable('users').notNullable()
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');
      table.string('telephone', 11).notNullable();     
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('locations');
};
