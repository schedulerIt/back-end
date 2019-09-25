
exports.up = function(knex) {
  return knex.schema.createTable('taskstatushistory', table => {
      table.increments('id');
      table.integer('userid').notNullable().references('id').inTable('users')
           .onUpdate('CASCADE')
           .onDelete('RESTRICT');
      table.integer('taskid').notNullable().references('id').inTable('tasks')     
           .onUpdate('CASCADE')
           .onDelete('RESTRICT');
      table.integer('statusid').notNullable().references('id').inTable('taskstatus')
           .onUpdate('CASCADE')
           .onDelete('RESTRICT');
      table.timestamp('createdat').defaultTo(knex.fn.now());     
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('taskstatushistory');
};
