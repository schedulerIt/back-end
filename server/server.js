//SERVER
const express = require('express');
const server = express();

server.use(express.json());

//ROUTER DECLARATIONS
const accountRouter = require('../accounts/router.js');

server.use('/accounts', accountRouter);




server.get('/', (req , res) => {
    res.status(200).json({ Server:'This is my back end for Scheduller'} );
})

module.exports = server;




