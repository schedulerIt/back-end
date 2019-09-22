//SERVER
const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req , res) => {
    res.status(200).json({ Server:'This is my back end for Scheduller'} );
})

module.exports = server;




