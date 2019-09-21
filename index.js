const server = require('./server/server.js');

const PORT = process.env.SERVER_PORT || 4000;
const HOST = process.env.SERVER_HOST;

server.listen(PORT , HOST, (req , res) => {
    console.log(`Server Listening on port ${PORT}`);
})

