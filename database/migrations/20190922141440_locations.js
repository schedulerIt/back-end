
exports.up = function(knex) {
  return knex.schema.createTable('locations', table => {
      table.increments('id');
      table.string('address', 150).notNullable();
      table.string('city', 100).notNullable();
      table.string('state', 100).notNullable();
      table.string('zipcode').notNullable();
      table.integer('managerid').notNullable().references('id').inTable('users')
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');
      table.string('telephone', 30).notNullable();     
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('locations');
};
