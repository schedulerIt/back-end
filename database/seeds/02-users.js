const faker = require('faker');

const db = require('../db_config');

function generateusers(account) {
  for (let i = 1; i < 4; i++) {

    const userbatch = {
      accountid : account,
      image : faker.image.avatar(),
      firstName : faker.name.firstName(),
      lastName : faker.name.lastName(),
      email : faker.internet.email(),
      passwordhash : faker.random.number(),
      password: "password1234",
      telephone : faker.phone.phoneNumber(),
      telephone_ext : "",
      registrationDate : faker.date.recent(),
      inactive : "true",
      allowogin : "true" 
    }

    return userbatch;
  }
  
}


// function user() {
//   const users = [];
  
//   for (let i = 1; i < Object.keys(query).length; i++) {
//     console.log(Object.keys(query).length)
//     users = users.push(generateusers(Object.keys(query)[i]));
//    }
//   return users;
// }

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      const query = db('accounts').select('accountid');
      console.log('this is my query ', [query]) 



      console.log('inside seed function');
      
      const finalusers = user();

      return knex('users').insert(user());
     
    });
};
