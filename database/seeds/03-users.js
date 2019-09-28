const faker = require('faker');
const dbAccounts = require('../../accounts/accountdb.js');

//PROMISE TO GET THE ACCOUNTS
function asisi() {
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
let users = function(account) {
  return new Promise(function(resolve , reject) {
        var userbatch = [];
        
        let arraysize = [];

        for (let i = 0; i < Object.keys(account).length; i++) {
          var fakerarray = [];
          for (let j = 0; j < 4; j++) {
            console.log(account[i]['id'])
            userbatch = {
                accountid : parseInt(account[i]['id']),
                picture : faker.image.avatar(),
                firstname : faker.name.firstName(),
                lastname : faker.name.lastName(),
                email : faker.internet.email(),
                passwordhash : faker.random.number(),
                password: "password1234",
                telephone: faker.phone.phoneNumber(),
                tel_extension: "",
                created_at : faker.date.recent(),
                updated_at : faker.date.recent(),
                inactive : "true",
                allowlogin : "true" 
              }
            fakerarray = [...fakerarray, userbatch];
          } 

          arraysize= arraysize.concat(fakerarray);

        }  
        resolve(arraysize);
    })
  }
  
exports.seed = function(knex) {
  return asisi().then(function(account) {
        return users(account);
      }).then(function(account) {
           // Deletes ALL existing entries 
           knex('users').del()
           return account;
      }).then(function (account) { 
        console.log('my last promise: ', account)
        return knex('users').insert(account);
    })
};











