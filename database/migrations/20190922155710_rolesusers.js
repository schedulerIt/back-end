
exports.up = function(knex) {
  return knex.schema.createTable('rolesusers', table => {
      table.increments('id');
      table.integer('userid').notNullable().references('id').inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
      table.integer('roleid').notNullable().references('id').inTable('roles')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('rolesusers');
};
