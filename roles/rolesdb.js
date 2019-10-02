const db = require('../database/db_config.js');


module.exports = {
    find
}

function find() {
    return db('roles');
}