// dependencies
const http = require('http');
const { hendelReqRes } = require('./helper/hendleReqRes');
const environments = require('./helper/environments');
const data = require('./lib/data');

// app boject - model scaffolding
const app = {};

// test file create
// data.create('test', 'newFile', { name: 'Bangladesh', language: 'bangla' }, (err) => {
//     console.log('Error was', err);
// });

// configuration

// create server
app.createServer = () => {
    const server = http.createServer(app.hendelReqRes);

    server.listen(environments.port, () => {
        console.log(`listening to port ${environments.port}`);
    });
};

// hendel Request Response
app.hendelReqRes = hendelReqRes;
// start ths server
app.createServer();
