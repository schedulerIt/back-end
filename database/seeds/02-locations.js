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
          accountid: accounts[i]['id'],
          address: faker.address.streetAddress(),
          state: faker.address.state(),
          city: faker.address.city(),
          zipcode: faker.address.zipCode(),
          telephone: faker.phone.phoneNumber()
    }
     locationObject = [...locationObject, locationBatch];
        }
        resolve(locationObject);
  })
}

exports.seed = function(knex) {
  return accounts().then(function(account) {
        return locations(account);
      }).then(function (account) { 
        return knex('locations').insert(account);
    })
};