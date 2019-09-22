
exports.up = function(knex) {
  return knex.schema.createTable('roles', table => {
      table.increments('id');
      table.string('name', 30).notNullable().unique();
      table.string('description', 50);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('roles');
};
