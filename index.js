const server = require('./server/server.js');

//DECLARING DOTENV 
require('dotenv').config();

const PORT = process.env.SERVER_PORT || 4000;
const HOST = process.env.SERVER_HOST;

server.listen(PORT , () => {
    console.log(`Server Listening on port ${PORT}`);
})

