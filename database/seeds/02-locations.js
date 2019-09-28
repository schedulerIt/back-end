const db = require('../../accounts/accountdb.js');
const faker = require('faker');

function accounts() {
  return new Promise(function(resolve , reject) {
    resolve(db.find());
  })
}

function locations(accounts) {
  return new Promise(function(resolve , reject) {
     var locationBatch = [];
     var locationObject = [];

    for (let i = 0; i < Object.keys(accounts).length ; i++) {
      locationBatch = {
          accountid = accounts[i]['id'],
          address: faker.address(),
          state: faker.usState(),
          state: faker.city(),
          zipCode: faker.zipCode(),
          telephone: faker.telephone(),
          description: faker.paragraph()
    }
    
    locationObject = [...locationObject, locationBatch];
        }
  })
}






exports.seed = function(knex) {

  


  return knex('locations').del()
    .then(function () {

      return knex('locations').insert();
    });
};
