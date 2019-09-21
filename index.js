const server = require('./server/server.js');

//DECLARING DOTENV 
require('dotenv').config();

const PORT = process.env.PORT || 3000;

server.listen(PORT , () => {
    console.log(`Server Listening on port ${PORT}`);
})

