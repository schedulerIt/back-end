
exports.up = function(knex) {
  return knex.schema.createTable('usersbytask', table => {
      table.increments('id');
      table.integer('scheduleid').notNullable().references('id').inTable('scheduler')
           .onUpdate('CASCADE')
           .onDelete('RESTRICT');
      table.integer('userid').notNullable().references('id').inTable('users')
           .onUpdate('CASCADE')
          .onDelete('RESTRICT');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('usersbytask');
};
