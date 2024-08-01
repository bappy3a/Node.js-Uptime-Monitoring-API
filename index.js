// dependencies
const http = require('http');
const { hendelReqRes } = require('./helper/hendleReqRes');

// app boject - model scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.hendelReqRes);

    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// hendel Request Response
app.hendelReqRes = hendelReqRes;
// start ths server
app.createServer();
