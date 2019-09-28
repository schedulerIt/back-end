//SERVER
const express = require('express');
const server = express();

server.use(express.json());

//ROUTER DECLARATIONS
const accountRouter = require('../accounts/router.js');
const registrationRouter = require('../registration/registration.js');
const locationRouter = require('../locations/router');

server.use('/accounts', accountRouter);
server.use('/registration' , registrationRouter);
server.use('/locations', locationRouter);


server.get('/', (req , res) => {
    res.status(200).json({ Server:'This is my back end for Scheduller'} );
})

module.exports = server;




