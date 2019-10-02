//SERVER
const express = require('express');
const server = express();

server.use(express.json());

//ROUTER DECLARATIONS
const accountRouter = require('../accounts/router.js');
const registrationRouter = require('../registration/registration.js');
const locationRouter = require('../locations/router.js');
const rolesRouter = require('../roles/router.js');
const userRoute = require('../users/router.js');

server.use('/accounts', accountRouter);
server.use('/registration' , registrationRouter);
server.use('/locations', locationRouter);
server.use('/roles', rolesRouter);
server.use('/users', userRoute);


server.get('/', (req , res) => {
    res.status(200).json({ Server:'This is my back end for Scheduller'} );
})

module.exports = server;




