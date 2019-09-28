//MIGRATION FOR USER TABLE
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments('id').notNullable().unique();
      table.integer('accountid').references('id').inTable('accounts').notNullable()
           .onDelete('RESTRICT')
           .onUpdate('CASCADE'); 
      table.binary('picture');
      table.string('firstname', 100).notNullable();
      table.string('lastname', 100).notNullable();
      table.string('email', 100).notNullable().unique();
      table.string('passwordhash').notNullable();
      table.string('password').notNullable();
      table.string('telephone',30);
      table.string('tel_extension', 10);
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
      table.boolean('inactive').defaultTo('true');
      table.boolean('allowlogin').defaultTo('true');
      table.integer('locationid').references('id').inTable('locations').notNullable()
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};