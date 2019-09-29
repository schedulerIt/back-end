//PROJECTS MIGRATIONS
exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
      table.increments('id');
      table.integer('locationid').references('id').inTable('locations').notNullable()
           .onDelete('RESTRICT')
           .onUpdate('CASCADE')
      table.string('name', 100).notNullable();
      table.string('address', 100).notNullable();
      table.string('city', 100).notNullable();
      table.string('state', 100).notNullable();
      table.string('zipcode').notNullable();
      table.string('contactperson', 100);
      table.string('contactposition',100);
      table.string('telephone', 30);
      table.string('email', 50);
      table.string('notes');
      table.timestamp('createdat').defaultTo(knex.fn.now());
      table.timestamp('updatedat').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
