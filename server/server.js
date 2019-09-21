//SERVER
const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req , res) => {
    res.status(200).json({ Server:'<h2>This is my back end for Scheduller</h2'} );
})

module.exports = server;




