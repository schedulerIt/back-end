const faker = require('faker');
const db = require('../../locations/locationdb.js');

function getLocations() {
  return new Promise(function(resolve, reject) {
    resolve(db.find());
  })
}

exports.seed = function(knex) {

  return getLocations().then(function(result){
    var projectBatch = [];
    var projectObject=[];
      for (i=0 ; i < Object.keys(result).length ; i++) {
        projectBatch = {
          locationid: result[i]['id'],
          name: faker.company.companyName(),
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          zipcode: faker.address.zipCode(),
          contactperson: faker.name.firstName() & " " & faker.name.lastName(),
          contactposition: faker.name.jobDescriptor(),
          telephone: faker.phone.phoneNumber(),
          email: faker.internet.email(),
          notes: faker.lorem.paragraph(),
          createdat: faker.date.recent(),
          updatedat: faker.date.recent()
        }
        projectObject = [...projectObject , projectBatch]
      } 
      return projectObject;
  }).then(function(result){
      return knex('projects').insert(result);
  })
};
