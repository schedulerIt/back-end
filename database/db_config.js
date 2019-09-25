require('dotenv').config();

const knex = require('knex');

const config = require('../knexfile.js');

const environment = process.env.NODE_ENV || 'development';

console.log(environment)

module.exports = knex(config[environment]);

