
exports.up = function(knex) {
  return knex.schema.createTable('locations', table => {
      table.increments('id');
      table.string('address', 150).notNullable();
      table.string('city', 100).notNullable();
      table.string('state', 100).notNullable();
      table.string('zipcode').notNullable();
      table.string('telephone', 30).notNullable();  
      table.integer('accountid').references('id').inTable('accounts').notNullable()
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');   
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('locations');
};
