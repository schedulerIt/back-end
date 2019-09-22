
exports.up = function(knex) {
  return knex.schema.createTable('taskstatus', table => {
      table.increments('id');
      table.string('name', 40).notNullable().unique();
      table.string('description');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('taskstatus');
};
