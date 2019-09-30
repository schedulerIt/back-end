const faker = require('faker');
const dbAccounts = require('../../accounts/accountdb.js');
const dblocation= require('../../locations/locationdb.js')

//PROMISE TO GET THE ACCOUNTS
function getAccounts() {
  return returnsQueryBuilder = new Promise((resolve,reject) => {
    resolve(dbAccounts.find());
  });
}

//PROMISE TO GET LOCATIONS
function getlocations() {
  return new Promise(function(resolve , reject) {
    resolve(dblocation.find());
  }
  )}
  
//PROMISE TO ITERATE THRU THE ACCOUNTS AND CREATE 4 USERS PER ACCOUNT
let users = function(account, location) {
  return new Promise(function(resolve , reject) {
        var userbatch = [];
        let arraysize = [];

        for (let i = 0; i < Object.keys(account).length; i++) {
          var fakerarray = [];
          for (let j = 0; j < 4; j++) {
            userbatch = {
                accountid: parseInt(account[i]['id']),
                picture: faker.image.avatar(),
                firstname: faker.name.firstName(),
                lastname: faker.name.lastName(),
                email: faker.internet.email(),
                passwordhash: faker.random.number(),
                password: "password1234",
                telephone: faker.phone.phoneNumber(),
                tel_extension: "",
                created_at: faker.date.recent(),
                updated_at: faker.date.recent(),
                inactive: "true",
                allowlogin: "true", 
                locationid: location[i]['id']
              }
            fakerarray = [...fakerarray, userbatch];
          } 

          arraysize= arraysize.concat(fakerarray);

        }  
        resolve(arraysize);
    })
  }
  
exports.seed = function(knex) {
  return Promise.all([getAccounts(), getlocations()])
        .then(function(result) {
         return users(result[0], result[1]);
      }).then(function (users) { 
        return knex('users').insert(users);
    })
};











