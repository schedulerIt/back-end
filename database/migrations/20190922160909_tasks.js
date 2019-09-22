
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
      table.increments('id');
      table.integer('projectid').notNullable().references('id').inTable('projects')
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');
      table.string('woid', 20).notNullable().unique();
      table.string('description').notNullable();
      table.integer('salesrep').notNullable().references('id').inTable('users')
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');
      table.string('scopeofwork');
      table.string('purchaseorder', 20);
      table.string('finalreport');
      table.timestamp('createdat').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedat').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
