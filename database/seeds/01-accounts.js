const faker = require('faker');

function fakeAccount() {

  const date = new Date();

  const account = {
    accountid: faker.random.number(),
    createdat: faker.date.recent(),
    updatedat: faker.date.recent()
  }
   return account;        
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {

      const fakeAccounts = [];

      for (let i = 1; i< 10; i++) {
          fakeAccounts.push(fakeAccount());
          console.log(fakeAccounts);
      }

      // Inserts seed entries
      return knex('accounts').insert(fakeAccounts);
    });
};
