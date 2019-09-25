
exports.up = function(knex) {
  return knex.schema.createTable('managersbytask', table => {
      table.increments('id');
      table.integer('projectid').notNullable().references('id').inTable('tasks') 
      .onUpdate('CASCADE')
      .onDelete('RESTRICT'); 
      table.integer('userid').notNullable().references('id').inTable('users')
           .onUpdate('CASCADE')
           .onDelete('RESTRICT');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('managersbytask');
};
