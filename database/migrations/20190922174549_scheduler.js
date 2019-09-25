
exports.up = function(knex) {
  return knex.schema.createTable('scheduler', table => {
      table.increments('id');
      table.integer('locationid').notNullable().references('id').inTable('locations')
           .onUpdate('CASCADE')
           .onDelete('RESTRICT');
      table.integer('taskid').notNullable().references('id').inTable('tasks')
           .onUpdate('CASCADE')
           .onDelete('RESTRICT');
      table.timestamp('scheduledate').notNullable();
      table.timestamp('createdat').notNullable();
      table.string('notes');     
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('scheduler');
};
