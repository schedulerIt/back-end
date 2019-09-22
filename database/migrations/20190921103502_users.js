
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('userid').notNullable().unique();
        table.string('email').notNullable().unique();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists(users);
    
  };