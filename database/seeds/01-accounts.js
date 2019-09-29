const faker = require('faker');
var fakeAccounts = []
function fakeAccount() {
  var account = {
    accountid: faker.random.number(),
    createdat: faker.date.recent(),
    updatedat: faker.date.recent()
  }
   return account;        
}


exports.seed = function(knex) {
      for (let i = 0; i < 2; i++) {
          fakeAccounts.push(fakeAccount());
      }
      return knex('accounts').insert(fakeAccounts);
};


