const faker = require('faker');
const rolesdb = require('../../roles/rolesdb.js');
const userdb = 

exports.seed = function(knex) {
  
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
