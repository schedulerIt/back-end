
exports.seed = function(knex) {
      return knex('roles').insert([
        {id: 1, name: 'Admin', description: 'Role # 1 description'},
        {id: 2, name: 'Project Manager', description: 'Role # 2 description'},
        {id: 3, name: 'Technician', description: 'Role # 3 description'},
        {id: 4, name: 'Reviewer', description: 'Role # 4 description'},
        {id: 5, name: 'Sales', description: 'Role # 5 description'}
      ]);
};
