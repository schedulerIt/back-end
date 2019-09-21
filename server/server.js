//SERVER
const express = require('express');
const server = express();

//DECLARING DOTENV 
require('dotenv').config();


server.use(express.json());

server.get('/', (req , res) => {
    res.send('<h2>This is my back end for Scheduller</h2');
})

module.exports = server;




